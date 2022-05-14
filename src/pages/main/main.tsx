import React, { useState } from 'react';
import './main.scss';
import Template from '../../component/template/template';

function MainPage() {
  // Modal-button Click시, State 변경
  const [ModalShow, setModalShow] = useState(true);
  const toggleModalShow = () => setModalShow(!ModalShow);

  return (
    <div id='main-wrap'>
      <Template>
        <body>
          <section className='pageExplain'>
            1. 메인 페이지<br/>
            - 게시판 글 목록
          </section>
        </body>
      </Template>
    </div>
  );
}

export default MainPage;
