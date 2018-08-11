import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Write from './pages/write'

export default class App extends Component {
  render() {
      return (
          <Provider store={store}>
                <BrowserRouter>
                <div>
                   <Header />
                   <div>
                      <Route path='/' exact component={Home} />
                      <Route path='/detail/:id' exact component={Detail} />
                      <Route path='/login' exact component={Login} />
                      <Route path='/write' exact component={Write} />
                   </div>
                </div>
                </BrowserRouter>
          </Provider>
      )
  }
}