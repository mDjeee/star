import { AuthModel } from './auth.model';

export const authState: AuthModel = {
  user: null,
  loading: false,
  error: '',
  token: null
}
