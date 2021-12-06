import React, { useCallback } from "react";
import propTypes from 'prop-types';
import './styles.css';

function Modal({ basket, active, onActive, totalAmount, totalPrice }) {
  console.log('Modal');

  const callbacks = {
    onClick: useCallback(() => {
      onActive(false);
    }, [onActive])
  }

  return (
    <div className={"Modal" + (active ? ' Modal_active' : '')}>
      <div className="Modal__content">
        <div className="Modal__head">
          <div className="Modal__title">Корзина</div>
          <button className="Modal__active-btn" onClick={callbacks.onClick}>Закрыть</button>
        </div>
        <div className="Modal__list">{basket.map((i, idx) =>
          <div className="List__item" key={i.code}>
            <div className='Item'>
              <div className='Item__number'>{idx + 1}</div>
              <div className='Item__content'>
                <div className='Item__title'>{i.title}</div>
                <div className='Item__cost'>{(i.cost).toLocaleString("ru-RU", {style:'currency', currency:'RUB', minimumFractionDigits: 0})}</div>
              </div>
              <div className='Item__count Modal__last-cell'>{`${i.amount} шт`}</div>
            </div>
          </div>
        )}
        </div>
        <div className='Modal__result'>
          <div className='Modal__result-title'>Итого</div>
          <div className='Modal__total-price Modal__pre-last-cell'>{(totalPrice).toLocaleString("ru-RU", {style:'currency', currency:'RUB', minimumFractionDigits: 0})}</div>
          <div className='Modal__total-amount Modal__last-cell'>{`${totalAmount} шт`}</div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  basket: propTypes.arrayOf(propTypes.object).isRequired,
  active: propTypes.bool,
  onActive: propTypes.func,
  countPositions: propTypes.number,
  totalPrice: propTypes.number
}

Modal.defaultProps = {
  basket: [],
  active: false,
  onActive: () => { },
  countPositions: 0,
  totalPrice: 0
}

export default React.memo(Modal);