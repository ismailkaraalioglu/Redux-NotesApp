import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Notes from "./components/Notes/Notes";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="notesApp">
      <Header />
      <section className="content">
        <Form />
        <Search />
        <Notes />
      </section>
    </div>
  );
}

export default App;
