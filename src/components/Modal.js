import React, { useState } from 'react'

export default ({ OpenTemplate, openAttrs , title = '', Content = '', confirmButton = {}, cancelButton  = {} }) => {

  let [isShow, setShow]  = useState(false)
  
  const toggleModal = () => {
    setShow(!isShow)
  }
  
  const close = () => setShow(false)

  let confirm = {
    text: confirmButton.text || 'OK',
    action: () => {
      if(confirmButton.action && typeof confirmButton.action === 'function') confirmButton.action(close)
    }
  }

  let cancel = {
    text: cancelButton.text || 'CANCEL',
    action: () => {
      if (cancelButton.action && typeof cancelButton.action === 'function') cancelButton.action()
      toggleModal()
    }
  }

  let ModalContent = Content
  if (typeof Content === 'function') ModalContent = <Content/>

  let OpenComponent = () =>  <OpenTemplate onClick={toggleModal}/>


  return (
    <>
     <OpenComponent/>
     {
      isShow &&
      <div className="Modal">
        <div className="Overlay"></div>
        <div className="Self">
          <div className="ModalHeader">
            <div className="title">{title}</div>
            <button className="btn btn-noStyle" onClick={() => toggleModal()}>x</button>
          </div>
          
          <div className="ModalContent">{ModalContent}</div>
  
          <div className="ModalFooter">
            <div className="actions">
              <button type="button"
              className="btn btn-dark"
              onClick={confirm.action}
              >{confirm.text}
              </button>

              <button type="button"
              className="btn btn-dark"
              onClick={cancel.action}
              >{cancel.text}
              </button>
            </div>
          
          </div>
        </div>
      </div>
     }
    </>
  )
}
