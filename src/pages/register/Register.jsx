
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './registerStyle.scss'
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
const validationSchema = Yup.object({
  nombres: Yup.string().required('El campo Nombres es requerido'),
  apellidos: Yup.string().required('El campo Apellidos es requerido'),
  poblacion: Yup.string().required('El campo Población es requerido'),
  genero: Yup.string().required('El campo Género es requerido'),
  correo: Yup.string()
    .email('Ingrese un correo válido')
    .required('El campo Correo es requerido'),
  password: Yup.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .required('El campo Contraseña es requerido'),
});

const Register = () => {
  const navegate = useNavigate()
  
  const formik = useFormik({
    initialValues: {
      nombres: '',
      apellidos: '',
      poblacion: '',
      genero: '',
      correo: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Aquí puedes manejar la lógica para enviar los datos del formulario
      console.log(values);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario Registrado Exitosamente',
        showConfirmButton: false,
        timer: 2500
      })
      navegate("/user")
    },
  });

  return (
    <div id='register'>
      <div className="card m-5 boder">
        <div className="card-body ">
          <h1 className='text-center'>Registro</h1>

          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="nombres">Nombres</label>
              <input
             className="form-control"
                type="text"
                id="nombres"
                name="nombres"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nombres}
              />
              {formik.touched.nombres && formik.errors.nombres ? (
                <div className="error">{formik.errors.nombres}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="apellidos">Apellidos</label>
              <input
                type="text"
                id="apellidos"
                name="apellidos"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.apellidos}
              />
              {formik.touched.apellidos && formik.errors.apellidos ? (
                <div className="error">{formik.errors.apellidos}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="poblacion">Población</label>
              <select
                id="poblacion"
                name="poblacion"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.poblacion}
               className="form-select"
              >
                <option value="">Selecciona una opción</option>
                <option value="Rural">Rural</option>
                <option value="Urbana">Urbana</option>
              </select>
              {formik.touched.poblacion && formik.errors.poblacion ? (
                <div className="error">{formik.errors.poblacion}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="genero">Género</label>
              <input
              className="form-control"
                type="text"
                id="genero"
                name="genero"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.genero}
              />
              {formik.touched.genero && formik.errors.genero ? (
                <div className="error">{formik.errors.genero}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="correo">Correo</label>
              <input
              className="form-control"
                type="email"
                id="correo"
                name="correo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.correo}
              />
              {formik.touched.correo && formik.errors.correo ? (
                <div className="error">{formik.errors.correo}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="password">Contraseña</label>
              <input
              className="form-control"
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </div>

            <div className="d-grid 2 col-6 mx-auto">
                  <button type="submit" className='btn btn-primary mt-3 boton'>Continuar</button>
                </div>
          </form>
        </div>
      </div>

    </div>
  );
}
export default Register