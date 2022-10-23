import { useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import React from 'react';
import Layout from './layouts/Layout';

const Home = React.lazy(() => import('./pages/Index'));
const About = React.lazy(() => import('./pages/About'));
const NoMatch = React.lazy(() => import('./pages/NoMatch'));

export default function App() {
    const routes: RouteObject[] = [
        {
            path: '/',
            children: [
                { index: true, element: <Home /> },
                {
                    path: '/about',
                    element: <About />,
                },
                { path: '*', element: <NoMatch /> },
            ],
        },
    ];

    const element = useRoutes(routes);

    return (
        <Layout>
            <div>{element}</div>
        </Layout>
    );
}
