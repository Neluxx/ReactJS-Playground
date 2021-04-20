import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Timer from "./components/Timer";
import Pomodoro from "./components/Pomodoro";
import Counter from "./components/Counter";
import News from "./components/News";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navigation />
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/update-profile">
            <UpdateProfile />
          </PrivateRoute>
          <Route path="/signup">
            <Container
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "90vh" }}
            >
              <div className="w-100" style={{ maxWidth: "400px" }}>
                <Signup />
              </div>
            </Container>
          </Route>
          <Route path="/login">
            <Container
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "90vh" }}
            >
              <div className="w-100" style={{ maxWidth: "400px" }}>
                <Login />
              </div>
            </Container>
          </Route>
          <Route path="/forgot-password">
            <Container
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "90vh" }}
            >
              <div className="w-100" style={{ maxWidth: "400px" }}>
                <ForgotPassword />
              </div>
            </Container>
          </Route>
          <Route path="/timer">
            <Timer />
          </Route>
          <Route path="/pomodoro">
            <Pomodoro />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
