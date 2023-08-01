import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import GlobalStyle from './styled/GlobalStyle';
import NewsLayout from './pages/news/NewsLayout';
import News from './pages/news/News';
import NewsDetail from './pages/news/NewsDetail';
import GameSchedule from './pages/gameSchedule/GameSchedule';
import Logout from './pages/login/Logout';
import Log from './pages/login/Log';
import JoinForm from './pages/login/JoinForm';
import GoodsLayout from "./pages/store/GoodsLayout";

import NoticeLayout from './pages/notice/NoticeLayout';
import Notice from './pages/notice/Notice';
import NoticeDetail from './pages/notice/NoticeDetail';
import NoticeAdd from './pages/notice/NoticeAdd';
import NoticeEdit from './pages/notice/NoticeEdit';

import PlayGround from "./pages/squad/PlayGround";

import PlayerInfo from './pages/playerInfo/PlayerInfo';
import AddPlayerData from './pages/addPlayerData/AddPlayerData';
import Cart from './pages/cart/Cart';
import SquadLayout from "./pages/squad/SquadLayout";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />

            <Route index path='/PlayerInfo' element={<PlayerInfo />} />
            <Route path='/addPlayer' element={<AddPlayerData />} />

            <Route index path='/squad' element={<SquadLayout />} />
            {/* <Route path='/squad' element={<PlayGround />} /> */}

            <Route path='/game_schedule' element={<GameSchedule />} />

            <Route path='/notice' element={<NoticeLayout />}>
              <Route index element={<Notice />} />
              <Route path=':noticeID' element={<NoticeDetail />} />
              <Route path='writing' element={<NoticeAdd />} />
              <Route path='edit' element={<NoticeEdit />} />
            </Route>

            <Route path='/news' element={<NewsLayout />}>
              <Route index element={<News />} />
              <Route path=':newsID' element={<NewsDetail />} />
            </Route>

            <Route path='/store' element={<GoodsLayout />} />
            <Route path='/cart' element={<Cart />} />

            <Route path='/login' element={<Log />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/join' element={<JoinForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;