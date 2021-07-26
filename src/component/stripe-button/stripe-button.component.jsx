import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCehckoutButton = ({price}) => {
    const publishableKey = 'pk_test_51JHUr8SHSvUeKTNlQyeWsB0sGBbVmAhgapG8HkmVFwvOf21CInA9HPyTZIuZBsOffS2XJcGnTDmhkuwmHhSpXRj3002yLVh4sf'

const onToken = token => {
    console.log(token);
    alert("Payment Successful");
}

 return (
     <StripeCheckout 
        label = 'Pay Now'
        name = 'Sports shop'
        billingAddress
        shippingAddress
        image='htpps://svgshare.com/i/CUz.svg'
        description= {`Your total is Rs.${price}`}
        amount={price}
        panelLabel = 'Pay Now'
        token={onToken}
        stripeKey={publishableKey}
     />
 );
};

export default StripeCehckoutButton;