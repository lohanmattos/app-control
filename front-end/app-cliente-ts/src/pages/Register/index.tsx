import { ChangeEvent, useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import AuthContext from "../../contexts/Auth/AuthContext";
import "./style.css"
import { useApi } from "../../hooks/userApi";

const Register = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    
    const api = useApi();

    interface IFormInput {
        user: string;
        password: string
        passwordRepite: string
        email: string
        first_name: string,
        last_name: string,
        cpf: string
    }

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    const onSubmit = async (data: IFormInput) => {
        if (data.user && data.password && data.email) {

            if (data.password == data.passwordRepite) {
                const register = await auth.signup(data.user, data.password, data.email);

                navigate('/')
                alert("Usuário criado com Sucesso")
            } else {
                alert("As senhas não conferem");
            }
        }
    }

    return (
        <div>
            <NavBar />
            <main className="container">
                <h1 className="mt-4">Novo Usuário</h1>

                {errors.user && <span style={{ color: 'red' }}>Entre com o usuário.</span>}
                <br />
                {errors.password && <span style={{ color: 'red' }}>Insira a senha.</span>}

                <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-6">
                        <label htmlFor="inputName" className="form-label">Username</label>
                        <input {...register("user", { required: true })} type="text" className="form-control" id="inputName"/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input {...register("password", { required: true })} type="password" className="form-control" id="inputPassword" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="inputPassword2" className="form-label">Password</label>
                        <input {...register("passwordRepite", { required: true })} type="password" className="form-control" id="inputPassword2" />
                    </div>
                   
                    <div className="col-md-12">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input {...register("email", { required: true })} type="email" className="form-control" id="inputEmail" />
                    </div>                  
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </main>
        </div >
    );

};

export default Register;