import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { subscribeToUpdateCartCount } from '../pub-sub';

const EmptyCart = (props) => {
  const { cartChair, cartCount } = props;
  const [count, setCount] = useState(cartCount);

  useEffect(() => {
    subscribeToUpdateCartCount((event, num) => {
      setCount(num);
    });
  }, []);

  return (
    <div className={`${count > 0 ? 'hidden' : ''} text-center`}>
      <p className="mb-0 mt-16 uppercase text-black">Your cart is empty.</p>
      <p className="uppercase text-black">Not sure where to start?</p>
      <div className="absolute transform -translate-x-1/2 bottom-20 left-1/2">
        <button className="primary_btn empty_shop_all_btn" type="button">
          <a className="no-underline" href="https://wallnut.com/collections/all">
            SHOP ALL
          </a>
        </button>
      </div>
    </div>
  );
};

EmptyCart.propTypes = {
  cartChair: PropTypes.string.isRequired,
  cartCount: PropTypes.number.isRequired,
};

export default EmptyCart;
