import { createBrowserRouter } from 'react-router'
import { MainLayout } from './layouts/MainLayout'
import { HomeScreen } from './screens/HomeScreen'
import { AboutUsScreen } from './screens/AboutUsScreen'
import { LoginScreen } from './screens/LoginScreen'

export const router = createBrowserRouter([
    { 
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/home',
                element: <HomeScreen />,
            },
            {
                path: '/aboutUs',
                element: <AboutUsScreen />
            },
            {
                path: '/login',
                element: <LoginScreen />
            }
        ]
    }
])