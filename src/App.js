import React, { Suspense, lazy } from 'react'
import {
  Route,
  Switch,
  Router,
  Redirect
} from 'react-router-dom'
import history from './helpers/history'
import './App.css';
import { UserContextProvider } from './context/UserContextProvider'
import Loader from './components/loader'

const Home = lazy(() => import('./pages/home'))
const Repos = lazy(() => import('./pages/repos'))
const Readme = lazy(() => import('./pages/readme'))

const App = () => {
  return (
    <UserContextProvider>
      <Router history={history}>
        <Suspense fallback={<Loader/>}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:username' component={Repos} />
            <Route exact path='/:username/:reponame' component={Readme} />
            <Redirect to='/' />
          </Switch>
        </Suspense>
      </Router>
    </UserContextProvider>
  );
}

export default App;
