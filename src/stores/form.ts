export interface FormStore {
  readonly valid: boolean;
  readonly fields: Record<string, unknown>;
  [propName: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface FormProps {
  form?: FormStore;
}
