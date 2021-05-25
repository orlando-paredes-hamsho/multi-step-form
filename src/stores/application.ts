import { makeObservable, observable, action } from 'mobx';
import PrimaryContactForm from './primary-contact-form';

export type Step = 1 | 2 | 3 | 4;

class App {
  public step: Step = 1;

  public primaryContactForm: PrimaryContactForm = new PrimaryContactForm();

  public get fields(): Record<string, unknown> {
    return {
      ...this.primaryContactForm.fields,
    };
  }

  setStep(step: Step): void {
    this.step = step;
  }

  constructor() {
    makeObservable(this, {
      step: observable,
      primaryContactForm: observable,
      setStep: action.bound,
    });
  }
}

export interface AppProps {
  app?: App;
}

export default App;
