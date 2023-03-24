import { ChangeEvent, useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import AuthContext from "../../contexts/Auth/AuthContext";
import './style.css'

const Login = () => {

  //cria um useContext passando o authProvider
  const auth = useContext(AuthContext);
  //cria um const navigate para utilizar o hook navigation
  const navigate = useNavigate();

  //cria uma interface para os dados do formulario
  interface IFormInput {
    user: string;
    password: string
  }

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {

    if (data.user && data.password) {

      const isLogged = await auth.signin(data.user, data.password);
      if (isLogged) {
        alert("Autenticado com sucesso");
        navigate('/dashboard');
      } else {
        alert("Usuario ou Senha Invalidos");
      }
    }
  }

  return (
    <div>
      <div className="container margin-top">
        {errors.user && <div className="alert alert-danger" role="alert">
          Entre com o usuário.!
        </div>}

        {errors.password && <div className="alert alert-danger" role="alert">
          Insira a senha.
        </div>}

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Acesse com os dados abaixo</label>
          <div className="mb-3 mt-3">
            <label
              className="form-label">Usuário</label>
            <input
              type={"text"}
              className="form-control"
              {...register("user", { required: true })}
            />
          </div>

          <div className="mb-3 mt-3">
            <label
              className="form-label">Senha</label>
            <input
              type={"password"}
              className="form-control"
              {...register("password", { required: true })}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary">Acessar
          </button>
        </form>

      </div>


    </div>
  );
};

export default Login;