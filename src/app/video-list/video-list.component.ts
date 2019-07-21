import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, AfterViewInit {

  playlistData = new Array();

  videoDetail;

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const that = this;
    this.http.get('/youtube').subscribe(function(data) {
      for (let i = 0; i < data.json().length; i++) {
        that.playlistData = data.json();
      }
      console.log(that.playlistData);
    }, function (error) {
      console.log(error);
    });
  }

  showUpdate(id) {
    this.http.get('/youtube/' + id).subscribe(function(data) {
      this.videoDetail = data.json();
    }, function (error) {
      console.log(error);
    });
  }

  approve(id, approveStatus) {
    const that = this;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.get('/youtube/' + id).subscribe(function(data) {
      const video = data.json();
      video.approved = approveStatus;
      that.http.put('/youtube/' + id, video, {headers: headers}).subscribe((d) => {
        console.log(d);
        this.router.navigate(['/list']);
      });
    });
  }

  delete(id) {
    this.http.delete('/youtube/' + id).subscribe(function(data) {
    }, function (error) {
      console.log(error);
    });
  }

}
