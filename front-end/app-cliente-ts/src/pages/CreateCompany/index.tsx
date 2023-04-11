import {useContext} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import AuthContext from "../../contexts/Auth/AuthContext";
import { useApi } from "../../hooks/userApi";

const CreateCompany = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    
    const api = useApi();

    interface IFormInput {
        name: string;
        decription: string
        acronym: string
    }

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    const onSubmit = async (data: IFormInput) => {
        if (data.name && data.decription && data.acronym) {
            const createCompany = await api.createCompany(data.name, data.decription, data.acronym)           
            alert('Empresa criada com Sucesso')
            navigate('/company') 
      
        }

        
    }

    return (
        <div>
            <NavBar />
            <main className="container">
                <h1 className="mt-4">Cadastrar Empresa</h1>


                <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-6">
                        <label htmlFor="inputName" className="form-label">Nome</label>
                        <input {...register("name", { required: true })} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="inputDecription" className="form-label">Descrição</label>
                        <input {...register("decription", { required: true })} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="inputAcronym" className="form-label">Sigla</label>
                        <input {...register("acronym", { required: true })} type="text" className="form-control"/>
                    </div>
                                                  
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </div>
                </form>
            </main>
        </div >
    );

};

export default CreateCompany;