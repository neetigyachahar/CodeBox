import { FC } from 'react'

import { Switch, Redirect, Route } from 'react-router-dom'

import ViewCodebox from './routes/ViewCodebox'
import NewCodebox from './routes/NewCodebox';

const App: FC = () => {
  return (
    <Switch>
      <Route exact path="/codebox" component={NewCodebox} />
      <Route exact path="/codebox/:id" component={ViewCodebox} />
      <Redirect exact from="/" to="/codebox" />
      <Route exact path="*">component={<div>404</div>}</Route>
    </Switch>
  );
}

export default App;