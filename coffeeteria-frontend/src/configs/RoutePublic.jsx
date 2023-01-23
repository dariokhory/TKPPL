import React from 'react'
// pkgs: react-router
import { Route, Redirect } from 'react-router-dom'

export const RoutePublic = ({ component: Component, restricted, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token')

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && restricted ? (
          <Redirect
            to={{
              pathname: '/main/product',
              state: { from: props.location }
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}
