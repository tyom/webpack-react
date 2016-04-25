const React = require('react');

const styles = require('./example.css');

const Exhibit = require('../../styleguide/exhibit');

module.exports = React.createClass({
  getDefaultProps() {
    return {
      title: 'Example',
      code:
`
<div className={styles.example}>
  <h2>Example component</h2>
  <p><button onClick={this.handleClick}>Click me</button></p>
</div>
`
    }
  },

  handleClick(evt) {
    console.log(evt);
  },

  render() {
    const {code, title} = this.props;

    return (
    <Exhibit code={code} title={title}>
      <div className={styles.example}>
        <h3>Example component</h3>
        <p><button onClick={this.handleClick}>Click me</button></p>
      </div>
    </Exhibit>
    );
  }
});
