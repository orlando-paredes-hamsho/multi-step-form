import React from 'react';
import { observer } from 'mobx-react-lite';
import CardSelector from '../components/card-selector';
import App from '../stores/application';
import Container from '../styled/container';
import Background from '../styled/background';

const app = new App();

const IndexPage = observer(
  (): JSX.Element => (
    <Background>
      <Container>
        <CardSelector app={app} />
      </Container>
    </Background>
  ),
);

export default IndexPage;
