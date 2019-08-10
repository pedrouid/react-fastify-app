import * as React from "react";
import styled from "styled-components";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Notification from "./components/Notification";

const SLayout = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const SContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

class App extends React.Component<any, any> {
  public render() {
    return (
      <SLayout>
        <SContent>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </SContent>
        <Notification />
      </SLayout>
    );
  }
}

export default withRouter(connect(
  null,
  null
)(App) as any);
