import React from 'react'
import { connect } from 'dva';
import a from '../assets/流泪猫猫头.jpg'
import styles from './IndexPage.css'
import axios from '../utils/axios'

class ProductPage extends React.Component {

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
    axios.get('/product/findAllProduct')
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
        <div className={styles.photoWall}>
          <img className={styles.photo} src={a}/>
        </div>
        {/* 栏目 */}
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
      </div>
    );
  }
}

export default connect()(ProductPage);