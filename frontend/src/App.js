import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DocumentEditor from './components/DocumentEditor';
import Chat from './components/Chat';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={DocumentEditor} />
        <Route path='/chat' component={Chat} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;