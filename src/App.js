import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Login from "./Components/AuthModal/Login";
import Signup from "./Components/AuthModal/Signup";
import Home from "./Components/Home/Home";
import Home2 from "./Components/Home/Home2";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";

function App() {
  const [loginModal, setLoginModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  return (
    <Router>
      <AppContainer>
        {loginModal && (
          <Login
            setLoginModal={setLoginModal}
            setSignUpModal={setSignUpModal}
          />
        )}
        {signUpModal && (
          <Signup
            setSignUpModal={setSignUpModal}
            setLoginModal={setLoginModal}
          />
        )}
        <Navbar setLoginModal={setLoginModal} setSignUpModal={setSignUpModal} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home2 />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export default App;
