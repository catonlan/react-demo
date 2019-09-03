import React, {Component} from 'react';

class PostList extends Component {
    render() {
        return (
            <div>
                发表帖子：
                <ul>
                    <li>大家一起讨论 React 吧！</li>
                    <li>前段框架，最喜欢哪个</li>
                    <li>Web App 的时代已经到来</li>
                </ul>
            </div>
        );
    }
}
export default PostList;