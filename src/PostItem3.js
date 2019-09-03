import React,{Component} from 'react';

function PostItem3(props) {
    const handleClick = () => {
        if(typeof props.onVote !=="undefined"){
            props.onVote(props.post.id);
        }
    };

    const post = props.post

    return (
        <li>
            <div>
                {post.title}
            </div>

             <div>
                 创建人：<span> {post.author} </span>
            </div>

            <div>
                创建时间：<span> {post.date} </span>
            </div>

            <div>
                <button onClick={handleClick}>点赞</button>
                &nbsp;
                <span> {post.vote} </span>
            </div>
        </li>
    );
}

export default PostItem3;