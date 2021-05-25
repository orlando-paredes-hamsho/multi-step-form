import PrimaryContactForm from './primary-contact-form';

const defaultFields = {
  fullName: '',
  role: '',
  phoneNumber: '',
};

describe('Default values', () => {
  let form;
  beforeAll(() => {
    form = new PrimaryContactForm();
  });
  test('has a default validity of false', () => {
    expect(form.valid).toBeFalsy();
  });
  test('has a default empty fullName', () => {
    expect(form.role).toEqual('');
  });
  test('has a default empty role', () => {
    expect(form.role).toEqual('');
  });
  test('has a default empty phone number', () => {
    expect(form.role).toEqual('');
  });
  test('fullName is not valid', () => {
    expect(form.validFullName).toBeFalsy();
  });
  test('phoneNumber is not valid', () => {
    expect(form.validPhoneNumber).toBeFalsy();
  });
  test('has no fullName errors', () => {
    expect(form.fullNameError).toBeFalsy();
  });
  test('has no phoneNumber errors', () => {
    expect(form.phoneNumberError).toBeFalsy();
  });
  test('has the default fields', () => {
    expect(form.fields).toEqual(defaultFields);
  });
});

describe('setRole', () => {
  let form;
  const role = 'test';
  beforeAll(() => {
    form = new PrimaryContactForm();
    form.setRole(role);
  });
  test('is still invalid', () => {
    expect(form.valid).toBeFalsy();
  });
  test('has the passed role', () => {
    expect(form.role).toEqual(role);
  });
  test('has the role in fields', () => {
    expect(form.fields.role).toEqual(role);
  });
});

describe('setFullName', () => {
  describe('with a valid fullName', () => {
    let form;
    const fullName = 'Testington';
    beforeAll(() => {
      form = new PrimaryContactForm();
      form.setFullName(fullName);
    });
    test('is still invalid', () => {
      expect(form.valid).toBeFalsy();
    });
    test('has the passed fullName', () => {
      expect(form.fullName).toEqual(fullName);
    });
    test('has the fullName in fields', () => {
      expect(form.fields.fullName).toEqual(fullName);
    });
    test('fullName is valid', () => {
      expect(form.validFullName).toBeTruthy();
    });
    test('has no fullName errors', () => {
      expect(form.fullNameError).toBeFalsy();
    });
  });
  describe('with an invalid fullName', () => {
    let form;
    const fullName = 'test';
    beforeAll(() => {
      form = new PrimaryContactForm();
      form.setFullName(fullName);
    });
    test('is still invalid', () => {
      expect(form.valid).toBeFalsy();
    });
    test('has the passed fullName', () => {
      expect(form.fullName).toEqual(fullName);
    });
    test('has the fullName in fields', () => {
      expect(form.fields.fullName).toEqual(fullName);
    });
    test('fullName is not valid', () => {
      expect(form.validFullName).toBeFalsy();
    });
    test('has fullName errors', () => {
      expect(form.fullNameError).toBeTruthy();
    });
  });
});

describe('setPhoneNumber', () => {
  describe('with a valid phoneNumber', () => {
    let form;
    const phoneNumber = '202-555-0169';
    beforeAll(() => {
      form = new PrimaryContactForm();
      form.setPhoneNumber(phoneNumber);
    });
    test('is still invalid', () => {
      expect(form.valid).toBeFalsy();
    });
    test('has the passed phoneNumber', () => {
      expect(form.phoneNumber).toEqual(phoneNumber);
    });
    test('has the phoneNumber in fields', () => {
      expect(form.fields.phoneNumber).toEqual(phoneNumber);
    });
    test('phoneNumber is valid', () => {
      expect(form.validPhoneNumber).toBeTruthy();
    });
    test('has no phoneNumber errors', () => {
      expect(form.phoneNumberError).toBeFalsy();
    });
  });
  describe('with an invalid phoneNumber', () => {
    let form;
    const phoneNumber = 'test';
    beforeAll(() => {
      form = new PrimaryContactForm();
      form.setPhoneNumber(phoneNumber);
    });
    test('is still invalid', () => {
      expect(form.valid).toBeFalsy();
    });
    test('has the passed phoneNumber', () => {
      expect(form.phoneNumber).toEqual(phoneNumber);
    });
    test('has the phoneNumber in fields', () => {
      expect(form.fields.phoneNumber).toEqual(phoneNumber);
    });
    test('phoneNumber is not valid', () => {
      expect(form.validPhoneNumber).toBeFalsy();
    });
    test('has phoneNumber errors', () => {
      expect(form.phoneNumberError).toBeTruthy();
    });
  });
});

describe('valid', () => {
  let form;
  const phoneNumber = '202-555-0169';
  const fullName = 'Testington';
  beforeAll(() => {
    form = new PrimaryContactForm();
    form.setPhoneNumber(phoneNumber);
    form.setFullName(fullName);
  });
  test('is valid', () => {
    expect(form.valid).toBeTruthy();
  });
  test('phoneNumber is valid', () => {
    expect(form.validPhoneNumber).toBeTruthy();
  });
  test('has no phoneNumber errors', () => {
    expect(form.phoneNumberError).toBeFalsy();
  });
  test('fullName is valid', () => {
    expect(form.validFullName).toBeTruthy();
  });
  test('has no fullName errors', () => {
    expect(form.fullNameError).toBeFalsy();
  });
});
