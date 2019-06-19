import React from 'react'
import { connect } from 'dva';
import styles from './IndexPage.css'
import axios from '../utils/axios'
import { Tabs, WhiteSpace, Badge, NavBar, Icon} from 'antd-mobile';

class OrderPage extends React.Component {

  toIndex(){
    this.props.history.push("/index");
  }

  render(){

    const tabs = [
      { title: <Badge text={'20'}>全部订单</Badge> },
      { title: <Badge text={'3'}>待付款</Badge> },
      { title: <Badge>待服务</Badge> },
      { title: <Badge dot>待评价</Badge> },
    ];
    
    const TabExample = () => (
      <div>
        <Tabs tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <div style={{
            background: 'url(src/assets/svg/说明.svg) center 145px /  40px 40px no-repeat' ,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '400px' }}>您还没有订单
          </div>
        </Tabs>
        <WhiteSpace />
    <WhiteSpace />
    </div>
  )
    return (
      <div>
          <div>
            <NavBar
              leftContent="返回"
              mode="dark"
              icon={<Icon type="left" />}
              onLeftClick={() => console.log('onLeftClick')}
              rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
              ]}
            >查看订单</NavBar>
          </div>
        <TabExample />
      </div>
    )
  }
}

export default connect()(OrderPage);