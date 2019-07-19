import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {PlayerComponent} from '../player/player.component';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  like = true;
  likeCount = 0;
  unLike = true;
  unLikeCount = 0;
  @ViewChild('btnUp') btnUp: ElementRef;
  @ViewChild('btnDown') btnDown: ElementRef;
  @ViewChild('playerComponent')
  public playerComponent: PlayerComponent
  constructor(private render2: Renderer2) {
    localStorage.setItem('like', '88');
    localStorage.setItem('unLike', '12');
    this.likeCount = 88;
    this.unLikeCount = 12;
  }

  ngOnInit() {
    console.log('controls init: ');
    console.log(this.playerComponent);
  }

  clickLike() {
    if (this.like) {
      localStorage.setItem('like', (Number(localStorage.like) + 1) + '');
      this.like = false;
      this.render2.removeClass(this.btnUp.nativeElement, 'fa-thumbs-o-up');
      this.render2.addClass(this.btnUp.nativeElement, 'fa-thumbs-up');
    } else {
      if (localStorage.like > 0) {
        localStorage.setItem('like', (Number(localStorage.like) - 1) + '');
        this.like = true;
        this.render2.removeClass(this.btnUp.nativeElement, 'fa-thumbs-up');
        this.render2.addClass(this.btnUp.nativeElement, 'fa-thumbs-o-up');
      }
    }
    this.likeCount = localStorage.like;
  }

  clickUnLike() {
    if (this.unLike) {
      localStorage.setItem('unLike', (Number(localStorage.unLike) + 1) + '');
      this.unLike = false;
      this.render2.removeClass(this.btnDown.nativeElement, 'fa-thumbs-o-down');
      this.render2.addClass(this.btnDown.nativeElement, 'fa-thumbs-down');
    } else {
      if (localStorage.unLike > 0) {
        localStorage.setItem('unLike', (Number(localStorage.unLike) - 1) + '');
        this.unLike = true;
        this.render2.removeClass(this.btnDown.nativeElement, 'fa-thumbs-down');
        this.render2.addClass(this.btnDown.nativeElement, 'fa-thumbs-o-down');
      }
    }
    this.unLikeCount = localStorage.unLike;
  }


}
