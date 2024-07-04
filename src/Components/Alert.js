import React from 'react'

const Alert = (props) => {
  const Capitalize = (word)=>{
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  return (
    <div className='h-1'>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role='alert'>
        <strong>{Capitalize(props.alert.type)}</strong> : {props.alert.message}
      <button type='button' className='btn-close' data-bs-dismiss="alert" aria-label='Close'></button>
    </div>}
    </div>
  )
}

export default Alert
