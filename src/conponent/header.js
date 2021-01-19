import React from 'react'
import '../App.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        {
          <div className='study-time'>
            <div className='days'>学习<span className='number'>32</span>天</div>
            <div className='hours'>时长<span className='number'>64</span>小时</div>
          </div>
        }
      </div>
    )
  }

}