import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Heroin } from './heroin';
import { HEROIINES } from './mock-heroiines';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroinService {

  constructor(private messageService: MessageService) { }

  getHeroiines(): Observable<Heroin[]> {
    const heroiines = of(HEROIINES);
    this.messageService.add('HeroinService: fetched heroiines');
    return heroiines;
  }
}