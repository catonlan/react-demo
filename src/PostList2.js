import React, {Component} from 'react';
import PostItem2 from "./PostItem2";

const data = [
    {title:'大家一起讨论React', author:'张三', date:'2010-09-03 12:33'},
    {title:'前段框架，你喜欢哪里一个', author:'李四', date:'2010-09-03 13:00'},
    {title:'Web App 的时代已经到来', author:'王五', date:'2010-09-03 14:00'}
    
]
class PostList2 extends Component {
    render() {
        return (
            <div>
                帖子列表：
                <ul>
                    {data.map((item, idx) =>
                    <PostItem2 title={item.title}
                    author={item.author}
                    date={item.date}
                    key={idx}
                    />
                    )}

                </ul>
            </div>
        );
    }
}

export default PostList2;