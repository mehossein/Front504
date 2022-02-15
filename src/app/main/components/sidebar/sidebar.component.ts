import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'words-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() showMode: boolean = false;
  @Output() showModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  showText: boolean = false;
  constructor() {}

  ngOnInit() {}

  changeShow() {
    this.showMode = !this.showMode;
    this.showModeChange.emit(this.showMode);
    if (this.showMode)
      setTimeout(() => {
        this.showText = this.showMode;
      }, 300);
    else this.showText = this.showMode;
  }
}
