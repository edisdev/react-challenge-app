import { list } from './__mocks__/state';
import Storage from '../utils/storage';

const setList = (list) => {}

const order = 'desc'

const setOrder = (order) => {}

let storage = new Storage({ list, setList, order, setOrder })

describe('state was changed correctly', () => {

  test('added item', () => {
    let newItem = {
      id: "_6hipx00i8",
      name: "linkedin",
      link: "linkedin.com",
      vote: 3
    }
    storage.addItem(newItem)
    expect(list.length).toBe(3)
  })

  test('updated Item', () => {
    let updatedItem = {
      id: "_6hipx00i8",
      name: "linkedin",
      link: "linkedin.com",
      vote: 10
    }
    storage.updateItem(updatedItem)
    expect(list.find(_ => _.id === '_6hipx00i8').vote).toBe(10)
  })
})