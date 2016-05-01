const React = require('react');
const {Link} = require('react-router');
const classnames = require('classnames');

const styles = require('./nav.css');

const Filter = (props) =>
  <div className={styles['GlobalNav-filter']}>
    <label htmlFor="item-filter">Filter</label>
    <input type="text" id="item-filter" onChange={props.onChange}/>
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
    this.state = {
      isHidden: false,
      items: this.props.items
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  toggleVisibility() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  onFilterChange(evt) {
    this.setState({
      items: this.props.items.filter(item =>
        item.label.match(new RegExp(`.*${evt.target.value}.*`, 'ig'))
      )
    });
  }

  render() {
    return(
      <nav className={
        classnames(styles.GlobalNav, {
          [styles['is-hidden']]: this.state.isHidden
        })
      }>
        <button className={styles['GlobalNav-toggle']} onClick={this.toggleVisibility}>Toggle</button>
        <Filter onChange={this.onFilterChange}/>
        <GlobalNavList items={this.state.items}/>
      </nav>
    );
  }
}

Nav.propTypes = {
  items: React.PropTypes.array
};

module.exports = Nav;
