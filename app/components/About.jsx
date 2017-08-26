var React = require ('react');

var About = () => {
  return (
    <div>
      <h3 className="text-center">About component</h3>
      <p>
      	This is an app to get Weather.
      	One of my first app built with react
      </p>
      <p>Here are some infor about me</p>
      <ul>
        <li> Nguyen Dang The</li>
        <li> Amarteur Dev</li>
      </ul>
    </div>
  );
}

module.exports = About;
