import React, { FC } from 'react';
import { Remind } from '../store/reminds';

type Props = {
  reminds: Remind[];
};

const RemindList: FC<Props> = ({ reminds }: Props) => {
  return (
    <div>
      {reminds.map(remind => (
        <div key={remind.id}>{remind.title}</div>
      ))}
    </div>
  );
};

export default RemindList;
