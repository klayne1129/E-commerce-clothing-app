import React from 'react'
import './custom-button.styles.scss'


//will render class of googleSignIn if the property is true, if not it will be
//an empty string and custom button is also always rendered
const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button 
        className={`${isGoogleSignIn ? 'google-sign-in': '' } custom-button`} 
        {...otherProps}
    > 
        {children}
    </button>
)

export default CustomButton;