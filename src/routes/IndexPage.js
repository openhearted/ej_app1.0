import React from 'react';
import { connect } from 'dva';
import t from '../assets/首页.png'
import styles from './IndexPage.css'
import axios from '../utils/axios'

class IndexPage extends React.Component {
    state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
    }
    componentDidMount() {
      // simulate img loading
      setTimeout(() => {
        this.setState({
          data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        });
      }, 100);
    }
  
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
    axios.get('/category/findAllCategory')
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
        {/* 图片广告 */}
        <div className={styles.photoWall}>
          <img className={styles.photo} src={t}/>
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
// connect函数可以在this.props中注入一些对象和方法增强组件功能
export default connect()(IndexPage);