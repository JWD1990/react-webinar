import StoreModule from "../module";

class CatalogStore extends StoreModule {

  /**
   * Начальное состояние
   */
  initState() {
    return {
      items: [],
      limit: 10,
      skip: 0,
      count: 0,
      currentPage: 1,
      maxPage: 1
    };
  }

  /**
   * Загрузка списка товаров
   */
  async load(){
    const data = this.getState();
    const response = await fetch(`/api/v1/articles?limit=${data.limit}&skip=${data.skip}&fields=items(*),count`);
    const json = await response.json();
    let maxPage = Math.ceil(json.result.count / data.limit);

    if (0 === json.result.count % data.limit) {
      --maxPage;
    }

    this.setState({
      ...data,
      items: json.result.items,
      count: json.result.count,
      maxPage
    });
  }

  /**
   * Установка номера страницы
   */
  setPage(numberPage) {
    const data = this.getState();

    if (data.maxPage < numberPage || !numberPage) {
      console.log(`Ошибка установки номера страницы! Номер: ${numberPage}`);
      return;
    }

    this.setState({
      ...data,
      currentPage: numberPage,
      skip: numberPage === 1 ? 0 : data.limit * numberPage
    })
  }
}

export default CatalogStore;
