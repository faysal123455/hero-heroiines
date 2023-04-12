import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { Heroin } from '../heroin';
import { HeroinService } from '../heroin.service';


@Component({
  selector: 'app-heroin-detail',
  templateUrl: './heroin-detail.component.html',
  styleUrls: [ './heroin-detail.component.css' ]
})
export class HeroinDetailComponent implements OnInit {
  heroin: Heroin | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroinService: HeroinService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHeroin();
  }
  getHeroin(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroinService.getHeroin(id)
      .subscribe(heroin => this.heroin = heroin);
  }

  goBack(): void {
    this.location.back();
  }
}