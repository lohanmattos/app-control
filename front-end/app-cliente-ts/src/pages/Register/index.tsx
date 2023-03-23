import { ChangeEvent, useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import AuthContext from "../../contexts/Auth/AuthContext";

const Register = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    interface IFormInput {
        user: string;
        password: string
        passwordRepite: string
        email: string
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
                <h1>Sistema de Controle de Bens-Patrimoniais</h1>

                {errors.user && <span style={{ color: 'red' }}>Entre com o usuário.</span>}
                <br />
                {errors.password && <span style={{ color: 'red' }}>Insira a senha.</span>}

                <form onSubmit={handleSubmit(onSubmit)}>

                    <fieldset>
                        <legend>Registre-se</legend>

                        <label>Usuário</label>
                        <input {...register("user", { required: true })} />

                        <label>Senha</label>
                        <input {...register("password", { required: true })} />

                        <label>Digite a senha novamente</label>
                        <input {...register("passwordRepite", { required: true })} />

                        <label>E-mail</label>
                        <input {...register("email", { required: true })} />

                        <input type="submit" />
                    </fieldset>
                </form>
            </main>
        </div>
    );

};

export default Register;