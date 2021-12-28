import React, { Component } from 'react'

export default class news extends Component {
    constructor() {
        super();
        this.state = {
            comments: [
                { date: '13/11/1998', newsitem: 'shiv' }
            ]
        };
    }

    render() {
        return (
            <div>
                <h3>
                    NEWS
                </h3>
                <marquee className="border-bottom border-top border-dark" direction="left" loop="" >
                    Find Latest News Here
                </marquee>
                <ul>
                    {
                        this.state.comments.map((item) => {
                            return <li key={item.date}><b>{item.date}:</b><br />{item.newsitem} <span className="badge badge-secondary">New</span></li>
                        })
                    }
                </ul>

            </div>
        )
    }
}
