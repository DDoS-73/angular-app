import { User } from '../user.model';
import { ServerResponse } from './ServerResponse.model';

export interface UserResponse extends ServerResponse {
  result: User;
}
