import { ToastContainer } from "react-toastify"
import { AppRoutes } from "./routes"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <AppRoutes />
      <ToastContainer closeOnClick hideProgressBar={true} autoClose={4000} theme="dark"/>
    </>
  )
}

export default App