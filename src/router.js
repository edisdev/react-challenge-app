import React from 'react'
import { Switch, Route } from 'react-router-dom';

// pages
import ListPage from './pages/Index';
import NewItemPage from './pages/NewItem';

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={ListPage} />
      <Route path="/new-item" exact component={NewItemPage} />
    </Switch>
  )
}