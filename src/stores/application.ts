import { makeObservable, observable, action } from 'mobx';

export type Step = 1 | 2 | 3 | 4;

class App {
  public step: Step = 1;

  setStep(step: Step): void {
    this.step = step;
  }

  constructor() {
    makeObservable(this, {
      step: observable,
      setStep: action.bound,
    });
  }
}

export interface AppProps {
  app?: App;
}

export default App;
export const app = new App();
