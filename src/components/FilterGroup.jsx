import './FilterGroup.css';


function FilterGroup({ title, inputType, options }) {
  return (
    <div className="filter-group">
      <h3>{title}</h3>
      {options.map((opcao) => (
        <label key={opcao.value} className="filter-opcao">
          <input type={inputType} name={title} value={opcao.value} />
          {opcao.text}
        </label>
      ))}
    </div>
  );
}

export default FilterGroup;