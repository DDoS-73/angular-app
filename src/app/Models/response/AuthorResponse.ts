import { Author } from '../author.model';
import { ServerResponse } from './ServerResponse.model';

export interface AuthorResponse extends ServerResponse {
  result: Author;
}
