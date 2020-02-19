import { useState } from 'react'

import { 
  STATE_LIST_NAME, 
  STATE_ORDER_NAME 
} from './constant'

export default class Data {
  constructor() {
    let order = this.getOrderType();
    [this.order, this.setOrderState] = useState(order);
    [this.list, this.setList] = useState(this.sortedList());
  }

  
  setItems (items = this.list) {
    localStorage.setItem(STATE_LIST_NAME, JSON.stringify(items))
    this.setList(this.sortedList())
  }

  sortedList (order = this.order) {
    let list = this.getItems()
    let condition
    if (order === 'asc') condition = (a, b) =>  a.vote - b.vote
    else condition = (a, b) =>  b.vote - a.vote
    list = list.sort((a, b) => condition(a, b))
    return list
  }

  async changeOrderType (order) {
    this.setOrderType(order)
    this.setList(this.sortedList(order))
  }

  getOrderType () {
    return localStorage.getItem(STATE_ORDER_NAME) || 'desc'
  }

  setOrderType (order) {
    localStorage.setItem(STATE_ORDER_NAME, order)
    this.setOrderState(order)
  }

  getItems () {
    return (JSON.parse(localStorage.getItem(STATE_LIST_NAME)) || [])
  }

  addItem (newItem) {
    this.list.push(newItem)
    this.setItems(this.list)
  }

  findItem (item) {
   return this.list.find(l => l.id === item.id)
  }

  findItemIndex (item) {
    return this.list.findIndex(l => l.id === item.id)
  }
  
  updateItem (item) {
    let updatedItemIndex = this.findItemIndex(item)
    this.list.splice(updatedItemIndex, 1)
    this.list.push(item)
    this.setItems(this.list)
  }

  deleteItem (item) {
    let deleteItemIndex = this.findItemIndex(item)
    this.list.splice(deleteItemIndex, 1)
    this.setItems(this.list)
  }

}