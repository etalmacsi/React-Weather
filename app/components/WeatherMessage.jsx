let React = require('react');

let WeatherMessage = React.createClass({
   render: function () {
       return(
           <h3 className="text-center">
               The temperature in {this.props.location}  is {this.props.temp}!
           </h3>
       );
   }
});

module.exports= WeatherMessage;