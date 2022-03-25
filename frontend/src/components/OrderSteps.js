import React from 'react';
import { Link } from 'react-router-dom';
import { Step } from 'semantic-ui-react';

const OrderSteps = ({ step }) => {
  return (<div className="order-steps">
      <Step.Group size="small" widths={3} style={{ maxWidth: '1000px' }} ordered unstackable>
        <Step active={step === 'address'} completed={step !== 'address'}>
          <Link to="/shipping">
            <Step.Content>
              <Step.Title>Shipping</Step.Title>
            </Step.Content>
          </Link>
        </Step>
        <Step active={step === 'billing'}
              disabled={step !== 'billing' ? (step !== 'confirm') : false}
              completed={step === 'confirm'}>
          <Link to="/payment">
            <Step.Content>
              <Step.Title>Payment Method</Step.Title>
            </Step.Content>
          </Link>
        </Step>

        <Step active={step === 'confirm'} disabled={step !== 'confirm'}>
          <Step.Content>
            <Step.Title>Place Order</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
    </div>);
};

export default OrderSteps;
