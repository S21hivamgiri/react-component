import React, { Component } from 'react'
import News from './news';
import Navbar from './navbar';
import Header from './header';
import Feed from './feed';
import Content from './content';
import Footer from './footer';
import ReactDOM from 'react-dom';
const hiv = document.createElement('div');
ReactDOM.render(<News />, hiv);

export default class Article extends Component {
    render() {
        return (
            <article className="container">
                <Header></Header>
                <Navbar></Navbar>
                <div className="row">
                    <div className="col-12 col-md-9 col-sm-9 col-xl-9 col-lg-9">
                        <Content></Content>
                    </div>
                    <div className="col-12 col-md-3 col-sm-3 col-xl-3 col-lg-3">
                        <div className="news alert alert-warning" id="news">
                            <News></News>
                        </div>
                        <div className="alert alert-success" id="aside">
                            <Feed></Feed>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </article>
        )
    }
}
