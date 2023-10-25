import { NavigationStyled, LinkStyled } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <NavigationStyled>
      <LinkStyled to='/login'>Login</LinkStyled>
    </NavigationStyled>
  );
};

export default AuthNav;
