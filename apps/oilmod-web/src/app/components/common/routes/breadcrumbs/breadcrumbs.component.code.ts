export const BreadcrumbsComponentCode = `
import { Component } from '@angular/core';
import { DemoComponent } from '../../../demo.component';
import { StoBreadcrumbsComponent } from '@ngx-stoui/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbsComponentCode } from './breadcrumbs.component.code';

@Component({
  template: \`
    <sto-demo [code]="BreadcrumbsComponentCode">
      <sto-breadcrumbs [model]="model"> </sto-breadcrumbs>
    </sto-demo>
  \`,
  standalone: true,
  imports: [
    DemoComponent,
    StoBreadcrumbsComponent,
    MatCheckboxModule,
    MatButtonModule,
  ],
})
  
export class BreadcrumbsDemoComponent {
  BreadcrumbsComponentCode = BreadcrumbsComponentCode;
  public model: any[] = [
    {
      label: 'Ext Url',
      url: 'https://topstorybook.z1.web.core.windows.net/iframe.html?viewMode=story&id=common-breadcrumbs--breadcrumbs',
    },
    {
      label: 'RouterLink',
      segment: 'submodule/again',
    },
    {
      label: 'Neither',
    },
  ];
  public home: any;
  public homeicon: string;
  public svgIcon: boolean;
`;
