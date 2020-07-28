import React, {Component} from 'react'
import CustomButton from '../custom-button/custom-button.component.jsx'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component.jsx'


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
    handleSubmit = event => {
        event.preventDefault()

        this.setState({email: '', password: ''})
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
                    
                    <CustomButton type='submit' value='Submit Form'>Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;