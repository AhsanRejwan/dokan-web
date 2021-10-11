import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaCashRegister, FaStore, FaTruck } from "react-icons/fa";
import { IoCashOutline } from "react-icons/io5";
import { DELIVERY_METHOD, PAYMENT_METHOD } from "../constants/appConstants";
import { useCartContext } from "../contexts/CartContext";

type ConfirmSection = {
  deliveryMethod: string | string[] | undefined;
};

export const ConfirmSection = (props: ConfirmSection) => {
  const { deliveryMethod } = props;
  const { products } = useCartContext();

  return (
    <>
      <div className="mb-3">
        <InputGroup className="mb-2">
          <Form.Control
            disabled
            value={products.reduce((prev, current) => {
              return prev + current.quantity * current.price;
            }, 0)}
            aria-label="total-amount"
            aria-describedby="total-icon"
          />
          <InputGroup.Text id="total-icon">
            <FaCashRegister size={18} className="primary" />
          </InputGroup.Text>
        </InputGroup>
        <div className="text-muted">Total</div>
      </div>
      <div className="mb-3">
        <InputGroup className="mb-2">
          <Form.Control
            disabled
            value={
              DELIVERY_METHOD[deliveryMethod as keyof typeof DELIVERY_METHOD]
                .label
            }
            aria-label="delivery-method"
            aria-describedby="delivery-icon"
          />
          <InputGroup.Text id="delivery-icon">
            {deliveryMethod === DELIVERY_METHOD.HOME_DELIVERY.value ? (
              <FaTruck size={18} className="primary" />
            ) : (
              <FaStore size={18} className="primary" />
            )}
          </InputGroup.Text>
        </InputGroup>
        <div className="text-muted">Delivery Method</div>
      </div>
      <div className="mb-3">
        <InputGroup className="mb-2">
          <Form.Control
            disabled
            value={PAYMENT_METHOD.cashOnDelivery.label}
            aria-label="payment-method"
            aria-describedby="payment-icon"
          />
          <InputGroup.Text id="payment-icon">
            <IoCashOutline size={18} className="primary" />
          </InputGroup.Text>
        </InputGroup>
        <div className="text-muted">Payment Method</div>
      </div>
    </>
  );
};
