let React = require('react');
let WeatherMessage=require('WeatherMessage');
let WeatherForm=require('WeatherForm');
let openWeatherMap=require('openWeatherMap');

let Weather = React.createClass({
    getInitialState: function(){
        return{
         isLoading: false
        }
    },

    handleSearch:function(location){
        let that=this;

        this.setState({
           isLoading:true
        });

       openWeatherMap.getTemp(location).then(function (temp) {
           that.setState({
               location: location,
               temp: temp,
               isLoading: false,
           });
       },function (errorMessage) {
        alert(errorMessage)
           that.setState({
              isLoading:false,
           });
       });


    },

    render: function () {

        let {isLoading, temp, location}=this.state;
        
        function renderMessage() {
            if(isLoading){
                return <h3 className="text-center">Fetching weather...</h3>;
            }else if(temp && location){
               return <WeatherMessage location={location} temp={temp}/>;
            }

        }

        return(

            <div>
                 <h1 className="text-center">Get weather!</h1>
                 <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports=Weather;