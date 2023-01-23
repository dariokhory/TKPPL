import React from 'react'
// pkgs: react-router
import { Route, Redirect } from 'react-router-dom'

export const RoutePrivate = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token')

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/auth/sign-in',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}
