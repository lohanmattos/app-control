const Employee = () => {
    return(
        <>
         <div className="col-md-12">
                        <label htmlFor="inputFirst_name" className="form-label">Primeiro Nome</label>
                        <input {...register("first_name", { required: true })} type="text" className="form-control" id="inputFirst_name" />
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="inputLast_name" className="form-label">Sobre Nome</label>
                        <input {...register("last_name", { required: true })} type="text" className="form-control" id="inputLast_name" />
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="inputCpf" className="form-label">Cpf</label>
                        <input {...register("cpf", { required: true })} type="text" className="form-control" id="inputEmail" />
                    </div>

                    <div className="col-md-12">
                        <input {...register("user", { required: true })} type="hidden" className="form-control" id="inputEmail" />
                    </div>
                </div>

        </>
       
    )
}

export default Employee



