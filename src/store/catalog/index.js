import StoreModule from "../module";

class CatalogStore extends StoreModule {

  /**
   * Начальное состояние
   */
  initState() {
    return {
      items: [],
      limit: 10,
      count: 0,
      currentPage: 1,
      maxPage: 1
    };
  }

  /**
   * Загрузка списка товаров
   */
  async load(numberPage){
    const data = this.getState();

    if (data.maxPage < numberPage || !numberPage) {
      numberPage = 1;
    }

    const skip = numberPage === 1 ? 0 : data.limit * numberPage;

    const response = await fetch(`/api/v1/articles?limit=${data.limit}&skip=${skip}&fields=items(*),count`);
    const json = await response.json();
    let maxPage = Math.ceil(json.result.count / data.limit);

    if (0 === json.result.count % data.limit) {
      --maxPage;
    }

    this.setState({
      ...data,
      items: json.result.items,
      count: json.result.count,
      maxPage,
      currentPage: numberPage
    });
  }
}

export default CatalogStore;
