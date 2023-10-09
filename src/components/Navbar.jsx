import React from 'react';
import css from './css/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={css.Navbar}>
    <h1>My Gallery</h1>
    <div>
    <span>
        <button>Hello, Guest</button> {/* Guest will be changed via state like {this.state.name} */}
        <button>Login</button>
    </span>
    </div>    
    </div>
  )
}

export default Navbar