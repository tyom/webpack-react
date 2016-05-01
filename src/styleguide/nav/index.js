const React = require('react');
const {Link} = require('react-router');
const classnames = require('classnames');

const styles = require('./nav.css');

const Filter = () =>
  <div className={styles['GlobalNav-filter']}>
    <label htmlFor="item-filter">Filter</label>
    <input type="text" id="item-filter"/>
  </div>
;

const GlobalNavList = ({items}) =>
  <ul className={styles['GlobalNav-list']}>
    {items.map(item =>
      <li key={item.path}>
        <Link className={styles['GlobalNav-link']} to={item.path}>
          {item.label}
        </Link>
      </li>)}
  </ul>
;

export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isHidden: false};
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return(
      <nav className={classnames(styles.GlobalNav, {[styles['is-hidden']]: this.state.isHidden})}>
        <button className={styles['GlobalNav-toggle']} onClick={this.toggleVisibility}>Toggle</button>
        <Filter/>
        <GlobalNavList items={this.props.items}/>
      </nav>
    );
  }
}

Nav.propTypes = {
  items: React.PropTypes.array
};

module.exports = Nav;
