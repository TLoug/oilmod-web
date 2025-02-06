import { Component } from '@angular/core';
import { DemoComponent } from '../../../demo.component';
import { StoMessagePanelComponent } from '@ngx-stoui/common';
import { NgForOf } from '@angular/common';
import { MessagePanelsComponentCode } from './message-panels.component.code';

@Component({
  template: `
    <sto-demo [code]="code">
      <sto-message-panel
        (dismissed)="dismiss()"
        color="primary"
        [dismissable]="false"
        icon="info"
        >Primary Text Content</sto-message-panel
      >
    </sto-demo>
    <sto-demo [code]="code">
      <sto-message-panel
        (dismissed)="dismiss()"
        color="accent"
        [dismissable]="false"
        icon="info"
        >Accent Text Content</sto-message-panel
      >
    </sto-demo>
    <sto-demo [code]="code">
      <sto-message-panel
        (dismissed)="dismiss()"
        color="warning"
        [dismissable]="false"
        icon="warning"
        >Warning Text Content</sto-message-panel
      >
    </sto-demo>
    <sto-demo [code]="code">
      <sto-message-panel
        (dismissed)="dismiss()"
        color="success"
        [dismissable]="false"
        icon="info"
        >Warning Text Content</sto-message-panel
      >
    </sto-demo>
    <sto-demo [code]="code">
      <sto-message-panel
        (dismissed)="dismiss()"
        color="warn"
        [dismissable]="false"
        icon="warning"
        >Warn Text Content</sto-message-panel
      >
    </sto-demo>
    <sto-demo [code]="code">
      <sto-message-panel
        (dismissed)="dismiss()"
        color="danger"
        [dismissable]="false"
        icon="error"
        >Danger Text Content (a little to red atm.. :) )</sto-message-panel
      >
    </sto-demo>
    <sto-demo [code]="code">
      '<sto-message-panel (dismissed)="dismiss()" [dismissable]="true"
        >Dismissable Text Content</sto-message-panel
      >'
    </sto-demo>
  `,
  standalone: true,
  imports: [DemoComponent, StoMessagePanelComponent, NgForOf],
})
export class MessagePanelsDemoComponent {
  public code = MessagePanelsComponentCode;
  public dismiss() {
    return;
  }
}
