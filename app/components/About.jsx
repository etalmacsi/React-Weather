let React = require('react');

let About = React.createClass({
    render: function () {
        return(
            <div>
                 <h1 className="text-center">About!</h1>
                <p>
                    This is a weather application build on React. I have built this for The Complete React Webb App Developer Course.
                </p>
                <p>
                    Here are some tools I used:
                </p>
                <ul>
                    <li>
                        <a href="https://facebook.githu.io/react">React</a> - This was the JavaScrpit framework used.
                    </li>
                    <li>
                        <a href="http://openweathermap.irg">Open Weather Map</a> - I used Open weather Map to search for weather data by city name.
                    </li>
                    <li>
                        <a href="https://dashboard.heroku.com/">Heroku</a> - Used for deploying my webapplication.
                    </li>
                    <li>
                        <a href="https://github.com/etalmacsi">GitHub</a> - My GitHub profile.
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports=About;