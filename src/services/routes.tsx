import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from '../layouts/appLayout'
import Home from 'pages/home'
import Favorite from 'pages/favorite'


const RoutesIntance: FC<any> = () => (
  <>
    <Routes>
      {/* These subset components will be used inside App layout  */}
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
      </Route>
    </Routes>
  </>
)

export default RoutesIntance
