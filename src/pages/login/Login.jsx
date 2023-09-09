import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './loginStyle.scss'
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const Login = ({setUserRole}) => {
  const navegate = useNavigate()
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('El nombre de usuario es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria'),
  });
  const handleSubmit = async (values) => {
   // const auth = getAuth();
    try {
      //await signInWithEmailAndPassword(auth, values.username, values.password);
      //alert("login exitoso")
      setUserRole(true)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Bienvenido!',
        text: 'Has iniciado sesión correctamente en Clara. ¡Disfruta de tu experiencia!',
        showConfirmButton: false,
        timer: 3000, // La notificación se mostrará durante 5 segundos
        background: '#fff', // Color de fondo
        customClass: {
          title: 'custom-title', // Clase CSS personalizada para el título
          content: 'custom-content' // Clase CSS personalizada para el contenido
        },
        showClass: {
          popup: 'animated fadeInDown faster' // Animación de entrada
        },
        hideClass: {
          popup: 'animated fadeOutUp faster' // Animación de salida
        },
        onConfirm: () => {
          // Tu código personalizado aquí cuando el usuario confirma
        }
      });
      
      navegate("/user")
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className='mainLogin'>
      <div className="card m-5 border">
        <h1 className='mt-3 fw-bold fs-1'>CLARA</h1>
        <div className="card-body ">
          <h4 className='text-center mb-3'>Iniciar Sesión</h4>
          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <div className='mb-3'>
                  <label htmlFor="username" className='form-label fw-bold'>Nombre de Usuario</label>
                  <Field type="text" id="username" name="username" className="form-control" />
                  <ErrorMessage name="username" component="div" className="error" />
                </div>

                <div className='mb-3'>
                  <label htmlFor="password" className='form-label fw-bold'>Contraseña</label>
                  <Field type="password" id="password" name="password" className="form-control" />
                  <ErrorMessage name="password" component="div" className="error" />
                </div>
                <div className="d-grid 2 col-6 mx-auto">
                  <button type="submit" className='btn btn-primary mt-3 boton'>Ingresar</button>
                </div>

              </Form>
            )}
          </Formik>
        </div>
      </div>

    </div>
  );
}

export default Login