const Login = (props) => {
  return props.registrado ? (
    <span>Componente de login</span>
  ) : (
    <span>Componente de registro</span>
  );
};

export default Login;
