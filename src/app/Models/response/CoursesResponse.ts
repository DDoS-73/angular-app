import { Course } from '../course.model';
import { ServerResponse } from './ServerResponse.model';

export interface CoursesResponse extends ServerResponse {
  result: Course[];
}
