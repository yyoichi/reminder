import { parse } from 'date-fns';

export const formatter = (when: string): number => {
  const parsedWhen = when.match(/(at|every|in|on)\s+(.*)$/);

  if (!parsedWhen) throw new Error('Parser error');

  const [, type, date] = parsedWhen;
  switch (type) {
    case 'at':
      return parse(date, 'HH:mm', Date.now()).getTime();
    default:
      return 0;
  }
};
