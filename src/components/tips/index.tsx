import { View } from '@tarojs/components'
import './index.less'

interface IProps {
    text: string
}

const Index =(props: IProps)=>{
  const { text } = props || {}
  return (
      <View className='bar-tips'>
        { text }
      </View>
  )
}
export default Index
