import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { useParams } from 'react-router-dom';

import Navbar from './navbar/navtop/navtop';
import Sale from './lists/sale'
import {SinglePage} from './lists/singlepPage'
import AudioTechnika from'./lists/audo-technik'
import HomeElectronik from './lists/home-electronics'
import Smartphones from './lists/smartphones'
import VideoTechnik from './lists/video-technik'
import Hompage from './lists/hompage'


import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
              <div className='main-body-layout'>
                <div className='filter-in-body'>
                  <h1>фильтр</h1>
                  <h1>фильтр</h1>
                  <h1>фильтр</h1>
                  <h1>фильтр</h1>
                  <h1>фильтр</h1>
                  <h1>фильтр</h1>
                  <h1>фильтр</h1>
                  <h1>фильтр</h1>
                  <h1>фильтр</h1>
                  <h1>фильтр</h1>
                  <h1>фильтр</h1>
                </div>
          <Routes>
                <Route path='/' element={<Hompage/>}/>
                <Route path='/sale' element={<Sale/>}/>
                <Route path='/sale/:singltpageItemId' element={<SinglePage/>}/>
                <Route path='/audio' element={<AudioTechnika/>}></Route>
                <Route path='/home-electronics' element={<HomeElectronik/>}></Route>
                <Route path='/smartphones' element={<Smartphones/>}></Route>
                <Route path='/video_technika' element={<VideoTechnik/>}></Route>
          </Routes>

              
              </div>
          
    </div>
  );
}

export default App;
