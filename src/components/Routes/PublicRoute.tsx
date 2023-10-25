import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';

interface Props {
  children?: React.ReactNode;
  redirectTo: string;
  restricted: boolean;
}

export default function PublicRoute({
  children,
  redirectTo = '/',
  restricted = false,
}: Props) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : children}</>;
}
