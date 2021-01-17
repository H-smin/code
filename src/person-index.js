import React,{Component} from 'react'
import img1 from './img/lesson.jpg'
import img2 from './img/lesson2.png'
import img3 from './img/lesson3.jpg'
import './App.css';

export default class Person extends Component{
    render(){
        const data=[
            {
              url:img1,
              tag:'日语',
              desc:'字体设计修炼设计修炼设计大神之路…'
            },
            {
              url:img2,
              tag:'日语',
              desc:'字体设计修炼设计修炼设计大神之路…'
            },
            {
              url:img3,
              tag:'日语',
              desc:'字体设计修炼设计修炼设计大神之路…'
            }
          ]
        return(
            <div>
                 <div className='studying-lesson'>
                    <p className='title'>在学课程</p>
                {
                    data.map((item,index) =>{
                        return(
                           
                            <div className='content'>
                                <p className='lessons'>
                                <p className='lesson-img'><img alt='img' src={item.url}/></p>
                                <p className='desc'><span className='tag'>{item.tag}</span>{item.desc}</p>
                                </p>
                                </div>
                               
                        )
                    })
                } 
                </div>
            </div>
        )
    }
}