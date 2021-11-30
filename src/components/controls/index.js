import React, { useCallback } from "react";
import propTypes from 'prop-types';
import plural from 'plural-ru';
import './styles.css';

function Controls({onCreate, countPositions, totalPrice, onActiveModal}){
  console.log('Controls');

  const callbacks = {
    onSetActiveModal: useCallback(() => onActiveModal(true), [onActiveModal])
  }
  return (
    <div className='Controls'>
      <span>В корзине:</span>
      &nbsp;
      <b>{countPositions ?
        ` ${countPositions} ${plural(countPositions, 'товар', 'товара', 'товаров')} \\ 
          ${(totalPrice).toLocaleString("ru-RU", {style:'currency', currency:'RUB', minimumFractionDigits: 0})}`
        :
        ' Пусто '
      }</b>
      &nbsp;
      <button onClick={callbacks.onSetActiveModal}> Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onCreate: propTypes.func.isRequired,
  countPositions: propTypes.number,
  totalPrice: propTypes.number,
  onActiveModal: propTypes.func
}

Controls.defaultProps = {
  onCreate: () => {},
  countPositions: 0,
  totalPrice: 0,
  onActiveModal: () => {}
}

export default React.memo(Controls);