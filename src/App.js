import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';
import Events from './components/Events/Events';
import Register from './components/HomePage/Register/Register';
import Sponsors from './components/Sponsors/Sponsors';
import Gallery from './components/Gallery/Gallery';
import EventsCategory from './components/EventsCategory/EventsCategory';
import TeamConflu2 from './components/TeamConfluence/TeamConflu2';
import Developer2 from './components/Developers/Developer2';

import AddEvent from './components/Admin/Admin';
import HomePage from './components/HomePage/HomePage';

class Page404 extends React.Component {

  render() {

    return (

      <div className='center'>

        <Link to='/'>Go Home</Link>

      </div>

    );
  }
}



class App extends Component {
  componentDidMount() {
    setTimeout(function () {
      let x = document.getElementById('loader');
      if (x) {
        x.remove();
      }
      document.getElementById('root').classList.remove('noshow');
    }, 1000);
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path='/events' component={Events} />
              <Route exact path='/gallery' component={Gallery} />
              <Route exact path='/sponsors' component={Sponsors} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/' component={HomePage} />

              <Route exact path='/team' component={TeamConflu2} />

              <Route exact path='/admin' component={AddEvent} />
              <Route exact path='/developers' component={Developer2} />
              <Route exact path='/events/:category' component={EventsCategory} />


              <Route path='/*' component={Page404} />

            </Switch>

          </React.Suspense>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
