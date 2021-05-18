import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Is4cTGOWIHlcGJn4ghNbxxhy6bGdOrnYSyZekDanH2NXP7H0oTa0toCsH8XZ80HzxirRnCx8XYFj2UffxWusV9D00wgUeE2N6';

const onToken = token => {
  console.log(token);
  alert('Payment Succesful!');
};

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
 };

 export default StripeCheckoutButton;
