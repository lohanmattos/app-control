import "./style.css"
import cod from "./img/codBarra.png"
import qr from "./img/qrcode.png"
import dom from "./img/DTCEA-SI-DOM.png"

const TicketProduct = () => {
    return (
        <div className="row .ms-1" >
                <div className="container">
                    <div className="card w-25">
                        <div className="card-body">
                            <div className="etiqueta-box">
                                <div>
                                    <h5 className="card-title">UG: DTCEA-SI</h5>
                                    <h5 className="card-title">Depend: SI-CMDO</h5>
                                    <h5 className="card-title">N° BMP: 1077908</h5>
                                </div>
                                <div>
                                    <img src={dom} alt="DOM" />
                                </div>
                            </div>
                            <div className="descricao-box">
                                <p className="card-text">MESA DE TRABALHO EM AGLOMERADO, COR ARGILA</p>
                            </div>
                            <div className="div-img-codigos">
                                <img className="img-codBarra" src={cod} alt="CodBarra" />
                                <img className="img-qrcode" src={qr} alt="Qrcode" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default TicketProduct