import Layout from "../components/Layout.js";
import Link from 'next/link';
import {productos} from '../info.js'

const Index = () => (
<Layout title="Inicio">

    {/** Card de Encabezado */}

    <header className="row">
        <div className="col-md-12">
            <div className="card card-body bg-secondary text-light rounded">
                <div className="row">
                    <div className="col-md-3 text-center">
                        <img src="image/Logo.png" alt=""  className="logochatos"/>
                    </div>
                    <div className="col-md-9">
                        <h1>¿Ya nos conoces?</h1>
                        <p>
                        Somos una empresa familiar que inició su servicio en 2020 en la ciudad de Xalapa, Ver. Y surge con la visión de ofrecer a sus clientes una experiencia que permita compartir valiosos momentos en familia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </header>
    

    {/** Productos */}
    <div className="row productos">
        <div className="col-md-12">

                <div className="row">
                    {
                        productos.map(({nombre,descripcion,precio,imagen},i) =>(
                            <div className="col-md-4 p-2" key={i}>
                                <div className="card bg-dark text-light h-100 " id="productos">

                                    {/* <div className="card-header border-warning text-center"> */}
                                    <div className="overflow">
                                        <img src={imagen} alt="" className="card-img-top"/>
                                    </div>

                                    <div className="card-body text-center producto">
                                        <h3 className="nombre">{nombre}</h3>
                                        <p>{descripcion}</p>
                                        {/* <h5 className="precio">${precio}</h5> */}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>


        </div>
    </div>

</Layout>
)
    

export default Index;