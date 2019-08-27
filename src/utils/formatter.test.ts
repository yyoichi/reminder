import { formatter } from './formatter';
import { format } from 'date-fns';

describe('formatter', () => {
  beforeAll(() => {
    // 2012/10/05 00:00
    Date.now = jest.fn(() => 1349362800000);
  });

  test('at 18:00', () => {
    // 2012/10/05 18:00
    expect(formatter('at 18:00')).toBe(1349427600000);
  });

  test('return unixtime is 2012/10/05 18:00', () => {
    expect(format(formatter('at 18:00'), 'yyyy/MM/dd HH:mm')).toBe('2012/10/05 18:00');
  });
});
