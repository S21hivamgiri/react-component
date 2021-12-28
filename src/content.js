import React, { Component } from 'react'

export default class Article extends Component {
    constructor() {
        super();
        this.state = {
            title: ' React Js',
            author: 'Shivam Kumar Giri',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe quaerat quidem cumque culpa officiis. Quam voluptates et assumenda cupiditate, architecto voluptate, quos totam accusantium nesciunt mollitia animi, porro repellat hic nulla blanditiis aliquid sint aperiam tempora sit. Inventore dolorum corrupti, at voluptate dolor modi eveniet sequi rem explicabo quaerat molestiae pariatur nam consequatur ipsa animi id perspiciatis dignissimos veniam optio quisquam, corporis eligendi nemo repellendus iusto? Quos quod vitae fugit at rerum fugiat perferendis, earum quibusdam voluptates esse sit sint nobis officia ex iure, architecto rem quidem sequi in, suscipit ullam eaque voluptatum! Commodi, ipsum ab explicabo deleniti quam minima.`,
            comments: [
                { user: 'Lucky', description: 'Nice Website' }
            ],
            comm: ''
        }
    }

    handleRefs = () => {
        this.setState({
            comm: this.refs.comment.value
        });
    }

    commentPost = () => {
        this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }

    addComments = () => {
        let comment = {
            user: this.refs.user.value,
            description: this.refs.comment.value
        }
        this.setState({
            comments: [...this.state.comments, comment]
        })
        this.refs.user.value = '';
        this.refs.comment.value = '';
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">{this.state.title}</h1>
                    <p className="lead">  By : {this.state.author}</p>
                    <div>
                        <p>Description :{this.state.description}</p>
                    </div>
                    <div className="alert alert-secondary">
                        <input type="text" className="rounded border-secondary" ref="user" placeholder="user" />
                        <input type="text" className="rounded border-secondary" onChange={this.handleRefs} ref="comment" placeholder="comments" />
                        <button className="btn btn-outline-secondary my-2 my-sm-0" onClick={this.addComments}>Post</button>
                        <br /> Your are Posting:{'  ' + this.state.comm}
                    </div>
                </div>
                <Comments comments={this.state.comments} />
            </div>
        )
    }
}

function Comments(props) {
    return (
        <div className="alert alert-warning">
            <h5 className="display-6">Comments ({props.comments.length})</h5>
            <ul>
                {
                    props.comments.map((item) => {
                        return <li key={item.user}><b>{item.user} posted:</b><br />{item.description}<div className="border-top border-warning"></div></li>
                    })
                }
            </ul>
        </div>
    )
}