import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private _myservice: MyserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
   }

   pageRequiresMenu() {
    if(this._router.url === '/feed' || this._router.url === '/liked-posts') return true;
   }
}
