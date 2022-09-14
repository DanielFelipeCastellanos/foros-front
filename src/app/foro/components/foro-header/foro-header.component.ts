import { Component,Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-foro-header',
  templateUrl: './foro-header.component.html',
  styleUrls: ['./foro-header.component.scss']
})
export class ForoHeaderComponent implements OnInit {
  @Input() foros: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.foros);
  }

}
