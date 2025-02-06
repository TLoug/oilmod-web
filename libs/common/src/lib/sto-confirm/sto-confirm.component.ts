import {
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { StoConfirmDialogComponent } from './sto-confirm-dialog/sto-confirm-dialog.component';

const dialogConfig: MatDialogConfig = {
  data: {
    title: 'test title',
    message: 'test message',
    confirmText: 'confirmText',
    showCancel: true,
  },
};

@Component({
  standalone: true,
  selector: 'sto-confirm',
  templateUrl: './sto-confirm.component.html',
  styleUrls: ['sto-confirm.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [MatDialogModule, StoConfirmDialogComponent],
  providers: [
    { provide: MatDialogRef, useValue: StoConfirmComponent },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {
        title: 'Confirm delete',
        message: 'Confirmation message should be short',
        confirmText: 'Show dialog',
      },
    },
  ],
})
export class StoConfirmComponent {
  @ViewChild('ok')
  ok: ElementRef<HTMLButtonElement>;

  constructor(
    public dialogRef: MatDialogRef<StoConfirmDialogComponent>,
    private dialog: MatDialog
  ) {}

  openDialog() {
    this.dialogRef = this.dialog.open(StoConfirmDialogComponent, dialogConfig);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
