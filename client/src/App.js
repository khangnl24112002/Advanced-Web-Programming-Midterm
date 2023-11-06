import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import AuthLayout from "./layouts/Auth/AuthLayout";
import ProtectedLayout from "./layouts/ProtectedLayout/ProtectedLayout";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
        <Route path="/dashboard" element={<ProtectedLayout />}>
          <Route path="settings" element={<Settings />} />
          <Route path="profile" index element={<Profile />} />
          {/* Handle other routes */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
