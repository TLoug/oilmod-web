import { NgIf } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogConfig,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
/**
 * A confirm dialog that emits an observable.
 */
@Component({
  standalone: true,
  selector: 'sto-confirm-dialog',
  templateUrl: './sto-confirm-dialog.component.html',
  styleUrls: ['sto-confirm-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [NgIf, MatDialogModule],
})
export class StoConfirmDialogComponent {
  @ViewChild('ok')
  ok: ElementRef<HTMLButtonElement>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<StoConfirmDialogComponent>
  ) {
    console.log(data);
  }

  @Input() message: string;

  @Input() title: string;

  @Input() confirmText: string;

  @Input() showCancel: boolean;

  @Input() options: MatDialogConfig;

  @Output() confirmClicked = new EventEmitter<any>();

  emitConfirmClicked() {
    this.confirmClicked.emit(this.data);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
