/* eslint-disable */
import { PureComponent } from "react";
import "./CheckoutProgress.style";
import {
  BILLING_STEP,
  DETAILS_STEP,
} from "./Checkout.config";

export class CheckoutProgress extends PureComponent {
  render() {
    const { checkoutStep } = this.props;

    return (
      <div block="CheckoutProgress">
        <div block="CheckoutProgress" elem="Element" mods={{ Left: true }}>
          <div
            block="CheckoutProgress"
            elem="Bar"
            mods={{ Left: true, Active: true }}
          ></div>
        </div>

        <div block="CheckoutProgress" elem="Step">
          <div
            block="CheckoutProgress"
            elem="Number"
            mods={{
              Active: true,
              Checked:
                checkoutStep === BILLING_STEP || checkoutStep === DETAILS_STEP,
            }}
          >
            <span>1</span>
          </div>
          <span block="CheckoutProgress" elem="Title" mods={{ Active: true }}>
            {__("Shipping")}
          </span>
        </div>

        <div block="CheckoutProgress" elem="Element">
          <div
            block="CheckoutProgress"
            elem="Bar"
            mods={{
              Active:
                checkoutStep === BILLING_STEP || checkoutStep === DETAILS_STEP,
            }}
          ></div>
        </div>

        <div block="CheckoutProgress" elem="Step">
          <div
            block="CheckoutProgress"
            elem="Number"
            mods={{
              Active:
                checkoutStep === BILLING_STEP || checkoutStep === DETAILS_STEP,
              Checked: checkoutStep === DETAILS_STEP,
            }}
          >
            <span>2</span>
          </div>
          <span
            block="CheckoutProgress"
            elem="Title"
            mods={{
              Active:
                checkoutStep === BILLING_STEP || checkoutStep === DETAILS_STEP,
            }}
          >
            {__("Review & Payments")}
          </span>
        </div>

        <div block="CheckoutProgress" elem="Element" mods={{ Right: true }}>
          <div
            block="CheckoutProgress"
            elem="Bar"
            mods={{ Active: checkoutStep === DETAILS_STEP }}
          ></div>
        </div>
      </div>
    );
  }
}

export default CheckoutProgress;
