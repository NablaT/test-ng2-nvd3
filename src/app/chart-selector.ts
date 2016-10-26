import {Component, Output, EventEmitter} from '@angular/core';
import {ChartTypes} from './defs';

@Component({
  selector: 'chart-selector',
  templateUrl: './chart-selector.html',
})

export class ChartSelectorComponent {
  @Output() select = new EventEmitter();
  cTypes = ChartTypes;

  ngOnInit(){
    this.select.emit(this.cTypes[0]);
  }
}
