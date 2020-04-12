/**
 * 路由配置
 */
import React, { useEffect } from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import AllComponents from './asyncImport'
import routesConfig from './config'
import queryString from 'query-string'
// import { connectAlita } from 'redux-alita'
// import umbrella from 'umbrella-storage'

import ReactLayout from './../layout/Index'

function ZTORoute() {
  const getPermits = () => {}

  const requireAuth = (permit, component) => {
    const permits = getPermits()
    if (!permits || !permits.includes(permit)) return <Redirect to={'404'} />
    return component
  }
  const requireLogin = (component, permit) => {
    const permits = getPermits()
    // if (!checkLogin(permits)) {
    //   return <Redirect to={'/login'} />
    // }
    return permit ? requireAuth(permit, component) : component
  }

  const iterteMenu = r => {
    const route = r => {
      const Component = r.component && AllComponents[r.component]
      return (
        <Route
          key={r.route || r.key}
          exact
          path={r.route || r.key}
          render={props => {
            const reg = /\?\S*/g
            // 匹配?及其以后字符串
            const queryParams = window.location.hash.match(reg)
            // 去除?的参数
            const { params } = props.match
            Object.keys(params).forEach(key => {
              params[key] = params[key] && params[key].replace(reg, '')
            })
            props.match.params = {
              ...params
            }
            const merge = {
              ...props,
              query: queryParams ? queryString.parse(queryParams[0]) : {}
            }
            // 重新包装组件
            const wrappedComponent = <Component {...merge} />
            return r.login
              ? wrappedComponent
              : requireLogin(wrappedComponent, r.requireAuth)
          }}
        />
      )
    }

    const subRoute = r =>
      r.subs && r.subs.map(subR => (subR.subs ? subRoute(subR) : route(subR)))

    return r.component ? route(r) : subRoute(r)
  }

  const createRoute = key => {
    return routesConfig[key].map(iterteMenu)
  }

  useEffect(() => {
    // console.log('object')
  })

  return (
    <HashRouter>
      <Route
        path="/"
        render={() => (
          <ReactLayout>
            <Switch>
              {routesConfig.map(key => iterteMenu(key))}
              <Redirect to="/app/index" />
              <Route render={() => <Redirect to="/404" />} />
            </Switch>
          </ReactLayout>
        )}
      />
    </HashRouter>
  )
}

export default ZTORoute
