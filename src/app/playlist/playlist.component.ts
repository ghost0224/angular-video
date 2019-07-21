import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PlayerComponent} from '../player/player.component';
import {ControlsComponent} from '../controls/controls.component';
import {Http, Jsonp} from '@angular/http';
import {forEach} from '@angular/router/src/utils/collection';
import {applySourceSpanToExpressionIfNeeded} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit, AfterViewInit {

  playlistData = new Array();

  @ViewChild('controlsComponent')
  public controlsComponent: ControlsComponent
  constructor(private http: Http, private jsonp: Jsonp) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log('playlist init:   ');
    console.log(this.controlsComponent);
    const that = this;
    this.http.get('/youtube').subscribe(function(data) {
      for (let i = 0; i < data.json().length; i++) {
        const d = data.json()[i];
        console.log(d.approved);
        if (d.approved === 1) {
          that.playlistData.push(d);
        }
      }
      console.log(that.playlistData);
    }, function (error) {
      console.log(error);
    });
  }

}
