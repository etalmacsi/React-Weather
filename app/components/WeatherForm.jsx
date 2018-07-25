let React =require('react');

let WeatherForm = React.createClass({

    OnFormSubmit:function(e){
        e.preventDefault();

        let location = this.refs.location.value;

        if(location.length>0){
            this.refs.location.value='';
            this.props.onSearch(location);
        }

    },


    render:function () {
        return(
            <div>
                <form onSubmit={this.OnFormSubmit}>
                    <label>
                        <input type="search" placeholder="Enter city name" ref="location">
                        </input>
                        <button className="button expanded hollow button">Get weather!</button>
                    </label>
                </form>
            </div>
        );
    }
});

module.exports=WeatherForm;