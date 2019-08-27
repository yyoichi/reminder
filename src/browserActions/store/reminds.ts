import { AnyAction } from 'redux';

export type Remind = {
  id: string;
  title: string;
  message?: string;
  time: number;
};

export const remindActions = {
  add: (remind: Remind): AnyAction => {
    return {
      type: '@@reminds/add',
      payload: {
        remind
      }
    };
  }
};

export type RemindState = Remind[];
