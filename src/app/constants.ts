import { Author } from './Models/author.model';
import { Course } from './Models/course.model';

export const mockedCoursesList: Course[] = [
  {
    id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
    title: 'JavaScript',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    creationDate: new Date(),
    duration: 160,
    authors: [
      '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
      'f762978b-61eb-4096-812b-ebde22838167',
    ],
  },
  {
    id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
    title: 'Angular',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
 has been the industry's standard dummy text ever since the 1500s, when an unknown
 printer took a galley of type and scrambled it to make a type specimen book.`,
    creationDate: new Date('07.08.2021'),
    duration: 210,
    authors: [
      'df32994e-b23d-497c-9e4d-84e4dc02882f',
      '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
    ],
  },
  {
    id: '4dbc-b8a9-4d39-b75a-2b5906fd0916',
    title: 'React',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
 has been the industry's standard dummy text ever since the 1500s, when an unknown
 printer took a galley of type and scrambled it to make a type specimen book.`,
    creationDate: new Date(2023, 0, 1),
    duration: 10,
    authors: [
      '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
      'f762978b-61eb-4096-812b-ebde22838167',
      '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
      'f762978b-61eb-4096-812b-ebde22838167',
      '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
      'f762978b-61eb-4096-812b-ebde22838167',
    ],
  },
];

export const mockedAuthorsList: Author[] = [
  {
    id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
    name: 'Vasiliy Dobkin',
  },
  {
    id: 'f762978b-61eb-4096-812b-ebde22838167',
    name: 'Nicolas Kim',
  },
  {
    id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
    name: 'Anna Sidorenko',
  },
  {
    id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
    name: 'Valentina Larina',
  },
];

export const BASE_URL = 'http://localhost:4000';
