let React = require('react');
let CoordForm=require('CoordForm');
let CoordMessage=require('CoordMessage');
let openCoord=require('openCoord');


let Coordinate = React.createClass({
    getInitialState:function(){
        return{
            location:'Szeged',
        }
    },

    handleSearch:function(location){
        let that=this;

        openCoord.getCoord(location).then(function (result) {

            that.setState({
                location: location,
                lon: result.lon,
                lat: result.lat,
            });
        },function (errorMessage) {
            alert(errorMessage);
        });


    },

    render: function () {

        let {location , lon , lat}=this.state;

        function renderMessage() {
          return  <CoordMessage location={location} lon={lon} lat={lat}/>;
        }

        return(
         <div>
            <h2>Get Coordinates!</h2>
             <CoordForm onSearch={this.handleSearch}/>
             {renderMessage()}
        </div>
        );
    }
});

module.exports=Coordinate;