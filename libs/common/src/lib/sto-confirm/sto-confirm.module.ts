import { StoConfirmComponent } from './sto-confirm.component';

/**
 * @deprecated StoActionFooterComponent has been made standalone, and the module will be removed in a later version
 */
import { NgModule } from '@angular/core';

@NgModule({
  imports: [StoConfirmComponent],
  exports: [StoConfirmComponent],
})
export class StoConfirmDialogModule {}
