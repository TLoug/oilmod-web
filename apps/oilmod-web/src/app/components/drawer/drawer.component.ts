import { Component } from '@angular/core';
import { DemoComponent } from '../demo.component';
import { NavDrawerComponent } from '@ngx-stoui/drawer';
import { navigationItems } from './drawer.config';
import { DrawerComponentCode } from './drawer.component.code';

@Component({
  template: `<sto-demo [code]="code">
    <sto-nav-drawer
      [collapsed]="false"
      [navigationItems]="navigationItems"
      [withAppHeader]="false"
      (activate)="activate($event)"
    ></sto-nav-drawer>
  </sto-demo>`,
  standalone: true,
  imports: [DemoComponent, NavDrawerComponent],
})
export class DrawerComponent {
  public navigationItems = navigationItems;
  public code = DrawerComponentCode;
  activate(event: any) {
    return event;
  }
}
