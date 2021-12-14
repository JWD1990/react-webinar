import React from 'react';
import propTypes from 'prop-types';
import numberFormat from "../../utils/number-format";
import './styles.css';

function ItemBasket({item, onShowItemInfo}) {
  return (
    <div className='ItemBasket'>
      <div className='ItemBasket__number'>{item._key}</div>
      <div className='ItemBasket__title'>
        <a href='#' 
          className='ItemBasket__link'
          onClick={e => {
            e.preventDefault();
            onShowItemInfo(item._id);
          }}
        >
          {item.title}
        </a>
      </div>
      <div className='ItemBasket__right'>
        <span className="ItemBasket__cell">{numberFormat(item.price || 0)} ₽</span>
        <span className="ItemBasket__cell">{numberFormat(item.amount || 0)} шт</span>
      </div>
    </div>
  )
}

ItemBasket.propTypes = {
  item: propTypes.object.isRequired,
  onShowItemInfo: propTypes.func,
}

ItemBasket.defaultProps = {

}

export default React.memo(ItemBasket);
