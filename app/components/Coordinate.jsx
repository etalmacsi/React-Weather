let React = require('react');
let CoordForm=require('CoordForm');
let CoordMessage=require('CoordMessage');
let openCoord=require('openCoord');


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
        });

        openCoord.getCoord(location).then(function (result) {

            that.setState({
                location: location,
                lon: result.lon,
                lat: result.lat,
                isLoading: false,
            });
        },function (errorMessage) {
            alert(errorMessage);
            that.setState({
               isLoading:false,
            });
        });


    },

    render: function () {

        let {location , lon , lat,isLoading}=this.state;

        function renderMessage() {
            if(isLoading){
                return <p>Fetching location..</p>
            }else if(lon && lat){
                return  <CoordMessage location={location} lon={lon} lat={lat}/>;

            }
        }

        return(
         <div>
            <h1 className="text-center">Get Coordinates!</h1>
             <CoordForm onSearch={this.handleSearch}/>
             {renderMessage()}
        </div>
        );
    }
});

module.exports=Coordinate;