import Basedatos from '../models/UsuarioAplicacion.js'

const esperarConsulta = async(req, res) => {

    const objetoconsultado = await Basedatos.find();
    res.status(201).json({
        objetoconsultado
    })
}
export default esperarConsulta;