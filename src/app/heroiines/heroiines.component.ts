import { Component, OnInit } from '@angular/core';

import { Heroin } from '../heroin';
import { HeroinService } from '../heroin.service';


@Component({
  selector: 'app-heroiines',
  templateUrl: './heroiines.component.html',
  styleUrls: ['./heroiines.component.css']
})
export class HeroesComponent implements OnInit {
  heroiines: Heroin[] = [];

  constructor(private heroService: HeroinService) { }

  ngOnInit(): void {
    this.getHeroiines();
  }

  getHeroiines(): void {
    this.heroinService.getHeroiines()
    .subscribe(heroiines => this.heroiines = heroiines);
  }
}