import { Routes } from "./src/routes";
import { AuthProvider } from "./src/context/AuthContext";
import { PlacesProvider } from "./src/context/PlacesContext";

export default function App() {
  return (
    <AuthProvider>
      <PlacesProvider>
        <Routes />
      </PlacesProvider>
    </AuthProvider>
  );
}
