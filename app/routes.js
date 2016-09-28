import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import ReactRouterLoader from 'react-router-loader';
import fetch from 'isomorphic-fetch';

// 无状态（stateless）组件，一个简单的容器，react-router 会根据 route
// 规则匹配到的组件作为 `props.children` 传入
var Container = function Container(props) {
  return React.createElement(
    "div",
    null,
    props.children
  );
};
var List = React.createClass({
    getInitialState: function () {
    return {
      opacity: 1111
    };
  },
    componentDidMount: function(){
        fetch('http://www.baidu.com').then(function(response) {
          return response.json();
        }).then(function(data) {
          console.log(data);
        }).catch(function(e) {
          console.log("Oops, error");
        });
    },

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        null,
        this.state.opacity
      )
    );
  }
});
var Detail = React.createClass({
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        null,
        "Detail"
      )
    );
  }
});

// route 规则：
// - `/list` 显示 `List` 组件
// - `/item/:id` 显示 `Item` 组件
var routes = React.createElement(
  Route,
  { path: "/", component: Container },
  React.createElement(Route, { path: "list", component: List }),
  React.createElement(Route, { path: "detail", component: Detail })
);

export default routes;
