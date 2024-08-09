import { useEffect } from "react"
import Layout from "./components/layouts/Layout"
import AOS from 'aos';
import 'aos/dist/aos.css';
import AuthProvider from "./context/AuthContext";

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  )
}

export default App
