import React from 'react';
import { observer } from 'mobx-react-lite';
import { AppProps } from '../stores/application';
import PrimaryContact from './primary-contact';
import AboutYourCompany from './about-your-company';
import AboutYourEmployees from './about-your-employees';
import PolicyPayment from './policy-payment';

const CardSelector = observer(
  (props: AppProps): JSX.Element => {
    const { app } = props;
    switch (app.step) {
      case 1:
        return <PrimaryContact app={app} />;
      case 2:
        return <AboutYourCompany app={app} />;
      case 3:
        return <AboutYourEmployees app={app} />;
      case 4:
        return <PolicyPayment app={app} />;
      default:
        return null;
    }
  },
);

export default CardSelector;
