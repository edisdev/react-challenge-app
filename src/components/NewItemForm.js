import React, { useState, useEffect } from 'react'
import Button from '../components/Button'

import { useToasts } from 'react-toast-notifications'
import Storage from '../utils/storage';

export default () => {
  const { addToast } = useToasts()

  let [name, setName] = useState('')
  let [link, setLink] = useState('')

  let [list, setList] = useState([]);
  let storage = new Storage({ list, setList })

  useEffect(() => {
    storage.init()
  }, [])

  let addNewItem = () => {
    let newItem = {
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '_' + Math.random().toString(36).substr(2, 9),
      name,
      link,
      vote: 0
    }

    storage.addItem(newItem)

    if (storage.findItem(newItem)) {
      addToast(`${name} link added successfully`, {
        appearance: 'success'
      })
      setName('')
      setLink('')
    }
  }

  return (
    <form className="Form" onClick={(e) => e.preventDefault()}>
      <div className="FormGroup vertical">
        <label className="label">Link Name</label>
        <input
          value={name}
          className="input" 
          id="linkNameInput"
          placeholder="e.g Github Adress" 
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="FormGroup vertical">
        <label className="label">Link Url</label>
        <input 
          className="input"
          value={link}
          id="linkUrlInput"
          placeholder="e.g https://github.com"
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <div className="FormGroup vertical">
        <Button 
          disabled={!name || !link}
          id="newLinkFormButton"
          className="flex-align-self-end text-uppercase"
          onClick={addNewItem}>
          Add
        </Button>
      </div>
    </form>
  )
}