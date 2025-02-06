export const MessagePanelsComponentCode = `
import { Component } from '@angular/core';
import { DemoComponent } from '../../../demo.component';
import { StoMessagePanelComponent } from '@ngx-stoui/common';
import { NgForOf } from '@angular/common';

@Component({
  template: \`
    <sto-message-panel
        (dismissed)="dismiss()"
        color="primary"
        [dismissable]="false"
        icon="info">
        Primary Text Content
    </sto-message-panel>
  \`,
  standalone: true,
  imports: [DemoComponent, StoMessagePanelComponent, NgForOf],
})
export class MessagePanelsDemoComponent {
  public dismiss() {
    return;
  }
}

`;
