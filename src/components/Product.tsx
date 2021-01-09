import React, {ChangeEvent, useState} from 'react';
import {Product} from "../models/Product";
import classes from './Product.module.scss';

function ProductCard(
    { id, category, description, image, price, title, onClick, onRemove }: Product & { onClick: Function, onRemove: Function },
    ) {

    const [quantity, setQuantity] = useState<number>(1);
    const covertToNumber = (value: any): number => Number.parseFloat(String(value));
    const handleInputChange = (change: ChangeEvent<HTMLInputElement>) => {
        setQuantity(covertToNumber(change.target.value));
    }

    return (
        <div className={classes.productCard}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <h4>{category}</h4>
            <p>{description}</p>
            <span>{price}</span>
            <input
                type="number"
                min={0}
                value={quantity}
                onChange={handleInputChange} />
            <button
                disabled={!quantity}
                onClick={() => onClick({ id, quantity })}>Buy now!</button>
            <button onClick={() => onRemove({ id, quantity })}>Remove!</button>
        </div>
    )
}

export default ProductCard;
