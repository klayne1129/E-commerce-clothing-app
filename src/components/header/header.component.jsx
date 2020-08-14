import React from 'react'
import {Link} from 'react-router-dom'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assests/crown.svg'
import { auth } from '../../firebase/firebase.utils.js'
import {connect} from 'react-redux'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import CartIcon from '../cart-icon/cart-icon.component'
import { createStructuredSelector} from 'reselect'
import {selectCurrentUser } from '../../redux/user/user.selectors'
import {selectCartHidden} from '../../redux/cart/cart.selectors'


const Header = ({currentUser, hidden}) => (
<div className='header'>
    <Link to="/" className='logo-container'>
        <Logo className='logo'/>
    </Link>
    <div className='options'>
        <Link to='/shop' className='option'>
            SHOP
        </Link>
        <Link to='/shop' className='option'>
            CONTACT
        </Link>
        {currentUser ? (
            <div className='option' onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className='option' to='/signin'>
              SIGN IN
            </Link>
          )}
          <CartIcon/>
    </div>
          {hidden ? null : <CartDropdown/>}
</div>
)

const mapStateToProps = createStructuredSelector({
currentUser: selectCurrentUser,
hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);