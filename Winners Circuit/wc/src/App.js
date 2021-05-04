import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import MainPage from './pages/homepage';
import NotFoundPage from './pages/404';

function App() {
  return (
    <Router>
    <Switch>
        <Route exact path = '/' component = {MainPage}/>
        <Route exact path = '/404' component = {NotFoundPage}/>
        <Redirect to = '/404'/>
    </Switch>
    </Router>
  );
}
export default App;
