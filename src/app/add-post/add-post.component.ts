import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  username: string = ''
  constructor(private _myservice: MyserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { 
    this._myservice.getUserName()
    .subscribe(
      data => this.username = data.toString(),
      error => {
        // console.log(error)
        this._router.navigate(['../login'], { relativeTo: this._activatedRoute })
      }
    )
  }

  ngOnInit(): void {
  }

  addPost(data) {
    console.log(data)
    this._myservice.addPost({title: data.title, desc: data.desc, username: this.username})
    .subscribe(
      data => {
        console.log('Add Post Success')
        this._router.navigate(['../my-posts'], { relativeTo: this._activatedRoute })
      },
      error => console.log('Some error: ' + error)
    )
  }
}
