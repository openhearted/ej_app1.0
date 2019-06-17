import React from 'react'
import {connect} from 'dva'
import {withRouter,routerRedux} from 'dva/router'
import {TabBar} from 'antd-mobile'
import styles from './App.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    }
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <p>{pageText}</p>        
      </div>
    );
  }

  handlerTabChange = (tab)=>{
    console.log(this.props);
    this.setState({selectedTab: tab});
    switch(tab){
      case "index":
        this.props.dispatch(routerRedux.push({
          pathname: '/',
          query: {id: 1}
        }))
        break;
      case "order":
          this.props.dispatch(routerRedux.push({
            pathname: '/order',
            query: {id: 1}
          }))
          break;
      case "help":
        this.props.dispatch(routerRedux.push({
          pathname: '/help',
          query: {id: 1}
        }))
        break;
      case "my":
        this.props.dispatch(routerRedux.push({
          pathname: '/my',
          query: {id: 1}
        }))
        break;
      default:
        break;
    }
  }

  render(){
    return (
      <div className={styles.app}>
        <div className={styles.content}>
          {/* 动态路由 */}
          {
            this.props.children
          }
        </div>
          {/* 导航 */}
        <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
            >
              <TabBar.Item
                title="首页"
                key="index"
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selected={this.state.selectedTab === 'index'}
                badge={1}
                onPress={this.handlerTabChange.bind(this,'index')}
                data-seed="logId"
              >
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                title="订单"
                key="order"
                badge={'new'}
                selected={this.state.selectedTab === 'order'}
                onPress={this.handlerTabChange.bind(this,'order')}
                data-seed="logId1"
              >
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                title="帮助"
                key="help"
                dot
                selected={this.state.selectedTab === 'help'}
                onPress={this.handlerTabChange.bind(this,'help')}
              >
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                title="我的"
                key="my"
                selected={this.state.selectedTab === 'my'}
                onPress={this.handlerTabChange.bind(this,'my')}
              >
              </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}
export default withRouter(connect()(App));