import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='header'>
          <Link to={'/'}>
              <img className='header__logo' src="https://images-eu.ssl-images-amazon.com/images/G/37/gno/images/general/backup-logo_blue._CB481607158_.png" />
          </Link>
        <div className='header__search'>
            <input className='header__searchInput' type="text" />
            {/* Logo */}
            <SearchIcon className='header__searchIcon' />
        </div>

        <div className='header__nav'>
              <Link className='login__link' to={'/login'}>
                  <div className='header__option'>
                      <span className='header__optionLineOne'>
                          Hello Guest
                      </span>
                      <span className='header__optionLineTwo'>
                          Sign In
                      </span>
                  </div>
              </Link>

           <div className='header__option'>
                <span className='header__optionLineOne'>
                    Returns
                </span>
                <span className='header__optionLineTwo'>
                    & Orders
                </span>
           </div>

           <div className='header__option'>
                <span className='header__optionLineOne'>
                    Your
                </span>
                <span className='header__optionLineTwo'>
                    Prime
                </span>
           </div>

              <Link to={'/checkout'}>
                  <div className='header__optionBasket'>
                      <ShoppingBasketIcon />
                      <span className='header__optionLineTwo header__basketCount'>
                          {basket?.length}
                      </span>
                  </div>
              </Link>
        </div>
    </div>
  )
}

export default Header