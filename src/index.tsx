import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Detail from './pages/detail';
import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
