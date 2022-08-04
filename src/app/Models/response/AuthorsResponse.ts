import { Author } from '../author.model';
import { ServerResponse } from './ServerResponse.model';

export interface AuthorsResponse extends ServerResponse {
  result: Author[];
}
