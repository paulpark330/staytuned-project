import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <NavLink to='/products'>

      <div className="logo">le parfum</div>
      </NavLink>
    </div>
  );
};

export default Header;