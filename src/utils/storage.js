import { 
  STATE_LIST_NAME, 
  STATE_ORDER_NAME 
} from './constant'

import DummyList from '../data/dummy-list'
export default class Data {
  constructor({ list, setList = () => {}, order = { field: 'createdAt', direction: 'desc', type: 'date'}, setOrder = () => {} }) {
    this.order = order;
    this.list = list;
    this.setList = setList
    this.setOrder = setOrder
  }

  init () {
    this.addMultiItems(DummyList)
    this.setList(this.sortedList());
  }

  
  setItems (items = this.list) {
    localStorage.setItem(STATE_LIST_NAME, JSON.stringify(items))
    this.setList(this.sortedList())
  }

  compareFactor(order, a, b) {
    let compare
    if (order.field === 'vote' && a.vote === b.vote) {
      compare = new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
    } else {
      let first = order.type === 'date' ? new Date(a[order.field]).getTime() : a[order.field]
      let last = order.type === 'date' ? new Date(b[order.field]).getTime() : b[order.field]
      compare = first - last
    }
    return compare
  }

  sortedList (order = this.order) {
    let list = this.getItems()
    let compare
    if (order.direction === 'asc') compare = (a, b) => this.compareFactor(order, a, b)
    else compare = compare = (a, b) => this.compareFactor(order, b, a)
    list = list.sort((a, b) => compare(a, b))
    return list
  }

  async changeOrderType (order) {
    this.setOrderType(order)
    this.setOrder(order)
    this.setList(this.sortedList(order))
  }

  getOrderType () {
    return localStorage.getItem(STATE_ORDER_NAME) || 'desc'
  }

  setOrderType (order) {
    localStorage.setItem(STATE_ORDER_NAME, JSON.stringify(order))
  }

  getItems () {
    return (JSON.parse(localStorage.getItem(STATE_LIST_NAME)) || [])
  }

  addMultiItems (items) {
    let currentList = this.getItems().map(_ => _.id)
    let newItems = items.filter(_ => !currentList.includes(_.id))
    this.setItems([...this.getItems(), ...newItems])
  }
  addItem (newItem) {
    if (this.findItem(newItem)) return
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