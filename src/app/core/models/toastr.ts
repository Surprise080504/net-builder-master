export enum ToastrType {
  Success = 'SUCCESS',
  Info = 'INFO',
  Warning = 'WARNING',
  Danger = 'DANGER'
}

export interface Toastr {
  type: ToastrType;
  title?: string;
  text: string;
}
