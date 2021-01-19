import React from 'react'
import '../App.css'

export default class DynamicArea extends React.Component {
  render() {
    return (
      <div className='dynamic-area'>
            <div className='title dynamic-title'>动态</div>
            <div className='dynamic-content'>
              <div className='dynamic-user'>
                <div className='user-img'></div>
                <div className='operate'>回复了帖子</div>
              </div>
              <div className='dynamic-post-content'>5月16日作业：不知道为什么，今天真的有人跟我道歉来着，天助我完成作业也，上图看下我们的演练场景。</div>
              <div className='dynamic-video'>
                <div className='video'>
                  <div className='button'></div>
                  <div className='video-time'>8''</div>
                  <div className='progress-bar'></div>
                </div>
                <div className='video-num'>2条</div>
              </div>
              <div className='dynamic-img-box'>
                <div className='dynamic-img'></div>
                <div className='dynamic-img'></div>
                <div className='dynamic-img'></div>
              </div>
              <div className='dynamic-release'>
                <div className='release-time'>昨天</div>
                <div className='like-num'>点赞</div>
                <div className='share-btn'>分享</div>
              </div>
            </div>
      </div>
    )
  }
}