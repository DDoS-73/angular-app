import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  const pipe = new DurationPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transform 256 to "04h 16min"', () => {
    expect(pipe.transform(256)).toBe('04h 16min');
  });

  it('transform 36 to "36min"', () => {
    expect(pipe.transform(36)).toBe('36min');
  });
});
