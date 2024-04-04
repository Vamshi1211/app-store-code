// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabItem, onTabClick, isActive} = props
  const {tabId, displayText} = eachTabItem

  const onTabClicked = () => {
    onTabClick(tabId)
  }

  const buttonActiveClass = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${buttonActiveClass}`}
        onClick={onTabClicked}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
