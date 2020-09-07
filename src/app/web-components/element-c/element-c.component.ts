import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'element-c',
  templateUrl: './element-c.component.html',
  styleUrls: ['./element-c.component.scss']
})
export class ElementCComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit() {
    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements
  }

}
