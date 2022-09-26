import './App.css';
import Employee from "./Components/Employee";
function App() {
  const showEmployess = true;
  return (
    <div className="App">
        {/*<p>This is a coment</p>*/}
        {showEmployess ? (
          <div>
            <Employee name="Stevan" role="Intern"/>
            <Employee name="Michael" role="Finance"/>
            <Employee name="Bárbara"/>
            <Employee name="Teresa"/>
          </div>
        ) : (<p>You cannot see the employess!</p>
        )}
    </div>
  );
}

export default App;
