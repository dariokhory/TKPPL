import React from 'react'
// pkgs: react-router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// pkgs: react-toastify
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
// components: base-page
import { Auth } from './pages/auth/Auth'
import { Main } from './pages/main/Main'
// styles: global
import './App.css'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Auth} path='/auth' />
        <Route component={Main} path='/main' />
        <Redirect from='/' to='/main' />
      </Switch>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        theme="dark"
      />
    </BrowserRouter>
  )
}
