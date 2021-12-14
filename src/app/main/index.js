import React, {useCallback, useEffect} from "react";
import Item from "../../components/item";
import Layout from "../../components/layout";
import BasketSimple from "../../components/basket-simple";
import List from "../../components/list";
import useStore from "../../utils/use-store";
import useSelector from "../../utils/use-selector";
import Pagination from "../../components/pagination";
import { useHistory } from "react-router-dom";

function Main() {
  const select = useSelector(state => ({
    items: state.catalog.items,
    amount: state.basket.amount,
    sum: state.basket.sum,
    currentPage: state.catalog.currentPage
  }));

  // Загрузка тестовых данных при первом рендере и установки новой страницы
  useEffect(async () => {
    await store.catalog.load();
  }, [select.currentPage]);

  const store = useStore();
  const router = useHistory();

  const callbacks = {
    addToBasket: useCallback((_id) => store.basket.add(_id), [store]),
    openModal: useCallback(() => store.modals.open('basket'), [store]),
    showItemInfo: useCallback(id => {
      store.modals.close();
      router.push(`/catalog/${id}`);
    }, [store]),
  }

  const renders = {
    item: useCallback(item => {
      return <Item item={item} onAdd={callbacks.addToBasket} onShowItemInfo={callbacks.showItemInfo} />
    }, [callbacks.addToBasket]),
  }

  return (
    <Layout head={<h1>Магазин</h1>}>
      <BasketSimple onOpen={callbacks.openModal} amount={select.amount} sum={select.sum}/>
      <List items={select.items} renderItem={renders.item}/>
      <Pagination />
    </Layout>
  );
}

export default React.memo(Main);
