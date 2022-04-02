

const FormCart = ({ cambiosInput, cambioFueraFoco, formDatos, errors, OrdenarPedido }) => {

    return (
        <form>
            <div className="campoFormulario">
                <input id='nombre' type="text" name="nombre" placeholder='Nombre'
                    onChange={cambiosInput} onBlur={cambioFueraFoco} value={formDatos.nombre} maxLength="50" />
                {errors.nombre && <label>{errors.nombre}</label>}
            </div>

            <div className="campoFormulario">
                <input id='celular' type="text" name="celular" placeholder='Celular'
                    onChange={cambiosInput} onBlur={cambioFueraFoco} value={formDatos.celular} maxLength="9" />
                {errors.celular && <label>{errors.celular}</label>}
            </div>

            <div className="campoFormulario">
                <input id='email' type="email" name="email" placeholder='Correo Electronico'
                    onChange={cambiosInput} onBlur={cambioFueraFoco} value={formDatos.email} maxLength="200" />
                {errors.email && <label>{errors.email}</label>}
            </div>

            <div className="campoFormulario">
                <input id='emailValida' type="email" name="emailValida" placeholder='Valida Correo Electronico'
                    onChange={cambiosInput} onBlur={cambioFueraFoco} maxLength="200" />
                {errors.emailValida && <label>{errors.emailValida}</label>}
            </div>

            <button onClick={OrdenarPedido}>Ordenar Pedido</button>
        </form>
    );
};

export default FormCart; 