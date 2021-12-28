import React, { Component } from 'react'

export default class news extends Component {
    constructor() {
        super();
        this.state = {
            feed: [
                { date: 'Gaurav', feed: 'This is the nice COntent' },
                { date: 'Shivam', feed: 'Hello' }
            ]
        };
    }
    
    render() {
        return (
            <div>
                <h3>
                    Latest feed
                </h3>
                <ol>
                    {
                        this.state.feed.map((item) => {
                            return <li key={item.date}><b>{item.date} posted:</b><br />{item.feed}</li>
                        })
                    }
                </ol>
            </div>
        )
    }
}
