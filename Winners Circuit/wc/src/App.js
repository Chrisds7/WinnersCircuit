import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import MainPage from './pages/Homepage/homepage';
import NotFoundPage from './pages/404/404';
import LogInPage from "./pages/LogInPage/loginpage";
import SignUpPage from "./pages/SignUpPage/signuppage";

function App() {
  return (
    <Router>
    <Switch>
        <Route exact path = '/' component = {MainPage}/>
        <Route exact path = '/404' component = {NotFoundPage}/>
        <Route exact path = '/login' component = {LogInPage}/>
        <Route exact path = '/signup' component = {SignUpPage} />
        <Redirect to = '/404'/>
    </Switch>
    </Router>
  );
}
export default App;
