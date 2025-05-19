export enum ActivityType {
  chat = 'chat',
  form = 'form',
  tweet = 'tweet',
  advanced = 'advanced',
  message = 'message',
}

export interface Message {
  from: 'user' | 'bot';
  text: string;
}

export interface User {
  email: string;
  name: string;
}

export class Form {
  user: User;
  activity?: ActivityType;

  constructor() {
    this.user = { email: '', name: '' };
  }
}
