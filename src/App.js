
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage'
import Shine from './components/Shine'
import Stack from './components/Stack'
import Projects from './components/Projects'
import ProjectZanatlije from './components/ProjectZanatlije'
import ProjectPlates from './components/ProjectPlates'
import ProjectMaia from './components/ProjectMaia'
function App() {

  return (
    <BrowserRouter>
      <div className="App" >
        <Shine />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/stack' component={Stack} />
          <Route path='/projects' component={Projects} />
          <Route path='/projectZanatlije' component={ProjectZanatlije} />
          <Route path='/projectPlates' component={ProjectPlates} />
          <Route path='/projectMaia' component={ProjectMaia} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
