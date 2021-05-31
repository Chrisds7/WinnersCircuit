import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import MainPage from "./pages/Homepage/homepage";
import NotFoundPage from "./pages/404/404";
import FeedComponent from "./pages/FeedComponent/FeedComponent";
import RegisterComponent from "./pages/RegisterComponent/RegisterComponent";

function App() {
  return (
    <Router>
    <Switch>
        <Route exact path = '/' component = {MainPage} />
        <Route exact path = '/404' component = {NotFoundPage} />
        <Route exact path = '/feed' component = {FeedComponent} />
        <Route exact path = '/register' component = {RegisterComponent} />
        <Redirect to = '/404'/>
    </Switch>
    </Router>
  );
}
export default App;
