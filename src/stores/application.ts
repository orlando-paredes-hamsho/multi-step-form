import { makeObservable, observable, action } from 'mobx';

type Step = 1 | 2 | 3 | 4;

class App {
  step: Step = 1;

  setStep(step): void {
    this.step = step;
  }

  constructor() {
    makeObservable(this, {
      step: observable,
      setStep: action.bound,
    });
  }
}

export default App;
export const app = new App();
