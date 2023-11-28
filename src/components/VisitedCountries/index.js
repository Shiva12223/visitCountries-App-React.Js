import './index.css'

const VisitedCountries = props => {
  const {visitedCountryDetails, deleteCountryItem} = props
  const {name, imageUrl, id} = visitedCountryDetails

  const removeCountryItem = () => {
    deleteCountryItem(id)
  }

  return (
    <li className="country-list-item">
      <div className="country-item-container">
        <img className="country-img" src={imageUrl} alt="thumbnail" />
        <div className="country-name-and-button-container">
          <p className="country-item-name">{name}</p>
          <button
            data-testid="delete"
            type="button"
            className="remove-btn"
            onClick={removeCountryItem}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default VisitedCountries
