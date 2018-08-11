import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'

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
                   </div>
                </div>
                </BrowserRouter>
          </Provider>
      )
  }
}