import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts: any = []
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

  getAllPosts(): void {
    this.posts = this._myservice.getAllPosts()
  }

  ngOnInit(): void {
    this.getAllPosts()
  }

}
