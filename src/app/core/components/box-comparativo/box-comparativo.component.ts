import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-comparativo',
  templateUrl: './box-comparativo.component.html',
  styleUrls: ['./box-comparativo.component.styl']
})
export class BoxComparativoComponent implements OnInit {
  @Input() title;
  @Input() comparado;
  comparadoMes = 0;
  comparacao = 0;
  positivo = true;

  constructor() { }

  ngOnInit(): void {
  }
  isComparado(){
    if(this.comparado){
      this.comparadoMes = 0;
      let comparadoAnos = 0;
      this.comparacao = 0;
      this.comparado.forEach(e => {
        if(new Date(e.createOn).getMonth() == new Date().getMonth()){this.comparadoMes ++;}
        if(new Date(e.createOn).getFullYear() == new Date().getFullYear()){comparadoAnos ++;}
      });
      this.comparacao = (this.comparadoMes - (comparadoAnos)/(Number(new Date().getMonth())+1))*100;
      this.positivo = (this.comparacao >= 0) ? true : false

    }
    return this.comparado != undefined || this.comparado != null
  }

}
