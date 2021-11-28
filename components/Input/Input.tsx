import { InputStyled, InputWrapperStyled, InputIconStyled } from "./InputStyled";

interface InputProps {
  placeholder?: string,
  icon?: any
}

const Input = ({placeholder, icon} : InputProps) => {
  const IconComponent = icon ? icon : null;
  return (
    <InputWrapperStyled withIcon={icon ? true : false }>
      { IconComponent && (
        <InputIconStyled>
            <IconComponent />
        </InputIconStyled> 
      )}
      <InputStyled placeholder={placeholder} />
    </InputWrapperStyled>
  );
}

export default Input;
