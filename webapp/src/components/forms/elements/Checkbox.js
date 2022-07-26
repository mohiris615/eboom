import './styles.css';

const CheckBox = () => {
  return (
    <div className="checkbox-wrapper">
      <p>Par Mois</p>
      <div className="form-control">
        <input
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
          <span className={`react-switch-button`} />
        </label>
      </div>
      <p>Par An</p>
    </div>
  );
};

export default CheckBox;