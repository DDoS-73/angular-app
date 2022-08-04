import { ServerResponse } from './ServerResponse.model';

export interface SuccessfulResponse extends ServerResponse {
  result: string;
}
