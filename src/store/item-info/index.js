import StoreModule from "../module";

class ItemInfoStore extends StoreModule {

  /**
   * Начальное состояние
   */
  initState() {
    return {
      data: null
    };
  }

  /**
   * Загрузка подробной информации о товаре
   */
  async load(id) {
    const state = this.getState();

    if (state.data?._id === id) {
      return;
    }

    const response = await fetch(`/api/v1/articles/${id}?fields=*,maidIn(title,code),category(title)`);
    const json = await response.json();

    this.setState({
      ...state,
      data: json.result
    });
  }

  /**
   * Сброс подробной информации о товаре (чтобы не мелькало)
   */
  skipData() {
    this.setState({
      data: null
    });
  }
}

export default ItemInfoStore;
