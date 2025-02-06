export const routes = [
  {
    path: 'action-footer',
    loadComponent: () =>
      import('./routes/action-footer/action-footer.component').then(
        (c) => c.ActionFooterDemoComponent
      ),
  },
  {
    path: 'breadcrumbs',
    loadComponent: () =>
      import('./routes/breadcrumbs/breadcrumbs.component').then(
        (c) => c.BreadcrumbsDemoComponent
      ),
  },
  {
    path: 'confirm-dialog',
    loadComponent: () =>
      import('./routes/confirm-dialog/confirm-dialog.component').then(
        (c) => c.ConfirmDialogDemoComponent
      ),
  },
  {
    path: 'message-panel',
    loadComponent: () =>
      import('./routes/message-panels/message-panels.component').then(
        (c) => c.MessagePanelsDemoComponent
      ),
  },
  {
    path: 'preference-manager',
    loadComponent: () =>
      import('./routes/preference-manager/preference-manager.component').then(
        (c) => c.PreferenceManagerComponent
      ),
  },
];
