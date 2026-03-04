import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';


function Header({ isLoggedIn = false, userName = '' }) {

  const userProfile = useSelector((state) => state.user);

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isLoggedIn ? (
          <>
            <Link className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              {userProfile?.firstName || userName}
            </Link>
            <Link className="main-nav-item" to="/sign-in" onClick={() => localStorage.removeItem('token')}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
