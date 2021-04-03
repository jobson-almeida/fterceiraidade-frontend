import React from 'react';
import { Navigate } from 'react-router-dom';

import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';

import LoginView from 'src/views/auth/LoginView';
import ResetView from 'src/views/auth/ResetView';
import RecoverView from 'src/views/auth/RecoverView';
import RegisterView from 'src/views/auth/RegisterView';

import HomeView from 'src/views/home/HomeView';
import NotFoundView from 'src/views/errors/NotFoundView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'reset', element: <ResetView /> },
      { path: 'recover', element: <RecoverView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/login" /> },
      { path: 'home', element: <HomeView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
