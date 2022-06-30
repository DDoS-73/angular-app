import { TestBed } from '@angular/core/testing';

import { CourseService } from './course.service';
import { mockedCoursesList } from '../constants';

describe('CourseService', () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CourseService] });
    service = TestBed.inject(CourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should remove course', () => {
    const courses = service.removeItem('de5aaa59-90f5-4dbc-b8a9-aaf205c551ba');
    const expected = mockedCoursesList.filter(
      (el) => el.id !== 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba'
    );
    expect(courses).toEqual(expected);
  });
});
