import React from 'react'

const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar navbar-expand-sm bg-${props.mode} navbar-${props.mode}`}>
  <a className="navbar-brand" href="#">{props.logo}</a>
  
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="#">{props.link}</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">{props.about}</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">{props.contact}</a>
    </li>
  </ul>
  <div className='flex'>
    <div className='bg-blue-950 bg-primary rounded mx-2 h-6 w-6 cursor-pointer' onClick={()=>props.EnableMode('primary')}></div>
    <div className='bg-yellow-500 bg-warning rounded mx-2 h-6 w-6 cursor-pointer' onClick={()=>props.EnableMode('warning')}></div>
    <div className='bg-green-950 bg-success rounded mx-2 h-6 w-6 cursor-pointer' onClick={()=>props.EnableMode('success')}></div>
    <div className='bg-red-700 bg-danger rounded mx-2 h-6 w-6 cursor-pointer' onClick={()=>props.EnableMode('danger')}></div>
  </div>
  <div className={`form-check form-switch text-${props.mode=="dark"? "light" : "dark"}`}>
    <input type="checkbox" className="form-check-input" onClick={()=>props.EnableMode(null)} id="switch1"/>
    <label className="form-check-label" htmlFor="switch1">Enable Darkmode</label>
  </div>
</nav>
    </>
  )
}

export default Navbar
