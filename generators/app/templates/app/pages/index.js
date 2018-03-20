import React from 'react';
import styled from 'styled-components';
import { Layout } from 'components';

import constants from 'constants';

const { colors } = constants.STYLE_VARS;

const Main = styled.main`
  width: 100%;
  padding: 16px;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.article`
  width: 100%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ListItem = styled.li`
  font-size: 18px;
  line-height: 24px;

  a {
    text-decoration: none;
    color: ${colors.black};

    &:hover {
      color: ${colors.blue};
    }
  }
`;

export default () => (
  <Layout>
    <Main>
      <Header>
        <img src="static/images/next-logo.png" alt="Next Logo" />
        <h1>Hello Next CD app.</h1>
      </Header>

      <Container>
        <ul>
          <ListItem><a href="https://github.com/zeit/next.js" target="_black" title="Cómo usar NextJS">Cómo usar NextJS</a></ListItem>
          <ListItem><a href="https://www.styled-components.com/" target="_black" title="Cómo usar Styled-Components">Cómo usar Styled-Components</a></ListItem>
          <ListItem><a href="http://expressjs.com/" target="_black" title="Cómo usar Express">Cómo usar Express</a></ListItem>
        </ul>
      </Container>

    </Main>
  </Layout>
);
