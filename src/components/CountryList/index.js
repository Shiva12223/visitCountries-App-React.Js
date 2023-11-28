import './index.css'

const CountryList = props => {
  const {checkedCountryStatus, countryDetails} = props
  const {id, name, isVisited} = countryDetails
  const statusText = isVisited ? 'Visited' : 'Visit'

  const addCountryBtn = () => {
    checkedCountryStatus(id)
  }

  return (
    <li className="country-item ">
      <p className="country-name">{name}</p>
      {isVisited === true ? (
        <p className="button-status">{statusText}</p>
      ) : (
        <button className="visit-btn" type="button" onClick={addCountryBtn}>
          {statusText}
        </button>
      )}
    </li>
  )
}
export default CountryList
