let React = require('react');

let WeatherMessage = React.createClass({
   render: function () {
       return(
           <div>
               The temperature in {this.props.location}  is {this.props.temp}!
           </div>
       );
   }
});

module.exports= WeatherMessage;