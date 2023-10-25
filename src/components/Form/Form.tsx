import { useState } from 'react';
import { addData } from '../../redux/tables/operations';
import { useAppDispatch } from '../../redux/store';
import {
  FormStyles,
  LabelStyles,
  InputStyles,
  ButtonStyled,
  ContainerStyles,
} from './Form.styled';

const Form = () => {
  const [name, setName] = useState('');
  const [birthday_date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const dispatch = useAppDispatch();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'birthday_date':
        setDate(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone_number':
        setNumber(value);
        break;
      case 'address':
        setAddress(value);
        break;
      default:
        return;
    }
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addData({ name, birthday_date, email, phone_number, address }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setDate('');
    setEmail('');
    setNumber('');
    setAddress('');
  };

  return (
    <FormStyles onSubmit={submitForm}>
      <ContainerStyles>
        <LabelStyles htmlFor={name}>Full Name</LabelStyles>
        <InputStyles
          type='name'
          name='name'
          value={name}
          onChange={handleChange}
          id='name'
        />
      </ContainerStyles>
      <ContainerStyles>
        <LabelStyles htmlFor={birthday_date}>Date of birth</LabelStyles>
        <InputStyles
          type='date'
          name='birthday_date'
          value={birthday_date}
          onChange={handleChange}
          id='date'
        />
      </ContainerStyles>
      <ContainerStyles>
        <LabelStyles htmlFor={name}>Email</LabelStyles>
        <InputStyles
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          id='email'
        />
      </ContainerStyles>
      <ContainerStyles>
        <LabelStyles htmlFor={phone_number}>Phone Number</LabelStyles>
        <InputStyles
          type='text'
          name='phone_number'
          value={phone_number}
          onChange={handleChange}
          id='number'
        />
      </ContainerStyles>
      <ContainerStyles>
        <LabelStyles htmlFor={name}>Address</LabelStyles>
        <InputStyles
          type='address'
          name='address'
          value={address}
          onChange={handleChange}
          id='address'
        />
      </ContainerStyles>
      <ButtonStyled type='submit'>Add contact</ButtonStyled>
    </FormStyles>
  );
};

export default Form;
