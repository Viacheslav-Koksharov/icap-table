import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { NavigationStyled, LinkStyled } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <NavigationStyled>
      <LinkStyled to='/'>Home</LinkStyled>
      {isLoggedIn && <LinkStyled to='/table'>Table</LinkStyled>}
    </NavigationStyled>
  );
};

export default Navigation;
