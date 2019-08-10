import * as React from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import logo from "../assets/logo.svg";
import PageWrapper from "../components/PageWrapper";
import Loader from "src/components/Loader";
import Card from "src/components/Card";
import { demoGetName } from "../redux/_demo";

const logoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SHomeLogo = styled.img`
  animation: ${logoSpin} infinite 20s linear;
  margin-top: 10px;
  height: 100px;
`;

const SHomeTitle = styled.h3`
  margin: 20px auto;
`;

class Home extends React.Component<any, any> {
  public componentDidMount() {
    this.props.demoGetName();
  }
  public render() {
    const { loading, name } = this.props;
    return (
      <PageWrapper topLayer loading={loading}>
        <Card shadow>
          {!loading ? (
            <React.Fragment>
              <SHomeLogo src={logo} alt="logo" />
              <SHomeTitle>{`${name}`}</SHomeTitle>
            </React.Fragment>
          ) : (
            <Loader />
          )}
        </Card>
      </PageWrapper>
    );
  }
}

const reduxProps = (store: any) => ({
  name: store.demo.name
});

export default connect(
  reduxProps,
  { demoGetName }
)(Home);
