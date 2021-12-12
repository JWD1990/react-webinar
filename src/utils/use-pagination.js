import React from 'react';

/**
 * Хук для расчёта количества страниц на отрисовку для пагинации
 * @param count {Number}
 * @param limit {Number}
 * @return []
 */
export default function usePagination(totalPages) {
  const pagesArray = React.useMemo(() => {
    const pages = [];
  
    for(let idx = 1; idx <= totalPages; idx++) {
      pages.push(idx);
    }
  
    return pages;
  }, [totalPages]);

  return pagesArray;
}
