import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { TitleStyles } from './HomeView.styled';

const HomeView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? (
    <TitleStyles>You are logged in !!! </TitleStyles>
  ) : (
    <TitleStyles>You are not logged in !!! </TitleStyles>
  );
};

export default HomeView;
