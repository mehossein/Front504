import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'words-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  showMode: boolean = true;
  constructor() {}

  ngOnInit() {}
}
