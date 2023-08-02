import React from 'react'

function Navbar() {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"><img src="./images/2.png" alt="" className='h-12 w-12' /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
              <li><a>About us</a></li>
                  <li><a>Pricing</a></li>
                  <li tabIndex={0}>
        <details>
          <summary>Services</summary>
          <ul className="p-3">
            <li><a>Website Development</a></li>
            <li><a>Social Media Marketing</a></li>
          </ul>
        </details>
      </li>
                  <li><a>Help</a></li>
  
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Join us <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
</a>
  </div>
</div>
  )
}

export default Navbar