import React,{Component} from 'react';
import PostItem4 from './PostItem4';

class PostList4 extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: []
        };
        this.timer = null; //定时器
        this.handleVote = this.handleVote.bind(this); //ES 6 class中， 必须手动绑定方法this的指向
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                posts:[
                        {id:1, title:'大家一起讨论React', author:'张三', date:'2010-09-03 12:33', vote:0},
                        {id:2, title:'前段框架，你喜欢哪里一个', author:'李四', date:'2010-09-03 13:00', vote:0},
                        {id:3, title:'Web App 的时代已经到来', author:'王五', date:'2010-09-03 14:00', vote:0}
    
                ]
            });
        }, 1000)
    }

    componentWillUnmount() {
        if(this.timer) {
            clearTimeout(this.timer); //清除定时器
        }
    }

    handleVote(id) {
        //根据帖子ID进行过滤，找到待修改vote属性的帖子，返回新的posts对象
        console.log('id',id)
        const posts = this.state.posts.map(item => {
            const newItem =item.id === id ? {...item, vote: ++item.vote} : item;
            return newItem;
        });

        // 使用新的POSTS对象设置state
        this.setState({
            posts
        });
    }

    //保存帖子

    handleSave(post) {
        // 根据post的ID， 过滤出当前要更改新的post
        const posts = this.state.posts.map(item => {
            const newItem = item.id === post.id ? post : item;
            return newItem;
        })

        this.setState({
            posts
        })
    }

    render() {
        return (
            <div className="container">
                <h2>帖子列表</h2>

                <ul>
                    {this.state.posts.map((item,idx) => 
                        <PostItem4 key={idx} post = {item} onVote = {this.handleVote} onSave = {this.handleSave} />
                    )}
                </ul>
            </div>
        );
    }
}

export default PostList4;