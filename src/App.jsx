import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import News from "./pages/News/News.jsx";
import Login from "./pages/Login/Login.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import RequireAuth from "./hoc/RequireAuth.jsx";
import {AuthProvider} from "./hoc/AuthProvider.jsx";


function App() {

  return (
      <>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home/>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/profile' element={
                <RequireAuth>
                  <Profile/>
                </RequireAuth>
              }/>
              <Route path='/login' element={<Login/>}/>
            </Route>
          </Routes>
        </AuthProvider>
      </>
  )
}

export default App
