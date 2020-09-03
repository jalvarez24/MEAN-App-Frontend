import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _myservice: MyserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  movetofeed() {
    this._router.navigate(['../feed'], { relativeTo: this._activatedRoute });
  }

  movetolikedposts() {
    this._router.navigate(['../liked-posts'], { relativeTo: this._activatedRoute });
  }

}
