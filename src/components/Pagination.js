import React, { useState, useEffect } from 'react'

import Button from './Button';
import ArrowLeft from './icons/ArrowLeft';
import ArrowRight from './icons/ArrowRight';

export default ({ totalCount, pageSize = 5, setPaginition, page }) => {
  let calculateSize = () => Math.ceil(totalCount / pageSize)
  let [size, setSize] = useState(calculateSize())

  useEffect(() => {
    setSize(calculateSize())
  }, [totalCount])

  return (
    <>
      { totalCount > pageSize &&
        <div className="pagination">
          <Button
            className="btn-noStyle" 
            disabled={page === 1}
            onClick={() => setPaginition(page - 1)}>
            <ArrowLeft/>
          </Button>
          {
            Array(size).fill(1).map((item, index) => index + 1).map((item) => {
              return (<Button 
              className={`pagination-button ${item === page ? 'active': ''}`} 
              key={item}
              onClick={() => setPaginition(item)}>
                {item}
              </Button>)
            })
          }
          <Button
            className="btn-noStyle"
            disabled={page === size}
            onClick={() => setPaginition(page + 1)}>
            <ArrowRight/>
          </Button>
        </div>
      }
    </>
  )
}