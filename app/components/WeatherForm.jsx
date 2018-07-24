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
                        <input type="text" placeholder="Enter city name" ref="location">
                        </input>
                        <button>Get weather!</button>
                    </label>
                </form>
            </div>
        );
    }
});

module.exports=WeatherForm;