import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <div className={css.general}>
      <label htmlFor="">Find contacts by name</label>
      <input
        className={css.allInput}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Пошук контактів за ім'ям"
      />
    </div>
  );
};

