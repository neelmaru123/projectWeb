import React from 'react';
import ReactDOM from 'react-dom/client';
import Info from './Info';

import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import {LayoutMain} from './Layout';
import Newproject from './Newproject';
import Profile from './Profile';
import Projectbyid from './Projectbyid';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutMain />}>
            <Route index element={<Info />} />
            <Route path='/project' element={<Newproject />} />
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='/Project/:id' element={<Projectbyid />} />
          </Route>
        </Routes>
   </BrowserRouter>
  </>
);

