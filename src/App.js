import logo from './logo.svg';
import './App.css';
import Gist from'./components/Gist'
import AdvancedGist from './components/AdvancedGist'
import FormikYup from './components/FormikYup';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <script src="https://unpkg.com/formik/dist/formik.umd.production.min.js"></script>
      </header> */}

      {/* <Gist/> */}
      {/* <AdvancedGist/> */}
      <FormikYup/>
    </div>
  );
}

export default App;
