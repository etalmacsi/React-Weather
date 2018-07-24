let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} =require('react-router');
let Main =require('Main');
let Weather= require('Weather');
let About =require('About');
let Examples= require('Examples');
let Coordinate =require('Coordinate');

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(

        <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
            <Route path="coordinate" component={Coordinate}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
  document.getElementById('app')
);
