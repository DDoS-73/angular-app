import { FilterPipe } from './filter.pipe';
import { mockedCoursesList } from '../../constants';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter course array by title field', () => {
    const expected = mockedCoursesList.filter((course) =>
      course.title.toLowerCase().includes('angular')
    );
    expect(pipe.transform(mockedCoursesList, 'angular')).toEqual(expected);
  });
});
