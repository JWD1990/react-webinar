import store from './store';

class AppStore extends store {
  constructor(initState) {
    super(initState);
  }

  /**
   * Создание записи
   */
  createItem() {
    const code = Math.max(0, ...this.state.items.map(item => item.code)) + 1;
    this.setState({
      items: this.state.items.concat({
        code,
        title: 'Новая запись №'+code
      })
    });
  }

  /**
   * Удаление записи по её коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      items: this.state.items.filter(item => item.code !== code)
    });
  }

  /**
   * Выделение записи по её коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      items: this.state.items.map(item => {
        if (item.code === code){
          item.selected = !item.selected;
          this.incrementCountSelectedItem(item);
        }
        return item;
      })
    })
  }

  /**
   * Подсчёт количества выделения записи
   * @param item {item}
   */
  incrementCountSelectedItem(item) {
    if (!item.selectedCount) {
      item.selectedCount = 0;
    }

    if (item.selected) {
      item.selectedCount++;
    }
  }
}

export default AppStore;