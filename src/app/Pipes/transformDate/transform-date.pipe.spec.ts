import { TransformDatePipe } from './transform-date.pipe';

describe('ShowDatePipe', () => {
  it('create an instance', () => {
    const pipe = new TransformDatePipe();
    expect(pipe).toBeTruthy();
  });
});
