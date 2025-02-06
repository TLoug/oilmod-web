import { Component } from '@angular/core';
import { DemoComponent } from '../../../demo.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmService, StoConfirmComponent } from '@ngx-stoui/common';
import { ConfirmDialogComponentCode } from './confirm-dialog.component.code';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  template: `
    <sto-demo [code]="ConfirmDialogComponentCode">
      <sto-confirm>Show dialog</sto-confirm>
    </sto-demo>
  `,
  standalone: true,
  imports: [
    DemoComponent,
    StoConfirmComponent,
    MatCheckboxModule,
    MatButtonModule,
  ],
  providers: [ConfirmService, { provide: Dialog, useValue: '' }],
})
export class ConfirmDialogDemoComponent {
  public loading: boolean;
  public addClass: boolean;
  public ConfirmDialogComponentCode = ConfirmDialogComponentCode;
}
