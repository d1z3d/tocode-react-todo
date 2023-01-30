import React from 'react'
import classNames from 'classnames'
import Tag from './Tag'

const Tags = ({ items, onItemClick, isVertical, isInline, className, isDisabled, onTagReset, ...attrs }) => {
  const classView = classNames('ui-button-group', className)

  return (
    <div className='view-sidebar__content'>
      {
        items ? items.map((el, index) => <Tag key={index} className='ml-2 isBox' isDisabled={isDisabled}>{el}</Tag>) :
        <div className={classView}>
          <Tag className='' isDisabled={isDisabled} onItemClick={onItemClick}>vue</Tag>
          <Tag className='' isDisabled={isDisabled} onItemClick={onItemClick}>react</Tag>
          <Tag className='' isDisabled={isDisabled} onItemClick={onItemClick}>angular</Tag>
        </div>
      }
    </div>

  )
}


export default Tags
