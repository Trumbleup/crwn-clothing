import React from 'react';

import { CartItemContainer, CartItemImage, ItemDetails } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item'/>
        <ItemDetails className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>
                {quantity} x ${price}
            </span>
        </ItemDetails>
    </CartItemContainer>
)

export default CartItem;