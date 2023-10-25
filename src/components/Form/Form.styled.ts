import styled from 'styled-components';

const FormStyles = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  margin: 20px auto 0 0;
  padding: 12px;
  width: 800px;
  border-radius: 2px;
  box-shadow:
    0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const ContainerStyles = styled.div`
  margin: 10px 5px 0 0;
  width: 200px;
`;

const LabelStyles = styled.label`
  display: inline-block;
  margin: 0;
  font-size: 20px;
  color: #708db3;
`;

const InputStyles = styled.input`
  color: #171718;
  font: inherit;
  font-size: 12px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  width: 200px;
  outline: 0;
  &:focus {
    border: 1px solid #2b32b2;
  }
`;

const ButtonStyled = styled.button`
  height: 30px;
  color: #fff;
  background-color: #3f51b5;
  border: 0;
  outline: 0;
  padding: 8px 5px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);
  font: inherit;
  text-transform: uppercase;
  transition: background-color 200ms ease-in-out;
  &:hover {
    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);
    background-color: #293588;
  }
`;

export { FormStyles, ContainerStyles, LabelStyles, InputStyles, ButtonStyled };
