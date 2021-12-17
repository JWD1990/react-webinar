import React from 'react';
import propTypes from 'prop-types';
import './styles.css';
import usePagination from '../../utils/use-pagination';

function Pagination({maxPage, currentPage, onSelect}) {
  const pages = usePagination(maxPage);

  return (
    <div className='Pagination'>
      {pages.map((page, idx) =>
        <div key={idx}
            className={'Pagination__item' + (page === currentPage ? ' Pagination__item_active': '')}
            onClick={() => onSelect(page)}
        >
          {page}
        </div>
      )}
    </div>
  );
}

Pagination.propTypes = {
  maxPage: propTypes.number.isRequired,
  currentPage: propTypes.number,
  onSelectPage: propTypes.func
}

Pagination.defaultProps = {
  maxPage: 1,
  currentPage: 1,
  onSelectPage: () => {}
}

export default React.memo(Pagination);
