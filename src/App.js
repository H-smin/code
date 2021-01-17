import React from 'react'
import './App.css';
import img1 from './img/lesson.jpg'
import img2 from './img/lesson2.png'
import img3 from './img/lesson3.jpg'

function App() {
  const data = [
    {
      url: img2,
      tag: '日语',
      desc: '字体设计修炼设计修炼设计大神之路…'
    },
    {
      url: img1,
      tag: '日语',
      desc: '字体设计修炼设计修炼设计大神之路…'
    },
    {
      url: img3,
      tag: '日语',
      desc: '字体设计修炼设计修炼设计大神之路…'
    }
  ]
  return (
    <div className="App">
      {
        <React.Fragment>
          <div className='header'>
            <div className='study-time'>
              <p className='days'>学习<span className='number'>32</span>天</p>
              <p className='hours'>时长<span className='number'>64</span>小时</p>
            </div>
          </div>
          <div className='main-content'>
            <div className='header-image'>
              <span className='image'></span>
            </div>
            <div className='user-info'>
              <div className='icons'>
                <span className='message'></span>
                <span className='followed-box'>
                  <p className='un-followed'>关注</p>
                  <p className='followed'>已关注</p>
                </span>
              </div>
              <div className='user-intro'>
                <p className='nickname'>可爱的小男孩</p>
                <p className='username'>用户名：快乐的小猪</p>
                <p className='signs'>学习使我快乐，我将永远拥有快乐！</p>
                <p className='part-line'></p>
                <p className='fans-box'>
                  <div className='followed-num'>
                    <p className='num'>1.2万</p>
                    <p className='status'>关注</p>
                  </div>
                  <div className='fans-num single'>
                    <p className='num'>2999</p>
                    <p className='status'>粉丝</p>
                  </div>
                  <div className='visite-num'>
                    <div className='visite-img-box'>
                      <p className='visite-img'></p>
                      <p className='visite-img'></p>
                      <p className='visite-img'></p>
                    </div>
                    <p className='status'>来访9999人</p>
                  </div>
                </p>
                <div className='medal'>
                  <span className='text'>获得5张奖状</span>
                </div>
              </div>
              <div className='studying-lesson'>
                <p className='title'>在学课程</p>
                <div className='content'>
                  {
                    data.map((item, index) => {
                      return (
                        <p className='lessons'>
                          <p className='lesson-img'><img alt='img' src={item.url} width='140px' height='84px' /></p>
                          <p className='desc'><span className='tag'>{item.tag}</span>{item.desc}</p>
                        </p>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className='dynamic-area'>
              <p>动态</p>
            </div>
          </div>
        </React.Fragment>
      }
    </div>
  );
}

export default App;
