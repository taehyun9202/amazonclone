import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link  } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from '../firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img className="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div className="searchbar">
                <input className="searchIn" type="text" />
                <SearchIcon className="searchIcon" />
            </div>
            <div className="headerNav">
                <Link to={!user && "/login"}>
                    <div className="headerNavOption" onClick={handleAuthentication}>
                        <span className="optionOne">{user? 'Sign out' :'Sign in'}</span>
                        <span className="optionTwo">Account</span>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className="headerNavOption">
                        <span className="optionOne">Returns</span>
                        <span className="optionTwo">& Orders</span>
                    </div>
                </Link>
                <div className="headerNavOption">
                    <span className="optionOne">Try</span>
                    <span className="optionTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="headerNavOption headerNavCart">
                        <ShoppingCartIcon className="cartIcon" fontSize="large" />
                        <span className="numberofItem">{basket?.length}</span>
                    </div>
                </Link>
            </div>


        </div>
    )
}

export default Header
