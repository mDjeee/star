import { AlertType } from '../enums/alert.enum';

export interface AlertInterface {
  type: AlertType;
  text: string;
}
