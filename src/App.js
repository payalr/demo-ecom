import React ,{Suspense} from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const Lazylist = React.lazy(()=>import("./components/ProductListing"))
function App() {
  return (
    <div className="container">
      <Header />
      <Suspense fallback={<Loader/>}><Lazylist/></Suspense>
      <Footer />
    </div>
  );
}

export default App;

