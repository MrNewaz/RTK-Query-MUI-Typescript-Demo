import Home from 'pages/Home'
import PostDetails from 'pages/PostDetails'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="details/:id" element={<PostDetails />} />
      </Routes>
    </main>
  )
}

export default AppRoutes
