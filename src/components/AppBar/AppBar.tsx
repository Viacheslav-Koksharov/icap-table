import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { NavigationStyled } from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <NavigationStyled>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </NavigationStyled>
  );
};

export default AppBar;
