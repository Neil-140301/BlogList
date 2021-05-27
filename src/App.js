import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import BlogItemDetails from './components/BlogItemDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="app-card">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/BlogList" component={Home} />
          <Route exact path="/BlogList/about" component={About} />
          <Route exact path="/BlogList/contact" component={Contact} />
          <Route path="/BlogList/blogs/:id" component={BlogItemDetails} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
