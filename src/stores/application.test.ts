import App, { Step } from './application';
import PrimaryContactForm from './primary-contact-form';

test('has a default step of 1', () => {
  const app = new App();
  expect(app.step).toBe(1);
});

test('has fields that equal those of a primary contact form', () => {
  const app = new App();
  const form = new PrimaryContactForm();
  expect(app.fields).toEqual(form.fields);
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
