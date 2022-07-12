import { OrderByPipe } from './order-by.pipe';
import { mockedCoursesList } from '../../constants';

describe('OrderByPipe', () => {
  const pipe = new OrderByPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should order course array by creationDate field', () => {
    const expected = [...mockedCoursesList].sort(sortFn('creationDate'));
    expect(pipe.transform(mockedCoursesList, 'creationDate')).toEqual(expected);
  });
});

const sortFn = (field: string) => (a: any, b: any) => {
  if (a[field] < b[field]) {
    return -1;
  } else if (a[field] > b[field]) {
    return 1;
  } else {
    return 0;
  }
};
