import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { BiUser } from 'react-icons/bi';
import { FiEyeOff } from 'react-icons/fi';
import { AppDispatch } from '../../redux/store';
import { login } from '../../redux/auth/auth-operations';
import Button from '../../components/Button';
import {
  MainStyled,
  Form,
  ItemContainer,
  Label,
  LabelText,
  Input,
  iconStyle,
  InputContainer,
  button,
} from './LoginView.styled';

export default function LoginView() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'username':
        setUserName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(login({ username, password }));
    setUserName('');
    setPassword('');
  };

  return (
    <MainStyled>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Label>User Name</Label>
        <ItemContainer>
          <InputContainer>
            <Input
              type='username'
              name='username'
              value={username}
              onChange={handleChange}
              id='username'
              placeholder='testuser'
            />
            <IconContext.Provider
              value={{ style: { ...iconStyle, position: 'absolute' } }}
            >
              <BiUser />
            </IconContext.Provider>
          </InputContainer>
        </ItemContainer>
        <Label>
          Password<LabelText>Must have at least 8 characters</LabelText>
        </Label>
        <ItemContainer>
          <InputContainer>
            <Input
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
              id='password'
              placeholder='testpassword123'
            />
            <IconContext.Provider
              value={{ style: { ...iconStyle, position: 'absolute' } }}
            >
              <FiEyeOff />
            </IconContext.Provider>
          </InputContainer>
        </ItemContainer>
        <Button style={button} type='submit'>
          Login
        </Button>
      </Form>
    </MainStyled>
  );
}
