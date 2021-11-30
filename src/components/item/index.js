import React, {useCallback, useState} from "react";
import propTypes from 'prop-types';
import './styles.css';

function Item({item, onSelect, onAdd}){
  console.log('Item', item.title);

  const [counter, setCounter] = useState(0);

  const callbacks = {
    onClick: useCallback(() => {
      // onSelect(item.code);
      // if (!item.selected){
        setCounter(counter + 1);
      // }
    }, [item, onSelect, counter, setCounter]),
    add: useCallback(() => {
      onAdd(item);
    }, [onAdd, item])
  };

  return (
    <div className={'Item'  + (item.selected ? ' Item_selected' : '')} onClick={callbacks.onClick}>
      <div className='Item__number'>{item.code}</div>
      <div className='Item__content'>
        <div className='Item__title'>{item.title}</div>
        <div className='Item__cost'>{(item.cost).toLocaleString("ru-RU", {style:'currency', currency:'RUB', minimumFractionDigits: 0})}</div>
      </div>
      <div className='Item__actions'>
        <button onClick={callbacks.add}>
          Добавить
        </button>
      </div>
    </div>
  )
}

Item.propTypes = {
  item: propTypes.object.isRequired,
  onSelect: propTypes.func.isRequired,
  onAdd: propTypes.func.isRequired
}

Item.defaultProps = {
  onSelect: () => {},
  onAdd: () => {}
}

export default React.memo(Item);