import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateStoryPage from "./pages/CreateStoryPage";
import ProtectedRoute from "./components/ProtectedRoute";
import {AuthProvider} from "./context/AuthContext";
import Navbar from "./components/Navbar";
<route path="/login" element={<LoginPage />} />
function App() {
    return (
        <AuthProvider>
        <BrowserRouter>
        <div style={{maxWidth: "800px", margin: "0 auto", padding: "20px"}}>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />

            <Route
                      path="/create-story"
                      element={
                        <ProtectedRoute>
                          <CreateStoryPage />
                        </ProtectedRoute>
                      }
                    />
                    </Routes>
        </div>
        </BrowserRouter>
        </AuthProvider>
        );
    }
export default App;