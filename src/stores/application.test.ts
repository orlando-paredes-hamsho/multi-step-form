import App, { Step } from './application';

test('has a default step of 1', () => {
  const app = new App();
  expect(app.step).toBe(1);
});

describe('setStep', () => {
  [1, 2, 3, 4].forEach((value) => {
    test(`sets value to ${JSON.stringify(value)}`, () => {
      const app = new App();
      app.setStep(value as Step);
      expect(app.step).toBe(value);
    });
  });
});
