import React from 'react'
import classNames from 'classnames'
import Tag from './Tag'

const Tags = ({ items, onItemClick, isVertical, isInline, className, ...attrs }) => {
  const classView = classNames('ui-button-group', className)

  return (
    <div className='view-sidebar__content'>
        <div className={classView}>
          <Tag className='' onItemClick={onItemClick}>vue</Tag>
          <Tag className='' onItemClick={onItemClick}>react</Tag>
          <Tag className='' onItemClick={onItemClick}>angular</Tag>
        </div>
    </div>
  )
}

export default Tags
