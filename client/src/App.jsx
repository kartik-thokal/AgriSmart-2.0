import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ui/ScrollToTop"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">

      
        <ScrollToTop />  {/* Place here, watches all route changes */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow p-10">
          <AppRoutes />
        </main>

        <Footer />
      

    </div>
  );
}

export default App;
