import { Course } from './course.model';
import { User } from './user.model';

export interface ServerResponse {
  successful: boolean;
  result: string | User | Course;
  user?: {
    email: string;
    name: string;
  };
}
