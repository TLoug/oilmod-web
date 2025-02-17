export const DatatableComponentCode = `import { Component } from '@angular/core';
import { DemoComponent } from '../demo.component';
import { columns, rows } from './data';
import { Column, StoDatatableModule } from '@ngx-stoui/datatable';
import { DatatableComponentCode } from './datatable.component.code';

@Component({
  template: \`<sto-demo code="code">
    <sto-datatable
      [virtualScroll]="true"
      [height]="400"
      [rows]="rows"
      [columns]="columns"
    ></sto-datatable>
  </sto-demo>\`,
  standalone: true,
  imports: [DemoComponent, StoDatatableModule],
})
export class DatatableComponent {
  public rows = rows;
  public columns: Column[] = columns;
  public code = DatatableComponentCode;
}
`;
