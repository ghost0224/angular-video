import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PlayerComponent} from '../player/player.component';
import {ControlsComponent} from '../controls/controls.component';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit, AfterViewInit {

  @ViewChild('controlsComponent')
  public controlsComponent: ControlsComponent
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log('playlist init:   ');
    console.log(this.controlsComponent);
  }

}
