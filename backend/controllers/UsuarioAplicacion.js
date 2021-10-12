import UsuarioAplicacion from '../models/UsuarioAplicacion.js'

const UsuarioAplicacionGet = async(req, res) => {
    //const articulos = await Articulo.find().populate('categoria', 'nombre');
    console.log("imprint")
    const usuarioAplicacion = await UsuarioAplicacion.find();
    res.status(201).json({
        usuarioAplicacion
    })
}


 UsuarioAplicacionLogin = async(req, res) => {
    const {}=req.body;
    console.log(req.body)
        const usuario=await UsuarioAplicacion.findOne({correo:correo});
       console.log(usuario);
      return res.status(201).json({usuario})  
}



export { UsuarioAplicacionGet, UsuarioAplicacionLogin};