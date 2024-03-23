import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Sehir from "./pages/Sehir"
import Semt from "./pages/Semt"
import Nav from "./components/inc/Nav"
import NewsDetail from "./components/layout/NewsDetail"
import Aday from "./pages/Aday"
import Footer from "./components/inc/Footer"

function App() {
  return(
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="il/:cityName" element={<Sehir />} />
        <Route path="il/:cityName/ilce/:districtName" element={<Semt />} />
        <Route path="haber/:haberData" element={<NewsDetail />} />
        <Route path="aday/:adayData" element={<Aday />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
