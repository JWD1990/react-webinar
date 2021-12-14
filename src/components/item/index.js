import React from 'react';
import propTypes from 'prop-types';
import './styles.css';
import numberFormat from "../../utils/number-format";

function Item({item, onAdd, onShowItemInfo}) {
  return (
    <div className='Item'>
      <div className='Item__number'>{+item._key + 1}</div>
      <div className='Item__title'>
        <a href='#' 
            className='Item__link'
            onClick={e => {
              e.preventDefault();
              onShowItemInfo(item._id);
            }}
          >
            {item.title}
          </a>
        </div>
      <div className='Item__right'>
        <div className='Item__price'>{numberFormat(item.price)} ₽</div>
        <button onClick={() => onAdd(item._id)}>Добавить</button>
      </div>
    </div>
  )
}

Item.propTypes = {
  item: propTypes.object.isRequired,
  onAdd: propTypes.func,
  onShowItemInfo: propTypes.func,
}

Item.defaultProps = {
  onAdd: () => {}
}

export default React.memo(Item);
