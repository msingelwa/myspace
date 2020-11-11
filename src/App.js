import './App.css';
import { Navbar } from './components/layout/Navbar';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Tenants from './components/project/Tenants';
import Complaint from './components/project/Complaint';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/landingpage" component={LandingPage}></Route>
        <Route exact path="/" component={SignIn}></Route>
        <Route exact path="/SignUp" component={SignUp}></Route>
        <Route exact path="/tenants" component={Tenants}></Route>
        <Route exact path="/complaint" component={Complaint}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
