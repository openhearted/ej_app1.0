import React from 'react'
import { connect } from 'dva';
import styles from './IndexPage.css'
import axios from '../utils/axios'

class OrderPage extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      categories:[]
    }
  }

  // 当前组件绑定到根组件上执行【生命周期钩子】
  componentDidMount(){
    this.loadCategory();
  }

  loadCategory(){
    axios.get('/order/findAllOrder')
    .then((result)=>{
      // 将数据设置到局部状态中
      this.setState({
        categories:result.data
      })
    });
  }

  toProduct(){
    this.props.history.push("/product");
  }  

  render(){
    return (
      <div>
        <ul className={styles["category_list"]}>
            {
              this.state.categories.map((item)=>{
                return (
                  <li 
                    onClick={this.toProduct.bind(this)} 
                    key={item.id} 
                    className={styles["category_list_item"]}>
                    <div></div>
                    <div>{item.name}</div>
                  </li>
                )
              })
            }
          </ul>
      </div>
    )
  }
}

export default connect()(OrderPage);