import React, {useCallback, useState} from 'react';
import Controls from "./components/controls";
import List from "./components/list";
import Layout from "./components/layout";
import Modal from "./components/modal";

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function App({store}) {
  console.log('App');

  const [activeModal, setActiveModal] = useState(false);

  const callbacks = {
    onCreateItem: useCallback(() => store.createItem(), [store]),
    onSelectItem: useCallback((code) => store.selectItem(code), [store]),
    onAddPosition: useCallback((code, price) => store.addPosition(code, price), [store]),
    onActiveModal: useCallback((active) => setActiveModal(active), [
      activeModal, setActiveModal
    ])
  }

  const basket = store.getState().basket;
  let countPositions = 0;
  let totalPrice = 0;

  for (let [key, value] of basket) {
    totalPrice += key.cost * value;
    countPositions += value;
  }

  return (
    <>
      <Layout head={<h1>Магазин</h1>}>
        <Controls onCreate={callbacks.onCreateItem}
                  countPositions={countPositions}
                  totalPrice={totalPrice}
                  onActiveModal={callbacks.onActiveModal}
        />
        <List items={store.getState().items}
              onSelectItem={callbacks.onSelectItem}
              onAddPosition={callbacks.onAddPosition}/>
      </Layout>
      <Modal basket={basket}
              active={activeModal}
              onActive={callbacks.onActiveModal}
              countPositions={countPositions}
              totalPrice={totalPrice}
      />
    </>
  );
}

export default App;