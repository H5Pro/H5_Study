import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../hero/class/hero';
import { HeroService } from '../../../hero/service/hero.service';

@Component({
  selector: 'app-hero-main',
  templateUrl: './hero-main.component.html',
  styleUrls: ['./hero-main.component.css'],
  providers: [HeroService]
})
export class HeroMainComponent implements OnInit {
  heroes: Hero[];
  selectItem: Hero;
  constructor(private  heroSevice: HeroService) {}
  select (item: Hero, index: number): void {
    this.selectItem = item;
  }
  private addMessage(type): void {
  }
  ngOnInit(): void {
    this.heroSevice.getHeroesSlowly().then(
      heroes => this.heroes = heroes
    );
  }
}
