import React from 'react';
import PrimaryContact from '../components/primary-contact';
// import AboutYourCompany from '../components/about-your-company';
// import AboutYourEmployees from '../components/about-your-employees';
// import PolicyPayment from '../components/policy-payment';
import Container from '../styled/container';
import Background from '../styled/background';

export default function IndexPage(): JSX.Element {
  return (
    <Background>
      <Container>
        <PrimaryContact />
      </Container>
    </Background>
  );
}
