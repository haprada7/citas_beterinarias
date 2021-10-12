import { Router } from "express"
import {  UsuarioAplicacionGet, UsuarioAplicacionById, UsuarioAplicacionLogin, UsuarioAplicacionRegistro, UsuarioAplicacionAjustePerfil } from "../controllers/UsuarioAplicacion.js";

const router = Router();
router.get('/', UsuarioAplicacionGet);
router.post('/postear', UsuarioAplicacionLogin);

export default router;