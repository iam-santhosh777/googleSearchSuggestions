// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, arrowFunctionInputChange} = props
  const {suggestion} = eachSuggestion

  const onClickArrow = () => {
    arrowFunctionInputChange(suggestion)
  }
  return (
    <li>
      <div className="suggestion-arrow-container">
        <p className="suggestion-text">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
          className="arrow"
          onClick={onClickArrow}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
