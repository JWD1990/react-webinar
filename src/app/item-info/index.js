import React, { useEffect, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import Layout from "../../components/layout";
import useSelector from "../../utils/use-selector";
import useStore from "../../utils/use-store";
import BasketSimple from "../../components/basket-simple";
import ItemInfoContent from "../../components/item-info-content";

function ItemInfo() {
  const params = useParams();
  const router = useHistory();
  const store = useStore();
  const select = useSelector(state => ({
    itemInfo: state.itemInfo.data,
    amount: state.basket.amount,
    sum: state.basket.sum,
    items: state.catalog.items
  }));

  useEffect(async () => {
    if (!select.items.length) {
      await store.catalog.load();
    }

    await store.itemInfo.load(params.id);
  }, [params.id]);

  const callbacks = {
    openModal: useCallback(() => store.modals.open('basket'), [store]),
    goHome: useCallback(() => {
      store.itemInfo.skipData();
      router.push('/catalog');
    }, []),
    addToBasket: useCallback((_id) => { store.basket.add(_id)}, [store]),
  }

  return (
    <Layout head={<h1>{select.itemInfo?.title || 'Загрузка...'}</h1>}>
      <BasketSimple
        onOpen={callbacks.openModal} 
        amount={select.amount} 
        sum={select.sum}
        onGoHome={callbacks.goHome}
      />
      {select.itemInfo && <ItemInfoContent data={select.itemInfo} onAdd={callbacks.addToBasket} />}
    </Layout>
  )
}

export default React.memo(ItemInfo);