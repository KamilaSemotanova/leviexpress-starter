import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import { JourneyPicker } from '../JourneyPicker';
import { Reservation } from '../Reservation';

export const App = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
