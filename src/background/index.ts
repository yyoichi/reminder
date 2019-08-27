import { Remind } from '../domain/remind';

const RemindsRepository: Remind[] = [];

const createAlarm = (id: string, when: number) => {
  chrome.alarms.create(id, { when });
};

const pushNotification = (id: string) => {
  const remind = RemindsRepository.find(remind => remind.id === id);
  if (!remind) return;

  chrome.notifications.create(id, {
    type: 'basic',
    title: remind.title,
    message: '',
    iconUrl: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
  });
};

chrome.runtime.onMessage.addListener((remind: Remind) => {
  createAlarm(remind.id, remind.time);
  RemindsRepository.push(remind);
});

chrome.alarms.onAlarm.addListener(alerm => {
  pushNotification(alerm.name);
});
