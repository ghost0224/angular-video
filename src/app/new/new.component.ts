import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Headers, Http} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  formModel: FormGroup;

  constructor(private http: Http, private router: Router) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      title: ['', Validators.minLength(1)],
      url: [''],
      subtitle: ['']
    });
  }

  ngOnInit() {
  }

  newVideo(value: any) {
    value.id = 0;
    value.status = 'added';
    value.approved = 0;
    value.like = 0;
    value.unlike = 0;
    value.currentStatus = 'stopped';
    value.exitplayprogress = 0;
    console.log(value);
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // this.http.get('/youtube', {headers: headers}).subscribe((data) => {
    //   console.log(data.json());
    //   this.router.navigate(['/list']);
    // });
    this.http.post('/youtube', value, {headers: headers}).subscribe((data) => {
      // console.log(data);
      this.router.navigate(['/list']);
    });
  }

}
