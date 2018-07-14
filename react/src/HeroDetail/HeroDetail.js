const HeroDetail = ({ hero, handleChange }) => {
  return (hero &&
    <div>
      <h2>{hero.name.toUpperCase()} Details</h2>
      <div><span>id: </span>{hero.id}</div>
      <div>
        <label>name:
        <input onChange={handleChange} value={hero.name} placeholder={hero.name} />
        </label>
      </div>
    </div>
    )
}