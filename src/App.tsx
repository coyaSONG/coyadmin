import { lazy, Suspense } from 'react';
import { Outlet, RouterProvider, createHashRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Navbar from './components/navbar/Navbar';
import './styles/global.scss';

const Home = lazy(() => import('./pages/home/Home'));
const Login = lazy(() => import('./pages/login/Login'));
const Products = lazy(() => import('./pages/products/Products'));
const Users = lazy(() => import('./pages/users/Users'));
const Product = lazy(() => import('./components/product/Product'));
const User = lazy(() => import('./components/user/User'));

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createHashRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'users',
          element: <Users />,
        },
        {
          path: 'products',
          element: <Products />,
        },
        {
          path: '/users/:id',
          element: <User />,
        },
        {
          path: '/products/:id',
          element: <Product />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);
  return (
    <Suspense fallback={<div className="routeLoading" role="status">Loading…</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
