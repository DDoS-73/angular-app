import { Author } from './Models/author.model';
import { Course } from './Models/course.model';

export const mockedCoursesList: Course[] = [
  {
    id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
    title: 'JavaScript',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    creationDate: '03/08/2022',
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
    creationDate: '07/08/2021',
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
    creationDate: '01/01/2023',
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
  {
    name: 'author',
    id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
  },
  {
    name: 'author2',
    id: '1c972c52-3198-4098-b6f7-799b45903199',
  },
  {
    name: 'author3',
    id: '072fe3fc-e751-4745-9af5-aa9eed0ea9ed',
  },
  {
    name: 'author4',
    id: '40b21bd5-cbae-4f33-b154-0252b1ae03a9',
  },
  {
    name: 'author5',
    id: '5e0b0f18-32c9-4933-b142-50459b47f09e',
  },
  {
    name: 'author6',
    id: '9987de6a-b475-484a-b885-622b8fb88bda',
  },
  {
    name: 'vlad',
    id: '49b33a61-40e0-496c-bddc-0eaff24ce501',
  },
  {
    name: 'VLAD',
    id: 'd0c043ed-2749-4d86-961a-1ad823fa6359',
  },
  {
    name: 'asd',
    id: '8a5b2cb3-8793-480b-a1cf-2a1db7a7d082',
  },
  {
    name: '4',
    id: '6aa11596-2300-4a95-9359-ba601ee37ac7',
  },
  {
    name: 'new',
    id: 'ceaa7ff5-94db-4d5b-ac8f-af14285e86ae',
  },
  {
    name: '5',
    id: '51cf3943-cd12-4e3e-8b9e-4a8232c6b68b',
  },
  {
    name: 'asd',
    id: '52c475b1-a429-47eb-bf34-4a8191105c72',
  },
  {
    name: '4',
    id: '9adcbd09-471b-46d7-b516-3f0a597e3e6c',
  },
  {
    name: '1',
    id: '7ae56bae-71ed-43b7-9ccf-358aa3192c8f',
  },
  {
    name: '2',
    id: 'a1485fba-e837-48af-b1cd-320e6cd6d101',
  },
];

export const BASE_URL = 'http://localhost:4000';
