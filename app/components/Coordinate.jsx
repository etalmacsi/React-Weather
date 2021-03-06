let React = require('react');
let CoordForm=require('CoordForm');
let CoordMessage=require('CoordMessage');
let openCoord=require('openCoord');
let ErrorModal=require('ErrorModal');

let Coordinate = React.createClass({
    getInitialState:function(){
        return{
            isLoading: false,
        }
    },

    handleSearch:function(location){
        let that=this;

        this.setState({
            isLoading: true,
            errorMessage: undefined,
        });

        openCoord.getCoord(location).then(function (result) {

            that.setState({
                location: location,
                lon: result.lon,
                lat: result.lat,
                isLoading: false,
            });
        },function (e) {

            that.setState({
               isLoading:false,
               errorMessage:e.message,
            });
        });


    },

    render: function () {

        let {location , lon , lat,isLoading, errorMessage}=this.state;

        function renderMessage() {
            if(isLoading){
                return <p>Fetching location..</p>
            }else if(lon && lat){
                return  <CoordMessage location={location} lon={lon} lat={lat}/>;

            }
        }

        function renderError() {
            if(typeof errorMessage === 'string'){
                return (<ErrorModal message={errorMessage}/>)
            }

        }

        return(
         <div>
            <h1 className="text-center page-title">Get Coordinates!</h1>
             <CoordForm onSearch={this.handleSearch}/>
             {renderMessage()}
             {renderError()}
        </div>
        );
    }
});

module.exports=Coordinate;