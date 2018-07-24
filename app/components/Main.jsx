let React = require('react');
let Nav = require('Nav');

let Main =React.createClass({
   render: function () {
       return(
           <div>
                <h1>Main component</h1>
                <Nav/>
               {this.props.children}
           </div>
       );
   }
});

module.exports = Main;