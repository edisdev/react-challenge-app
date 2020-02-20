import React from 'react'

import Button from './Button'
import PointUp from './icons/PointUp';
import PointDown from './icons/PointDown';
import Bin from './icons/Bin';
import Modal from './Modal';
import { useToasts } from 'react-toast-notifications'
export default ({ item, storage }) => {
  
  const { addToast } = useToasts()

  let DeleteAction = (attrs) => {
    return (<Button className="deleteAction text-uppercase btn-noStyle" {...attrs}>
      <Bin/>
    </Button>)
  }

  let DeleteContent = () => {
    return <div>
      <h5 className="font-lg m-bottom-25">Do you want to remove ?</h5>
      <h3 className="font-sm">{item.name}</h3>
    </div>
  }
  
  let confirm = {
    action: (close) => {
      storage.deleteItem(item)
      if (!storage.findItem(item)) {
        addToast(`Link removed successfully`, {
          appearance: 'success'
        })
        close()
      }
    }
  }

  let updateItemVote = (point) => {
    let newItem = {
      ...item,
      updatedAt: new Date(),
      vote: parseInt(item.vote + point)
    }
    storage.updateItem(newItem)
  }
  return (
    <div className="linkContent" id="linkContent">
      <Modal
        OpenTemplate={DeleteAction}
        title="Remove Link"
        Content={DeleteContent}
        confirmButton={confirm}
      />
      <div className="linkItem">
        <div className="point">
          <h2 id="ItemVoteInfo">{item.vote}</h2>
          <span>POINTS</span>
        </div>
        <div className="info">
          <div className="flag">
            <h2 className="name">{item.name}</h2>
            <a 
              className="link"
              href={item.link}
              rel="noopener noreferrer"
              target="_blank">{item.link}
            </a>
          </div>
          <div className="actions">
            <Button
              type="button"
              id="voteUpButton"
              className="btn-noStyle"
              onClick={() => updateItemVote(1)}>
              <PointUp/>
              <span>Vote Up</span>
            </Button>
            <Button
              type="button"
              id="voteDownButton"
              className="btn-noStyle"
              onClick={() => updateItemVote(-1)}>
              <PointDown/>
              <span>Vote Down</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}