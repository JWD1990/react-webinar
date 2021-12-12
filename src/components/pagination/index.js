import React, {useCallback} from 'react';
import './styles.css';
import usePagination from '../../utils/use-pagination';
import useStore from '../../utils/use-store';
import useSelector from '../../utils/use-selector';

function Pagination() {
  const store = useStore();

  const select = useSelector(state => ({
    currentPage: state.catalog.currentPage,
    count: state.catalog.count,
    limit: state.catalog.limit,
    maxPage: state.catalog.maxPage
  }));

  const pages = usePagination(select.maxPage);

  const callbacks = {
    onSelectPage: useCallback((numberPage) => store.catalog.setPage(numberPage), [store])
}

  return (
    <div className='Pagination'>
      {pages.map((page, idx) =>
        <div key={idx}
            className={'Pagination__item' + (page === select.currentPage ? ' Pagination__item_active': '')}
            onClick={() => callbacks.onSelectPage(page)}
        >
          {page}
        </div>
      )}
    </div>
  );
}

export default React.memo(Pagination);
