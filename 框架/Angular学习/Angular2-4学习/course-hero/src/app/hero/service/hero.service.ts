import { Injectable } from '@angular/core';
import { Hero } from '../class/hero';
import { heroes } from '../../../mock/mock-heroes';

@Injectable()
export class HeroService {
  constructor() { }
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(heroes);
  }
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise((resovle) => {
      setTimeout(() => {
        resovle(this.getHeroes());
      }, 2000);
    });
  }
}
