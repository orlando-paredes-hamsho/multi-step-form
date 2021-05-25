type Step = 1 | 2 | 3 | 4;

class App {
  public step: Step = 1;

  public setStep(step: Step): void {
    this.step = step;
  }
}

export interface AppProps {
  app?: App;
}

export default App;
export const app = new App();
