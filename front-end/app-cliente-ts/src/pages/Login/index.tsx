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
        navigate('/');
      } else {
        alert("Usuario ou Senha Invalidos");
      }
    }
  }

  return (
    <div>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">SISPAT - CONTROLE PATRIMONIAL</h1>
            <p className="col-lg-10 fs-4">Realiza de forma eficiente o controle de bens patrimonias de sua empresa.</p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={handleSubmit(onSubmit)}>
              {errors.password && <div className="alert alert-danger" role="alert">
                Insira a senha.
              </div>}
              {errors.user && <div className="alert alert-danger" role="alert">
                Entre com o usuário.
              </div>}
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput"
                  {...register("user", { required: true })}
                />
                <label htmlFor="floatingInput">Usuário</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword"
                  {...register("password", { required: true })}
                />
                <label htmlFor="floatingPassword">Senha</label>
              </div>             
              <button className="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
              <hr className="my-4" />
              <small className="text-muted">PineApple Sistemas - © Todos Direitos Reservados</small>
            </form>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Login;