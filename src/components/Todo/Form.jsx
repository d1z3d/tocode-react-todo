import React from 'react'
import { v4 as fakeId } from 'uuid'

import Tags from './Tags'

const Form = ({ onSubmit }) => {
  const [title, setTitle] = React.useState('')
  const [tags, setTags] = React.useState([])

  const handleSubmit = () => {
    event.preventDefault()
    const item = {
      id: fakeId(),
      title: title,
      isChecked: false,
      tags: tags
    }
    onSubmit(item)
    // reset
    setTitle('')
    setTags([])
  }

  const handleTag = (tag) => {
    let newTags = [...tags]
    if(!newTags.includes(tag))
    {
      newTags = [...tags, tag]
    }

    setTags(newTags)
  }

  return (
    <form className='mb-8' onSubmit={handleSubmit}>
      <div className='flex items-end'>
        <div className='ui-input' style={{ width: '100%' }}>
          <label htmlFor='input-DqS1'>Enter todo</label>
          <input
            id='input-DqS1'
            required
            type='text'
            value={title}
            placeholder='Enter todo here'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className='ui-button isPrimary' type='submit'>
          Submit
        </button>
      </div>

      {/* подсказка: тег может иметь свойство `active`, где будет сменяться opacity */}
      <Tags classNames='isInline' onItemClick={handleTag}/>
    </form>
  )
}

export default Form
