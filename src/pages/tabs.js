const React = require('react');

const styles = require('../modules/app.css');

const Exhibit = require('../styleguide/exhibit');
const Nav = require('../components/nav');

module.exports = () =>
  <div className={styles.Content}>
    <h1>Tabs</h1>
    <Exhibit title="Navigation exhibit">
      <Nav/>
      {`
        <nav className={styles.Nav}>
          <ul className={styles.NavList}>
            <li><Link to="/">Index</Link></li>
            <li><Link to="/item">Item</Link></li>
          </ul>
        </nav>
      `}
    </Exhibit>
  </div>
;
