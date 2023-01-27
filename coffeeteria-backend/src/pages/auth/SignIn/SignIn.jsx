import React, { useState } from 'react'
// pkgs: react-helmet
import Helmet from 'react-helmet'
// pkgs: react-router
import { useHistory } from 'react-router-dom'
// pkgs: react-toastify
import { toast } from 'react-toastify'
// pkgs: react-redux
import { useSelector, useDispatch } from 'react-redux'
// modules: redux-action
import { loginUser, getProfile } from '../../../redux/actions/user'
// components: base
import { InputAuth } from '../../../components/base/InputAuth/InputAuth'
// styles: module
import style from './SignIn.module.css'

export const SignIn = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    await toast.promise(dispatch(loginUser(form)), {
      pending: 'Authenticating',
      success: 'Login success',
      error: 'Login failed'
    })
    localStorage.setItem('token', user.token)
    await toast.promise(
      dispatch(getProfile(user.id)), {
      pending: 'Loading profile',
      success: 'Profile loaded successfully',
      error: 'Failed to Loaded'
    })
    history.push('/main/product')
  }

  return (
    <>
      <Helmet>
        <title>Login - CoffeeTeria</title>
        <meta name='description' content='This is Login Page' />
      </Helmet>
      <div className={`container ${style.container}`}>
        <form className={`${style.form}`} onSubmit={handleLogin}>
          <span>Login</span>
          <div>
            <InputAuth
              changeEvent={(e) => handleChange(e)}
              placeholder='Enter your email address'
              label='Email Address :'
              name='email'
              type='email'
              id='email'
              required='required'
            />
            <InputAuth
              changeEvent={(e) => handleChange(e)}
              placeholder='Enter your password'
              label='Password :'
              name='password'
              type='password'
              id='password'
              required='required'
            />
            <button
              className={`btn ${style.btn_gold} ${(form.email === '' || form.password === '') && 'disabled'
                }`}
              type='submit'>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
