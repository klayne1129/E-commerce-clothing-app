import React, {Component} from 'react'
import CustomButton from '../custom-button/custom-button.component.jsx'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component.jsx'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js'



class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            email: ''

        }
    }
    handleChange = event => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }
    handleSubmit = async event => {
        event.preventDefault()
        const {email, password} = this.state
        try {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email: '', password: ''})
        } catch (error) {
            console.log(error)
        }
       
    }
    render () {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    handleChange={this.handleChange}
                    name='email' 
                    type='email' 
                    value={this.state.email}
                    label='email' 
                    required/>

                    <FormInput  
                    handleChange={this.handleChange} 
                    name='password' 
                    type = 'password'
                    value={this.state.password} 
                    label='password'
                    required/>
                    <div className='buttons'>
                    <CustomButton type='submit' value='Submit Form'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign In with Google{' '}</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;