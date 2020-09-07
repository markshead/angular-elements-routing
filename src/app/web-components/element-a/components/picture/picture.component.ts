import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'element-a-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent {

  constructor(private router: Router) { }

  public navigateToHome() {
    this.router.navigate([{outlets: {elementA: null}}]);
  }

  public navigateToProfile() {
    this.router.navigate([{outlets: {elementA: ['307c5c4e-cd11-4e22-9938-57950f13c3b8']}}]);
  }

}
