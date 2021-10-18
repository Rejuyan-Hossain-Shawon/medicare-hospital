
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import HealthGuideLine from './components/HealthGuideLine/HealthGuideLine';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Services from './components/Shared/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/healthGuideLine">
            <HealthGuideLine></HealthGuideLine>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
