import React from 'react'
import classNames from 'classnames'

const Tag = ({className, children, onItemClick, ...attrs}) => {
  const classes = classNames('ui-tag', className)
  return (
    <>
      <span className={classes} onClick={() => {onItemClick(children)}}>{children}</span>
    </>
  )
}

export default Tag