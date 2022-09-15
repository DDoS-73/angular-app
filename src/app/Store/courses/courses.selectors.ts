import { createFeatureSelector } from '@ngrx/store';

import { Course } from '../../Models/course.model';
import { Features } from '../features';

export const selectCourses = createFeatureSelector<Course[]>(Features.Courses);
