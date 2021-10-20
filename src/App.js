
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import HealthGuideLine from './components/HealthGuideLine/HealthGuideLine';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Services from './components/Shared/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Diagnostics from './components/Shared/Services/Diagnostics/Diagnostics';
import Ambulance from './components/Shared/Services/Ambulance/Ambulance';
import Doctors from './components/Shared/Services/Doctors/Doctors';
import DoctorDetails from './components/Shared/Services/Doctors/Doctor/DoctorDetails/DoctorDetails';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/gallery">
              <Gallery></Gallery>
            </Route>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route path="/healthGuideLine">
              <HealthGuideLine></HealthGuideLine>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/doctors/:id">
              <DoctorDetails></DoctorDetails>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path="/diagnostics">
              <Diagnostics></Diagnostics>
            </PrivateRoute>
            <Route path="/ambulance">
              <Ambulance></Ambulance>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
