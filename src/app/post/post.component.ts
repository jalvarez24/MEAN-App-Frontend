import { Component, OnInit, Input } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() title
  @Input() desc
  @Input() username
  @Input() likes
  @Input() id

  retrievedUsername: string = ''
  role: string = ''
  constructor(private _myservice: MyserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { 
    this._myservice.getUserName()
    .subscribe(
      data => this.retrievedUsername = data.toString(),
      error => {
        this._router.navigate(['../login'], { relativeTo: this._activatedRoute })
      }
    )

    this._myservice.getRole()
    .subscribe(
      data => 
        this.role = data.toString(),
      error => 
        this._router.navigate(['../login'], { relativeTo: this._activatedRoute })
    )
  }

  ngOnInit(): void {
  }

  deletePost() {
    console.log("delte called")
    this._myservice.deletePost({id:this.id})
    .subscribe(
      data => {
        console.log('Delete Post Success')
        this._router.navigate(['../liked-posts'], { relativeTo: this._activatedRoute })
      },
      error => console.log('Some error: ' + error)
    )
  }

  addPost(data) {
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
