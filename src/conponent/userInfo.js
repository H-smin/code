import React from 'react'
import '../App.css'

export default class UserInfo extends React.Component {
  constructor(props) {
    super()
    this.state = {
      initStatus: true
    }
    this.changeFollowed = this.changeFollowed.bind(this)
  }
  changeFollowed() {
    this.setState(prevStatus => ({
      initStatus: !prevStatus.initStatus
    }))
    console.log(this.state.initStatus)
  }

  render() {
    const { data = [] } = this.props
    return (
      <div className='user-info'>
        <div className='header-image'>
          <span className='image'></span>
        </div>
        <div className='icons'>
          <span className='message'></span>
          <div className='followed-box' onClick={this.changeFollowed}>
            <div className={this.state.initStatus ? 'un-followed' : 'followed-change'}>关注</div> 
            <div className={this.state.initStatus ? 'followed-change' : 'followed'}>已关注</div>
            {/* <div className='un-followed'>关注</div>
            <div className='followed'>已关注</div> */}
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
    )
  }
}