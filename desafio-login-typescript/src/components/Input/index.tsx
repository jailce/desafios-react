// Styles
import { InputContainer, InputText, ErrorText, Label } from './styles';

// Types
import { IInput } from './types';

// Hooks
import { Controller } from 'react-hook-form';

const Input = ({ labelName, name, control, errorMessage, ...rest }: IInput) => {
  return (
    <>
      <InputContainer>
        <Label>{labelName}</Label>
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value, ref} }) => (
            <InputText 
              {...rest} 
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
            />
          )}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export { Input };