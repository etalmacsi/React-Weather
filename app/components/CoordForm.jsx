let React = require('react');

let CoordForm = React.createClass({

    OnFormSubmit: function(e){
        e.preventDefault();

        let location= this.refs.location.value;

        if (location.length>0){
            this.refs.location.value='';

            this.props.onSearch(location);
        }

    },

   render:function () {
       return(
           <form onSubmit={this.OnFormSubmit}>
               <label>
                   <input type="text" ref="location" placeholder="Enter the name of the city!"/>
                   <button>
                       Get Coordinates!
                   </button>
               </label>
           </form>
       );
   }
});

module.exports=CoordForm;