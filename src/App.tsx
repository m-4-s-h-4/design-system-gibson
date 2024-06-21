import Heading from "./components/Heading";
import "./tokens/css/_variables.css";

function App() {
  return (
    <div>
      <Heading as="h1" variant="heading10">
        This is title
      </Heading>
      <Heading as="h2" variant="heading20">
        This is title
      </Heading>
      <Heading as="h3" variant="heading30">
        This is title
      </Heading>
      <Heading as="h4" variant="heading40">
        This is title
      </Heading>
      <Heading as="h5" variant="heading50">
        This is title
      </Heading>
    </div>
  );
}

export default App;
