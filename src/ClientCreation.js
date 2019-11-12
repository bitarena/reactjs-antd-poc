import React from 'react';
import { Steps, Button, message, Col, Row, Input } from 'antd';
import 'antd/dist/antd.css';

const { Step } = Steps;

const steps = [
  {
    title: 'Basic',
    content: 
    <div className="gutter-example">
      <Row gutter={16}>
        <Col className="gutter-row" span={12}>
          <Input placeholder="username" />
        </Col>
        <Col className="gutter-row" span={12}>
          <Input placeholder="full name" />
        </Col>
      </Row>
      <br />
      <Row gutter={16}>
        <Col className="gutter-row" span={12}>
          <Input placeholder="phone number" />
        </Col>
        <Col className="gutter-row" span={12}>
          <Input placeholder="company name" />
        </Col>
      </Row>
    </div>,
  },
  {
    title: 'Invoicing',
    content: 'Second-content',
  },
  {
    title: 'Social Media',
    content: 'Last-content',
  },
];

export default class ClientCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}