import React, { useCallback, ChangeEvent, useState, FC } from 'react';
import { render } from 'react-dom';
import { Remind } from './store/reminds';
import { formatter } from '../utils/formatter';

import styles from './index.css';
import RemindList from './components/RemindList';
import { generateId } from '../utils/generateId';

const Reminder: FC = () => {
  const [reminds, setReminds] = useState<Remind[]>([]);
  const [value, setValue] = useState('');

  const pushNotification = useCallback(() => {
    chrome.notifications.create('', {
      type: 'basic',
      title: 'reminder',
      iconUrl: './timer.jpg',
      message: 'remind!!'
    });
  }, []);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  const onClick = useCallback(() => {
    pushNotification();
  }, []);

  const onRegistButtonClick = useCallback(() => {
    const result = value.match(/(^.*?)\s+((in|at|on|every)\s+.*)/);
    if (result) {
      const [, title, when] = result;
      const remind = { id: generateId(), title, time: formatter(when) };
      setReminds([...reminds, remind]);
      chrome.runtime.sendMessage(remind);
    }
  }, [value]);

  return (
    <div className={styles.root}>
      <input className={styles.form} type="text" defaultValue={value} onChange={onChange} />
      <button className={styles.regist} onClick={onRegistButtonClick}>
        REGIST
      </button>
      <button onClick={onClick}>TEST PUSH</button>
      <RemindList reminds={reminds} />
    </div>
  );
};

render(<Reminder />, document.querySelector('#root'));
