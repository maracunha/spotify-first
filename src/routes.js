import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import First from './pages/First';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/first" component={First} />
    </BrowserRouter>
  );
}

export default Routes;
