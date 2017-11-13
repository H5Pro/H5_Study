import { trigger, state, style, transition, animate } from '@angular/core';

const messageOutInAnimete = trigger('messageOutInAnimete', [
    state('void', style({height: 0, opacity: 0})),
    transition('* => void', [animate('300ms ease')])
]);

const messageActivedAnimete = trigger('messageActivedAnimete', [
  state('inactived', style({transform: 'scale(1)'})),
  state('actived', style({transform: 'scale(1.05)'})),
  transition('inactived => actived', animate('100ms ease-in')),
  transition('actived => inactived', animate('100ms ease-out')),
]);

export { messageOutInAnimete, messageActivedAnimete };
