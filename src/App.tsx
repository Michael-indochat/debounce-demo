import { Form } from "./components/Form";
import { Pokemon } from "./components/Pokemon";
import { useInput } from "./hooks/useInput";
import { useDebounce } from "./hooks/useDebounce";
import { useSearchPokemon } from "./hooks/useSearchPokemon";

const App = () => {
  const [value, onChange, onClick] = useInput();
  const debouncedValue = useDebounce(value, 1000);
  const { isLoading, pokemon } = useSearchPokemon(debouncedValue);

  return (
    <main>
      <h1>
        {" "}
        <span>Search Engine</span> with <span>Debounce Effect</span>{" "}
      </h1>
      <Form {...{ value, onChange, onClick }} />
      {isLoading ? (
        <span className="loading">Loading Results...</span>
      ) : (
        <Pokemon pokemon={pokemon} />
      )}
    </main>
  );
};
export default App;
