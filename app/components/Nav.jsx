let React = require('react');
let {Link,IndexLink}=require('react-router');

let Nav = React.createClass({
    render:function () {
        return(
            <div>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get weather</IndexLink>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Example</Link>
                <Link to="/coordinate" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Coordinates</Link>
            </div>
        );
    }
});

module.exports= Nav;