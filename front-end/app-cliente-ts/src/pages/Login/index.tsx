import { ChangeEvent, useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import AuthContext from "../../contexts/Auth/AuthContext";
import './style.css'

const Login = () => {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();


  interface IFormInput {
    user: string;
    password: string
  }

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    if (data.user && data.password) {
      const isLogged = await auth.signin(data.user, data.password);
      if (isLogged) {
        navigate('/');
        alert("Autenticado com sucesso")
      } else {
        alert("Usuario ou Senha Invalidos");
      }
    }
  }

  return (
    <div>
      <NavBar />

      <main className="container">
        <h1>Sistema de Controle de Bens-Patrimoniais</h1>

        {errors.user && <span style={{ color: 'red' }}>Entre com o usuário.</span>}
        <br />
        {errors.password && <span style={{ color: 'red' }}>Insira a senha.</span>}

        <form onSubmit={handleSubmit(onSubmit)}>

          <fieldset>
            <legend>Dados de Acesso</legend>

            <label>Usuário</label>
            <input {...register("user", { required: true })} />

            <label>Senha</label>
            <input {...register("password", { required: true })} />

            <input type="submit" />
          </fieldset>


        </form>
      </main>


    </div>
  );
};

export default Login;