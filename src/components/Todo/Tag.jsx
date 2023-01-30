import React from 'react'
import classNames from 'classnames'

const Tag = ({className, children, onItemClick, isDisabled, items, isBox, ...attrs}) => {
  const [isActive, setActive] = React.useState(false)
  const classes = classNames('ui-tag', className, {isDisabled, isActive, isBox})


  return (
    !isDisabled ?
    <>
      <span className={classes} onClick={() => {
        onItemClick(children)
        setActive(!isActive)
        }}>{children}
      </span>
    </> : <><span className={classes}>{children}</span></>
  )
}

export default Tag