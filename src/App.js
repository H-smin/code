import React from 'react'
import './App.css';
import Header from './conponent/header'
import UserInfo from './conponent/userInfo'
import DynamicArea from './conponent/dynamicArea'

import img1 from './img/lesson.jpg'
import img2 from './img/lesson2.png'
import img3 from './img/lesson3.jpg'

function App() {
  const data = [
    {
      url: img2,
      tag: '日语',
      desc: '字体设计修炼设计修炼设计大神之路字体设计修炼设计修炼设计大神之路'
    },
    {
      url: img1,
      tag: '日语',
      desc: '字体设计修炼设计修炼设计大神之路字体设计修炼设计修炼设计大神之路'
    },
    {
      url: img3,
      tag: '英语',
      desc: '字体设计修炼设计修炼设计大神之路字体设计修炼设计修炼设计大神之路'
    }
  ]
  
  return (
    <div className='App'>
      <Header />
      <div className='main-content'>
        <UserInfo data={data} />
        <DynamicArea />
      </div>
    </div>
  )
}

export default App;
