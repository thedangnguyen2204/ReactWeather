var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) { // e -> event
    e.preventDefault();

    var location = this.refs.location.value; // this var links to ref in <input>

    if (location.length > 0) {
      this.refs.location.value = ''; // empty the search Box
      this.props.onSearch(location); // onSearch is a property of WeatherForm
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="location" placeholder="Search weather by city"/>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
