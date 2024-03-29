import { IUser } from '../../shared/interfaces/user.interface';

export interface AuthModel {
  token: string | null;
  user: IUser | null;
  loading: boolean;
  error: string;
}
