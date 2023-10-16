import "./App.css";
import Header from "./public_pages/Header";
import Footer from "./public_pages/Footer";
import {
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';

// function App() {
//   return (
//     <div>
//       <div className="relative flex min-h-screen flex-col bg-background font-sans-serif">
//         {/* <Route> */}
//         <Header />
//         <Footer />
//         {/* </Route> */}
//       </div>
//     </div>

//   );
// }

function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background font-sans-serif">
      <Router>
        <Header />
        <Routes>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
