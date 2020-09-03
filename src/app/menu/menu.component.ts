import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username: string = ''
  role: string = ''
  constructor(private _myservice: MyserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { 
    this._myservice.getUserName()
    .subscribe(
      data => 
        this.username = data.toString(),
      error => 
        this._router.navigate(['../login'], { relativeTo: this._activatedRoute })
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

  movetocreatepost() {
    this._router.navigate(['../add-post'], { relativeTo: this._activatedRoute });
  }

  signOut() {
    localStorage.removeItem('token')
    this._router.navigate(['../login'], { relativeTo: this._activatedRoute });
  }
}
