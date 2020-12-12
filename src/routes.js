import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import First from './pages/First';
import InvalidTokenPage from './pages/401'

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/first" component={First} />
      <Route path="/invalidToken" component={InvalidTokenPage} />
    </BrowserRouter>
  );
}

export default Routes;
