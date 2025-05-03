import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))
const UserAnalyze = Loadable(lazy(() => import('../views/userAnalyze/userAnalyze')))
const OrderAnalyze = Loadable(lazy(() => import('../views/userAnalyze/index')))
const Rates = Loadable(lazy(() => import('../views/rates')))
const Backlinks = Loadable(lazy(() => import('../views/backlinks')))
const Orders = Loadable(lazy(() => import('../views/orders/ordersPage')))
const ServiceSpeed = Loadable(lazy(() => import('../views/orders/serviceSpeed')))
const SkypeBot = Loadable(lazy(() => import('../views/skypeBot')))
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')))
const Icons = Loadable(lazy(() => import('../views/icons/Icons')))
const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')))
const Shadow = Loadable(lazy(() => import('../views/utilities/Shadow')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },
      { path: '/order-analyze', exact: true, element: <OrderAnalyze /> },
      { path: '/user-analyze', exact: true, element: <UserAnalyze /> },
      { path: '/rates', exact: true, element: <Rates /> },
      { path: '/backlinks', exact: true, element: <Backlinks /> },
      { path: '/orders', exact: true, element: <Orders /> },
      { path: '/serviceSpeed', exact: true, element: <ServiceSpeed /> },
      { path: '/skypebot', exact: true, element: <SkypeBot /> },
      { path: '/sample-page', exact: true, element: <SamplePage /> },
      { path: '/icons', exact: true, element: <Icons /> },
      { path: '/ui/typography', exact: true, element: <TypographyPage /> },
      { path: '/ui/shadow', exact: true, element: <Shadow /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
