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
