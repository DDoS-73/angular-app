import { Course } from '../course.model';
import { ServerResponse } from './ServerResponse.model';

export interface CourseResponse extends ServerResponse {
  result: Course;
}
