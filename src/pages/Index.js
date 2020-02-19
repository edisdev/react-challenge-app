import React, { useState, useEffect } from 'react'
//
import NewItemLink from '../components/NewItemLink';
import ItemList from '../components/ItemList';

//
import Storage from '../utils/storage';

const ListPage = () => {


  let [list, setList] = useState([]);
  let [order, setOrder] = useState({
    field: 'createdAt',
    direction: 'desc',
    type: 'date'
  });

  let storage = new Storage({ list, order, setList, setOrder })

  useEffect (() => {
    storage.init()
  }, [])

  return (
    <div className="Home">
      <NewItemLink/>
      <ItemList list={list} order={order} storage={storage}/>
    </div>
  )
}

export default ListPage