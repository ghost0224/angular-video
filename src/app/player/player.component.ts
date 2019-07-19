import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {LocalStorage} from '../common/local.storage';
declare var $: any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  playing = false;
  playable = false;
  pausable = true;
  volume = 20;
  volumeMinus = false;
  volumePlus = false;

  @ViewChild('playerElement') playerElement: ElementRef;
  @ViewChild('progressBar') progressBar: ElementRef;
  @ViewChild('playerTitle') playerTitle: ElementRef;
  constructor(private render2: Renderer2) { }

  ngOnInit() {
    console.log('player init: ');
    console.log(this.playerElement.nativeElement);
    console.log(this.progressBar.nativeElement);
  }

  play() {
    if (!this.playing) {
      this.playing = true;
      this.playable = true;
      this.pausable = false;
      this.playerElement.nativeElement.play();
      this.getVideoProgress();
    }
  }

  pause() {
    if (this.playing) {
      this.playing = false;
      this.playable = false;
      this.pausable = true;
      this.playerElement.nativeElement.pause();
    }
  }

  stop() {
    this.playerElement.nativeElement.pause();
    this.playerElement.nativeElement.currentTime = 0;
    this.playable = false;
    this.pausable = true;
    $('#progress').val(0);
    this.playing = false;
  }

  plus() {
    if (this.volume < 100) {
      this.volume = this.volume + 10;
      this.playerElement.nativeElement.volume = this.volume / 100;
      console.log(this.playerElement.nativeElement.volume);
      this.volumeMinus = false;
      if (this.volume === 100) {
        this.volumePlus = true;
      }
    }
  }

  minus() {
    if (this.volume > 0) {
      this.volume = this.volume - 10;
      this.playerElement.nativeElement.volume = this.volume / 100;
      console.log(this.playerElement.nativeElement.volume);
      this.volumePlus = false;
      if (this.volume === 0) {
        this.volumeMinus = true;
      }
    }
  }

  mute() {
    if (this.playerElement.nativeElement.muted) {
      this.playerElement.nativeElement.muted = false;
    } else {
      this.playerElement.nativeElement.muted = true;
    }
  }

  getVideoProgress() {
    // const video = this.playerElement.nativeElement;
    // setTimeout(function () {
    //   const max = video.duration;
    //   const currentTime = video.currentTime;
    //   const pg = currentTime / max * 100;
    //   $('#progress-bar').css('width', pg + '%');
    //   if (currentTime >= max) {
    //     this.playing = false;
    //     this.playable = false;
    //     this.pausable = true;
    //     return false;
    //   }
    //   this();
    // }, 300);
    let i = 0;
    const v = this.playerElement.nativeElement;
    const p = this.progressBar.nativeElement;
    for (; i < 200; i++) {
      // tslint:disable-next-line:no-shadowed-variable
      (function (i) {
        setTimeout(function () {
          const max = v.duration;
          const currentTime = v.currentTime;
          const pg = currentTime / max * 100;
          // console.log('currentTime: ' + currentTime + ', max: ' + max);
          $('#progress-bar').css('width', pg + '%');
          // this.render2.setStyle(p, 'width', pg + '%');
        }, (i + 1) * 300);
      })(i);
    }
  }

  playVideo(url, title) {
    const before = this.playerElement.nativeElement.currentTime;
    this.playerElement.nativeElement.src = url;
    this.playerTitle.nativeElement.src = './assets/movie/' + title;
    const duration = this.playerElement.nativeElement.duration;
    console.log(before + ', ' + duration);
    if (duration === NaN || before >= duration) {
      this.playerElement.nativeElement.currentTime = 0;
    } else {
      this.playerElement.nativeElement.currentTime = before;
    }
    console.log('before:' + before);
    console.log('duration:' + this.playerElement.nativeElement.duration);
    console.log('now:' + this.playerElement.nativeElement.currentTime);
    this.playing = false;
    this.playable = false;
    this.pausable = true;
    this.play();
  }



}
