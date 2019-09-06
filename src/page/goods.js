import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../action/goods'

const GOODS = [
  {
    name: 'iphone 7',
    price: '6888',
    amount: 37
  },
  {
    name: 'ipad',
    price: '3455',
    amount: 82
  },
  {
    name: 'MacBook Pro',
    price: '11888',
    amount: 15
  }
];


class Goods extends React.Component{
    componentDidMount() {
        let dispatch = this.props.dispatch;
        dispatch(actions.getGoods(GOODS));
    }
    render() {
        return (
            <ul className="goods">
                {
                    this.props.goods.map((ele, idx) => (
                        <li key={idx} style={{marginBottom: 20, listStyle: 'none'}}>
                            <span>{ele.name}</span> |&nbsp;
                            <span>¥ {ele.price}</span> |&nbsp;
                            <span>剩余 {ele.amount} 件</span>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    goods: state.goods.data
})

export default connect(mapStateToProps)(Goods);