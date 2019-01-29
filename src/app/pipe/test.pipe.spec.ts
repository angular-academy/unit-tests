import { TestPipe } from './test.pipe';

describe('TestPipe', () => {
  it('create an instance', () => {
    const pipe = new TestPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform correctly', function () {
    const pipe = new TestPipe();
    fail('Not implemented yet :/');
  });
});
