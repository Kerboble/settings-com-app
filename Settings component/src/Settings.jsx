import { useState } from 'react'
import './Settings.css'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Layout from '../components/Layout'
import General from '../components/General'
import Account from '../components/Account'
import Notifications from '../components/Notifications'
import Privacy from '../components/Privacy'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<General />}/>
        <Route path="account" element={<Account />}/>
        <Route path="notifications" element={<Notifications />}/>
        <Route path="privacy" element={<Privacy />}/>
    </Route>
))

function Settings() {

    return (
     <RouterProvider router={router} />
    )
}

export default Settings
