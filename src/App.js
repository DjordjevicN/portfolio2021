
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage'
import Stack from './components/Stack'
import Projects from './components/Projects'
import ProjectZanatlije from './components/ProjectZanatlije'
import ProjectPlates from './components/ProjectPlates'
import ProjectMaia from './components/ProjectMaia'
import WeekendProjects from './components/WeekendProjects'
function App() {

  return (
    <BrowserRouter>
      <div className="App" >
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/stack' component={Stack} />
          <Route path='/projects' component={Projects} />
          <Route path='/projectZanatlije' component={ProjectZanatlije} />
          <Route path='/projectPlates' component={ProjectPlates} />
          <Route path='/projectMaia' component={ProjectMaia} />
          <Route path='/weekendProjects' component={WeekendProjects} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
