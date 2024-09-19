// Styles
import { Container, Content, Title } from './styles';

// Types
import { defaultValues, IFormData } from './types';

// Components
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

// Hooks
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email('e-mail inválido ex: usuario@mail.com')
      .required('Campo Obrigatório'),
    password: yup
      .string()
      .min(6, 'No minimo 6 caracteres')
      .required('Campo Obrigatório'),
  })
  .required();


const Login = () => {

  const { control , formState: { errors, isValid }, handleSubmit, reset } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues,
    reValidateMode: 'onChange'
  });

  const onSubmit = (data: any) => {
    console.log("Login Efetuado", data);
    alert("Usuário Logado");
    reset();
  }

  return (
    <Container>
      <Content>
        <Title>Login</Title>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Input 
            labelName="Email"
            name="email"  
            placeholder="Digite seu e-mail"
            control={control}
            errorMessage={errors?.email?.message}
          />
          <Input 
            labelName="Senha" 
            name="password" 
            placeholder="Digite sua senha" 
            control={control}
            errorMessage={errors?.password?.message}
            type="password"
          />
          {isValid ? <Button title="Login" type="submit" /> : <Button title="Login" disabled />}
          </form>
      </Content>
    </Container>
  );
};

export default Login;