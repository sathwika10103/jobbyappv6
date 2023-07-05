import './App.css'
import {Route, Routes, Navigate} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Jobs from './components/Jobs'
import JobItemDetails from './components/JobItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'

const App = () => (
  <Routes>
    <Route  path="/login" element={<Login/>}/>
    <Route element={<ProtectedRoutes/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/jobs" element={<Jobs/>} />
      <Route path="/jobs/:id" element={<JobItemDetails/>} />
    </Route>
    <Route path="/not-found" element={<NotFound/>} />
    <Route path="*" element={<Navigate to="not-found" />}></Route>
  </Routes>
)

export default App 