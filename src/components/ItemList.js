import React, { useState, useEffect } from 'react'

import Item from './Item';
import Select from './Select';
import Pagination from './Pagination';
import Crying from './icons/Crying';

export default ({ list, order, storage }) => {
  let [pageSize] = useState(5)  
  let getPageList = () => {
    let startIndex = (page - 1) * pageSize;
    let endIndex = page * pageSize;
    return list.slice(startIndex, endIndex)
  }

  let [page, setPage] = useState(1)

  let [currentList, setCurrentList] = useState(getPageList())

  let sortOptions = [
    {
      value: '',
      label: 'Order By Vote'
    },
    {
      value: 'asc',
      label: 'Most voted'
    },
    {
      value: 'desc',
      label: 'Less voted'
    }
  ]

  useEffect(() => {
    setCurrentList(getPageList())
  }, [page, list])

  function changeOrder(e) {
    let value = e.target.value
    let field = value ? 'vote' : 'createdAt'
    let direction = field === 'vote' ? value : 'desc'
    let type = field === 'createdAt' ? 'date' : ''
    storage.changeOrderType({
      field,
      direction,
      type
    })
  }

  let selectAttrs = {
    value: order.field === 'vote' ? order.direction : '',
    onChange: (e) => changeOrder(e)
  }

  let changePage = (page) => {
    setPage(page)
  }

  return (
    <>
      {
        list.length === 0 ?
        <h3 className="emptyList">
          <span className="m-right-10">The Link List is Empty Yet</span>
          <Crying color="#FF6000"/>
        </h3>
        :
        <>
          <div className="flex flex-align-center">
            <span className="m-right-10">Order By: </span>
            <Select attrs={selectAttrs} options={sortOptions}/>
          </div>
          <div className="itemList">
            {
              currentList.map(item => {
                return (<Item key={item.id} item={item} storage={storage}/>)
              })
            }
            <Pagination 
              totalCount={list.length}
              page={page}
              pageSize={pageSize}
              setPaginition={(page) => changePage(page)}/>
          </div>
        </>
      }
    </>
  )
}