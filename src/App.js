import Header from './components/Header';
import Formulario from './components/Formulario';
import Principal from './components/Principal';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Principal}/>
            <Route exact path="/formulario" component={Formulario}/>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
