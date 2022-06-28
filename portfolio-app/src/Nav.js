import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <h2 className="navbar">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </h2>
                    <h2 className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="about">About</NavLink>
                    </h2>
                </ul>
            </div>
        </div>
    </nav>
  )
};

export default Nav;