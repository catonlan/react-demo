import React,{Component} from 'react';

// class PostItem extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             vote: 0
//         };
//     }
//     // 处理点赞逻辑

//     handleClick() {
//         let vote = this.state.vote;
//         vote++;
//         this.setState({
//             vote: vote
//         });
//     }

//     render() {
//         const {title, author, date} = this.props;
//         return (
//             <li>
//                 <div>
//                     {title}
//                 </div>
//                 <div>
//                     创建人：<span>{author}</span>
//                 </div>
//                 <div>
//                     创建时间：<span>{date}</span>
//                 </div>
//                 <div>
//                     <button
//                         onClick={() => {
//                             this.handleClick();
//                         }}
//                     >
//                         点赞
//                     </button>
//                     &nbsp;
//                     <span>
//                         {this.state.vote}
//                     </span>
//                 </div>
//             </li>
//         );
//     }
// }
function PostItem2(props) {
    const handleClick = () => {
        if(typeof props.onVote !=="undefined"){
            props.onVote(props.post.id);
        }
    };

    return (
        <li>
            <div>
                {props.title}
            </div>

             <div>
                 创建人：<span> {props.author} </span>
            </div>

            <div>
                创建时间：<span> {props.date} </span>
            </div>

            <div>
                <button onClick={handleClick}>点赞</button>
                &nbsp;
                <span> {props.vote} </span>
            </div>
        </li>
    );
}

export default PostItem2;