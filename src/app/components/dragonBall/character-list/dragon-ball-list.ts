import { Component,ChangeDetectorRef, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DragonBallApiService } from '../../../services/dragonBall/dragon-ball-api-service';
import { dragonBallSimple } from '../../../models/dragon-ball/dragonBallListModel';

@Component({
  selector: 'app-dragon-ball-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dragon-ball-list.html',
  styleUrls: ['./dragon-ball-list.scss']
})
export class DragonBallList implements OnInit {

  protected personajes:dragonBallSimple[] = [];

  constructor(
  private _cd: ChangeDetectorRef,
  private _dragonBallService: DragonBallApiService,
  ){}


  ngOnInit(): void {
    this._dragonBallService.getAllCharacters().subscribe(response => {
      this.personajes = response.items;
      this._cd.markForCheck();
  });
  }
}
