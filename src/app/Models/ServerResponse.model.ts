import { User } from './user.model';

export interface ServerResponse {
  successful: boolean;
  result: string | User;
  user?: {
    email: string;
    name: string;
  };
}
