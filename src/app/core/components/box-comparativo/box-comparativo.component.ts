import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-comparativo',
  templateUrl: './box-comparativo.component.html',
  styleUrls: ['./box-comparativo.component.styl']
})
export class BoxComparativoComponent implements OnInit {
  @Input() title;
  @Input() clientes = '';

  constructor() { }

  ngOnInit(): void {
  }

}
