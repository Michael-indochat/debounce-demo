interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Form = ({ onChange, value, onClick }: Props) => {
  return (
    <>
      <label htmlFor="pokemon">Name or ID of a Pokemon</label>
      <input
        type="text"
        id="pokemon"
        placeholder="Example: Pikachu"
        value={value}
        onChange={onChange}
      />

      <button type="button" onClick={onClick}>
        Button
      </button>
    </>
  );
};
