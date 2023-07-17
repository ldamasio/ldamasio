import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import WorksScreen from "./screens/WorksScreen"
import RobsonScreen from "./screens/RobsonScreen"
import ContactScreen from "./screens/ContactScreen"
import PostListScreen from './screens/blog/PostListScreen'
import PostDetailScreen from './screens/blog/PostDetailScreen'
import HomeAdminScreen from "./screens/admin/HomeAdminScreen"
import NoPageScreen from "./screens/NoPageScreen"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen/>} />
        <Route path="/works" element={<WorksScreen/>} />
        <Route path="/robson-bot" element={<RobsonScreen/>} />
        <Route path="/contact" element={<ContactScreen/>} />
        <Route path="/blog" element={<PostListScreen/>} />
        <Route path="/blog/:slug" element={<PostDetailScreen/>} />
        <Route path="/admin" element={<HomeAdminScreen/>} />
        <Route path="*" element={<NoPageScreen/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
