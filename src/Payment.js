import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useEffect } from 'react';
import axios from './axios';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const Navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(null);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate the special stripe secret which allows us to charge a customer

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log('The secret is >>>', clientSecret);

    const handleSubmit = async e => {
        //do all the stripe stuff
        e.preventDefault();
        setProcessing(true);


        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation

            setSucceeded(true);
            setError(null);
            setProcessing(false);
            Navigate('/orders', { replace: true });
        });
    }

    const handleChange = e => {
        //listen for changes in the cardElement
        //show the errors that come foreward when customer types in card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery adress</h3>
                    </div>
                    <div className='payment__adress'>
                        <p>{user ? user?.email : "guest"}</p>
                        <p>React Lane 123, React</p>
                        <p>Amsterdam, Noord Holland</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* stripe will go here */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button type="button" disabled={disabled || processing || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "buy now"}</span>
                                </button>
                            </div>
                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment