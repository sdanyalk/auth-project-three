import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import history from "./utils/history";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Feature from "./components/Feature/Feature";
import Loading from "./components/Loading/Loading";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/features" component={Feature} />
      </Switch>
    </Router>
  );
}

export default App;
