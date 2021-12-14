import React from 'react';
import propTypes from 'prop-types';
import numberFormat from "../../utils/number-format";
import './styles.css';

function ItemInfoContent({ data, onAdd }) {
  return (
    <div className="Item-info">
      <p className="Item-info__description">{data.description}</p>
      <p className="Item-info__made-in">
        Страна производитель: <b>{data.maidIn.title + ` (${data.maidIn.code})`}</b>
      </p>
      <p className="Item-info__category-item">
        Категория: <b>{data.category.title}</b>
      </p>
      <p className="Item-info__edition">
        Год выпуска: <b>{data.edition}</b>
      </p>
      <p className="Item-info__price">
        <b>Цена: {numberFormat(data.price)} ₽</b>
      </p>
      <button onClick={() => onAdd(data._id)}>Добавить</button>
    </div>
  )
}

ItemInfoContent.propTypes = {
  data: propTypes.object.isRequired,
  onAdd: propTypes.func,
}

ItemInfoContent.defaultProps = {

}

export default React.memo(ItemInfoContent);
