import React from 'react'


class Goods extends React.Component{
    render() {
        return (
            <ul className="goods">
                {
                    this.props.list.map((ele, idx) => (
                        <li key={idx} style={{marginBottom: 20, listStyle: 'none'}}>
                            <span>{ele.name}</span> &nbsp;
                            <span>¥ {ele.price}</span>&nbsp;
                            <span>剩余 {ele.amount} 件</span>
                        </li>
                    ))
                }
            </ul>
        )
    }
}


export default Goods;