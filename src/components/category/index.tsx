import { Component, PropsWithChildren } from 'react'
import { View, Image, Text } from '@tarojs/components'
import Tips from '../tips'
import './index.less'

const mock = [
  {
    title: "猫咪",
    icon: "http://p0.meituan.net/wmadfe/ad66f6090d971b404f00f6142c21882813305.png",
  },
  {
    title: "狗狗",
    icon: "http://p0.meituan.net/wmadfe/ca8c0e64b94609f6b7f5eacf79c99bf414203.png",
    className: ""
  }
]

interface IState {
  category: number;
}

export default class Index extends Component<PropsWithChildren> {
  state: Readonly<IState> = {
    category: 1
  }

  render () {
    const { category } = this.state
    return (
      <View className='category_c'>
          <Tips text='宠物筛选' />
          <View className='category_list_box'>
              {
                 mock.map((v, i: number)=>(
                    <View className={`category_list`}>
                      <View 
                        className='category_list_image_box'
                        style={{
                          background: category === i ? "#A637F4" : "#F4F2F7"
                        }} 
                      >
                        <Image 
                          className='category_list_image' 
                          src={v.icon} 
                        />
                      </View>
                      { v.title }
                    </View>
                 ))
              }
          </View>
      </View>
    )
  }
}
