import Header from "./components/Header";
import Personal from "./components/Personal";

function App() {
    return(
        <div className="registration-form">
            <Header />
            <form className="user-info form-control">
                <Personal />
            </form>
        </div>
    )
}

export default App