import { Switch, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import AboutPage from './components/about/AboutPage';
import WorkPage from './components/work/WorkPage';
import Vocal from "../src/components/work/Vocal";
import Band from './components/work/Band';
import Live from './components/work/Live';
import Podcasts from './components/work/Podcasts';
import Contacts from './components/contacts/Contacts';


function App() {

  return (
    <>
      <Nav/>
      <Switch>
        <Route exact path='/'>
          <AboutPage/>
        </Route>
        <Route exact path='/work'>
          <WorkPage/>
        </Route>
        <Route path='/work/vocal'>
          <Vocal/>     
        </Route> 
        <Route path='/work/band'>
          <Band/>     
        </Route> 
        <Route path='/work/live'>
          <Live/>     
        </Route> 
        <Route path='/work/podcasts'>
          <Podcasts/>     
        </Route> 
        <Route path='/contacts'>
          <Contacts/>     
        </Route> 
      </Switch>
    </>
  );
}

export default App;
