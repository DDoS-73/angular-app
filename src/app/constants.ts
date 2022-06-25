import { Course } from './Course';

export const mockedCoursesList: Course[] = [
  {
    id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
    title: 'JavaScript',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    creationDate: new Date(),
    duration: 160,
    topRated: true,
  },
  {
    id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
    title: 'Angular',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
 has been the industry's standard dummy text ever since the 1500s, when an unknown
 printer took a galley of type and scrambled it to make a type specimen book.`,
    creationDate: new Date(),
    duration: 210,
    topRated: false,
  },
];
