import {
  IconAperture, IconCopy, IconEyeDollar, IconLayoutDashboard, IconLogin, IconMenuOrder, IconMoodHappy, IconTypography, IconUser, IconUserPlus
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },
  {
    id: uniqueId(),
    title: 'Order Analyze',
    icon: IconMenuOrder,
    href: '/order-analyze',
  },
  {
    id: uniqueId(),
    title: 'User Analyze',
    icon: IconUser,
    href: '/user-analyze',
  },
  {
    id: uniqueId(),
    title: 'Rates Control',
    icon: IconEyeDollar,
    href: '/rates',
  },
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },

  {
    navlabel: true,
    subheader: 'Utilities',
  },
  {
    id: uniqueId(),
    title: 'Typography',
    icon: IconTypography,
    href: '/ui/typography',
  },
  {
    id: uniqueId(),
    title: 'Shadow',
    icon: IconCopy,
    href: '/ui/shadow',
  },
  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: IconLogin,
    href: '/auth/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: IconUserPlus,
    href: '/auth/register',
  },
  {
    navlabel: true,
    subheader: 'Extra',
  },
  {
    id: uniqueId(),
    title: 'Icons',
    icon: IconMoodHappy,
    href: '/icons',
  },
  {
    id: uniqueId(),
    title: 'Sample Page',
    icon: IconAperture,
    href: '/sample-page',
  },
  {
    id: uniqueId(),
    title: 'wp',
    icon: IconEyeDollar,
    href: 'https://www.pullsms.com.tr/',
  },
];

export default Menuitems;
