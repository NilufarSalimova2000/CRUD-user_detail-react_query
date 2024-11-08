import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { UserDetail } from "./pages/user-detail"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-detail/:id" element={<UserDetail />} />
      </Routes>
    </>
  )
}

export default App
