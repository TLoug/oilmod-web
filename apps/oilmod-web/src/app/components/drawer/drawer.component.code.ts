export const DrawerComponentCode = `import { Component } from '@angular/core';
import { DemoComponent } from '../demo.component';
import { NavDrawerComponent } from '@ngx-stoui/drawer';
import { navigationItems } from './drawer.config';
import { DrawerComponentCode } from './drawer.component.code';

@Component({
  template: \`<sto-demo [code]="code">
    <sto-nav-drawer
      [collapsed]="false"
      [navigationItems]="navigationItems"
      [withAppHeader]="false"
      (activate)="activate($event)"
    ></sto-nav-drawer>
  </sto-demo>\`,
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



export const navigationItems = [
  {
    label: 'Direct route',
    route: ['/', 'home'],
    icon: 'home',
  },
  {
    label: 'Disabled',
    route: ['/', 'home'],
    icon: 'do_disturb',
    disabled: true,
  },
  {
    label: 'Internal route title',
    children: [
      {
        route: ['/', 'disabled', 'route1'],
        disabled: true,
        label: 'Disabled child route',
      },
      {
        route: ['/', 'route1'],
        label: 'Internal child route',
      },
      {
        route: ['/', 'route2'],
        label: 'Internal child route 2',
      },
      {
        route: ['/', 'route3'],
        label: 'Internal child route 3',
      },
      {
        route: ['/', 'route4'],
        label: 'Internal child route 4',
      },
      {
        route: ['/', 'route5'],
        label: 'Internal child route 5',
      },
      {
        route: ['/', 'route6'],
        label: 'Internal child route 6',
      },
    ],
    icon: 'dashboard',
    title: 'Dashboard',
  },
  {
    label: 'External',
    children: [
      {
        link: 'https://example.com',
        target: '_blank',
        label: 'Example.com',
      },
    ],
    icon: 'open_in_new',
  },
  {
    link: '#',
    label: 'Disabled Route',
    children: [],
    icon: 'do_disturb',
    disabled: true,
  },
];

`;
