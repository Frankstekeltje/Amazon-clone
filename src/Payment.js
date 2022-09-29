import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment