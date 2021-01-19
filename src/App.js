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
      desc: '字体设计修炼设计修炼设计大神之路字体设计修炼设计修炼设计大神之路'
    },
    {
      url: img1,
      tag: '日语',
      desc: '字体设计修炼设计修炼设计大神之路字体设计修炼设计修炼设计大神之路'
    },
    {
      url: img3,
      tag: '日语',
      desc: '字体设计修炼设计修炼设计大神之路字体设计修炼设计修炼设计大神之路'
    }
  ]
  return (
    <div className="App">
      {
        <React.Fragment>
          <div className='header'>
            <div className='study-time'>
              <div className='days'>学习<span className='number'>32</span>天</div>
              <div className='hours'>时长<span className='number'>64</span>小时</div>
            </div>
          </div>
          <div className='main-content'>
            <div className='user-info'>
            <div className='header-image'>
              <span className='image'></span>
            </div>
              <div className='icons'>
                <span className='message'></span>
                <div className='followed-box'>
                  <div className='un-followed'>关注</div>
                  {/* <p className='followed'>已关注</p> */}
                </div>
              </div>
              <div className='user-intro'>
                <div className='nickname text-eli'>可爱的小男孩</div>
                <div className='username text-eli'>用户名：快乐的小猪</div>
                <div className='signs text-eli'>学习使我快乐，我将永远拥有快乐！</div>
                <div className='part-line'></div>
                <div className='fans-box'>
                  <div className='followed-num'>
                    <div className='num'>1.2万</div>
                    <div className='status'>关注</div>
                  </div>
                  <div className='fans-num single'>
                    <div className='num'>2999</div>
                    <div className='status'>粉丝</div>
                  </div>
                  <div className='visite-num'>
                    <div className='visite-img-box'>
                      <div className='visite-img'></div>
                      <div className='visite-img overlap'></div>
                      <div className='visite-img overlap'></div>
                    </div>
                    <div className='status'>来访9999人</div>
                  </div>
                </div>
                <div className='medal'>
                  <span className='text'>获得5张奖状</span>
                </div>
              </div>
              <div className='studying-lesson'>
                <div className='title'>在学课程</div>
                <div className='content-box'>
                  <div className='content'>
                    {
                      data.map((item, index) => {
                        return (
                          <div className='lessons' key={index}>
                            <div className='lesson-img'><img alt='img' src={item.url} width='140px' height='84px' /></div>
                            <div className='desc text-eli'><span className='tag'>{item.tag}</span>{item.desc}</div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className='dynamic-area'>
              <div className='title'>动态</div>
              <div className='dynamic-content'>
                <div>
                  <div className='user-img'></div>
                  <div className='operate'>回复了帖子</div>
                </div>
                <div className='post-content'>5月16日作业：不知道为什么，今天真的有人跟我道歉来着，天助我完成作业也，上图看下我们的演练场景。</div>
              </div>
            </div>
          </div>
        </React.Fragment>
      }
    </div>
  );
}

export default App;
