import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dragonBallDetailResponse } from '../../../models/dragon-ball/dragonBallDetailModel';
import { DragonBallApiService } from '../../../services/dragonBall/dragon-ball-api-service';

@Component({
  selector: 'app-dragon-ball-detail',
  imports: [CommonModule],
  templateUrl: './dragon-ball-detail.html',
  styleUrl: './dragon-ball-detail.scss',
})
export class DragonBallDetail implements OnInit {

  protected personajes?:dragonBallDetailResponse;

  constructor(
    private _cd: ChangeDetectorRef,
    private _dragonBallService: DragonBallApiService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this._route.params.subscribe(params => {
      const id = params['id'];

      this._dragonBallService.getCharacterById(id).subscribe(resp => {
        this.personajes = resp;
        this._cd.markForCheck();
      });
    });
  }
}