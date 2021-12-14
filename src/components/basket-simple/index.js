import React from 'react';
import propTypes from 'prop-types';
import plural from "plural-ru";
import numberFormat from "../../utils/number-format";
import './styles.css';

function BasketSimple({sum, amount, onOpen, onGoHome}) {
  return (
    <div className='BasketSimple'>
      <a href='#'
        className={'BasketSimple__link' + (!onGoHome ? ' BasketSimple__link_hide' : '')}
        onClick={(e) => {
          e.preventDefault();
          onGoHome && onGoHome();
        }}
      >
        Главная
      </a>
      <div className="BasketSimple__content">
        <span className="BasketSimple__label">В корзине:</span>
        <span className="BasketSimple__total">
        {amount
          ? `${amount} ${plural(amount, 'товар', 'товара', 'товаров')} / ${numberFormat(sum)} ₽`
          : `пусто`
        }
        </span>
        <button className='BasketSimple__button' onClick={onOpen}>Перейти</button>
      </div>
    </div>
  )
}

BasketSimple.propTypes = {
  onOpen: propTypes.func.isRequired,
  sum: propTypes.number,
  amount: propTypes.number
}

BasketSimple.defaultProps = {
  onOpen: () => {},
  sum: 0,
  amount: 0
}

export default React.memo(BasketSimple);