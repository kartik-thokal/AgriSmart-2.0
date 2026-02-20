import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      
      <Navbar />

      {/* This makes content take available space */}
      <main className="flex-grow p-10">
        <AppRoutes />
      </main>

      <Footer />

    </div>
  );
}

export default App;
