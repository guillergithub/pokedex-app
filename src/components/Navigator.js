import { useAuth } from "../provider/AuthProvider";
import { useForm } from "react-hook-form";

const Navigator = ({
  types,
  handleSelectType,
  handleSelectAmount,
  onSubmit,
}) => {
  const { register, handleSubmit } = useForm();
  const { signOut, trainer } = useAuth();

  const onSignOut = () => {
    signOut(() => {});
  };

  const typeOptions = types.map((type) => {
    return (
      <option className="m-1" value={type.name} key={type.name}>
        {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
      </option>
    );
  });

  return (
    <nav className="navbar">
      <div className="d-flex form-container">
        <form className="d-flex form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input"
            type="text"
            {...register("value")}
            placeholder="Find a Pokemon..."
          />
          <button className="btn-primary button-form">Buscar</button>
        </form>
        
        <select onChange={handleSelectType} className="select">
          <option defaultValue>Buscar por tipo</option>
          <option value={"all"}>All</option>
          {typeOptions}
        </select>

        <select
          className="select select-numbers-pokemons"
          onChange={handleSelectAmount}
        >
          <option defaultValue value={null}>
            Cantidad
          </option>
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
          <option value={16}>16</option>
          <option value={20}>20</option>
        </select>
      </div>

      <div className="d-flex">
        <div>
          <h4>Hi, {trainer.charAt(0).toUpperCase() + trainer.slice(1)} </h4>
        </div>

        <button className="btn btn-danger" onClick={onSignOut}>
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navigator;
