import React from 'react';
import Main from "./main";
import Basket from "./basket";
import useSelector from "../utils/use-selector";
import ItemInfo from './item-info';
import { Redirect, Route, Switch } from 'react-router-dom';

/**
 * Приложение
 */
function App() {
  const select = useSelector(state => ({
    name: state.modals.name
  }));

  return (
    <>
      <Switch>
        <Route path='/catalog' component={Main} exact={true} />
        <Route path='/catalog/:id' component={ItemInfo} exact={true} />
        <Redirect to='/catalog' />
      </Switch>
      {select.name === 'basket' && <Basket/>}
    </>
  );
}

export default React.memo(App);
