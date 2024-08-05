import { useEffect } from "react"
import Layout from "./components/layouts/Layout"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Layout />
  )
}

export default App
