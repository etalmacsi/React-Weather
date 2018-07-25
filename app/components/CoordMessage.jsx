let React = require('react');

let CoordMessage= React.createClass({
   render:function () {
       return(
           <div>
               <h3 className="text-center">The Coordinates of {this.props.location}!</h3><br/>
               <p>Longitude: {this.props.lon}</p>
               <p>Latidude: {this.props.lat}</p>
           </div>
       );
   } 
});

module.exports=CoordMessage;