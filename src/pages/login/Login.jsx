import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './loginStyle.scss'


const Login = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('El nombre de usuario es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria'),
  });
  const handleSubmit = async (values) => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, values.username, values.password);
      alert("login exitoso")
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className='mainLogin'>
      <div className="card m-5 border">
        <div className="card-body ">
          <h2>Iniciar Sesión</h2>
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
                <div>
                  <label htmlFor="username" className='form-label'>Nombre de Usuario</label>
                  <Field type="text" id="username" name="username" className="form-control" />
                  <ErrorMessage name="username" component="div" className="error" />
                </div>

                <div>
                  <label htmlFor="password" className='form-label'>Contraseña</label>
                  <Field type="password" id="password" name="password" className="form-control" />
                  <ErrorMessage name="password" component="div" className="error" />
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button type="submit" className='btn boton mt-3'>Iniciar Sesión</button>
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