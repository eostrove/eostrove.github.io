import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <header className='navbar'>
        <div className='navbar_title navbar_item'>Emily Ostrove</div>
            <h2 className="navbar_item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </h2>
            <h2 className="navbar_item">
                <NavLink className="nav-link" aria-current="page" to="about">About</NavLink>
            </h2>
    </header>
  )
};

export default Nav;