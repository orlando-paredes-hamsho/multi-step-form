import React from 'react';
// import PrimaryContact from './primary-contact';
// import AboutYourCompany from './about-your-company';
// import AboutYourEmployees from './about-your-employees';
import PolicyPayment from './policy-payment';
import Container from './container';
import Background from './background';

export default function IndexPage(): JSX.Element {
  return (
    <Background>
      <Container>
        <PolicyPayment />
      </Container>
    </Background>
  );
}
