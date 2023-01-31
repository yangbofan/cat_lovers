import { Component, PropsWithChildren } from 'react'
import { ScrollView } from '@tarojs/components'
import StatusBarHeight from '../../components/statusBarHeight'
import Headers from '../../components/header'
import Cards from '../../components/card'
import Calendar from '../../components/calendar'
import Tips from '../../components/tips'
import Category from '../../components/category'
import './index.less'

export default class Index extends Component<PropsWithChildren> {
  componentDidMount () { }
  componentDidShow () { }
  componentDidHide () { }

  render () {
    return (
      <ScrollView
        scrollY
        scrollWithAnimation
        className='index-page'
      >
        <StatusBarHeight />
        <Headers />
        <Calendar />
        <Category />
        <Tips text='推荐列表'/>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </ScrollView>
    )
  }
}
