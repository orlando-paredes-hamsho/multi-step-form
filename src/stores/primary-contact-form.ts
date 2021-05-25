import { makeObservable, computed, observable, action } from 'mobx';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { FormStore } from './form';

class PrimaryContactForm implements FormStore {
  public fullName = '';

  public role = '';

  public phoneNumber = '';

  public setFullName(fullName: string): void {
    this.fullName = fullName;
  }

  public setRole(role: string): void {
    this.role = role;
  }

  public setPhoneNumber(phoneNumber: string): void {
    this.phoneNumber = phoneNumber;
  }

  public get validPhoneNumber(): boolean {
    return isValidPhoneNumber(this.phoneNumber, 'US');
  }

  public get validFullName(): boolean {
    return this.fullName.length > 8;
  }

  public get fullNameError(): boolean {
    return this.fullName.length > 0 && !this.validFullName;
  }

  public get phoneNumberError(): boolean {
    return this.phoneNumber.length > 0 && !this.validPhoneNumber;
  }

  public get valid(): boolean {
    return this.validFullName && this.validPhoneNumber;
  }

  public get fields(): Record<string, unknown> {
    return {
      fullName: this.fullName,
      role: this.role,
      phoneNumber: this.phoneNumber,
    };
  }

  constructor() {
    makeObservable(this, {
      fullName: observable,
      phoneNumber: observable,
      role: observable,
      setFullName: action.bound,
      setPhoneNumber: action.bound,
      setRole: action.bound,
      validFullName: computed,
      validPhoneNumber: computed,
      fullNameError: computed,
      phoneNumberError: computed,
      valid: computed,
      fields: computed,
    });
  }
}

export default PrimaryContactForm;
