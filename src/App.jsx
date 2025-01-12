import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import News from "./pages/News/News.jsx";
import Login from "./pages/Login/Login.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import RequireAuth from "./providers/RequireAuth.jsx";
import { AuthProvider } from "./providers/AuthProvider.jsx";
import Converter from "./pages/Exchange/Converter.jsx";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/converter" element={<Converter />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
