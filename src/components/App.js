const React = require('react');

const FormGroup = require('./form-group');
const Button = require('./button');

module.exports = React.createClass({
  handleClick(e) {
    console.log(e);
  },

  render() {
    return (
      <FormGroup>
        <Button>Click me</Button>
      </FormGroup>
    );
  }
});
