let React = require('react');
let {Link}=require('react-router')

let Examples = React.createClass({
    render: function () {
        return(
            <div>
            <h1 className="text-center">Examples!</h1>
                <p>Here is a few examples to try out:</p>
                <ol>
                    <li>
                        <Link to="/?location=Kecskemét">Kecskemét</Link>
                    </li>
                    <li>
                        <Link to="/?location=Szeged">Szeged</Link>
                    </li>
                    <li>
                        <Link to="/?location=Budapest">Budapest</Link>
                    </li>
                </ol>
             </div>
        );
    }
});

module.exports=Examples;