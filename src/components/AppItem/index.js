// Write your code here
import './index.css'

const AppItem = props => {
  const {eachAppItem} = props
  const {appName, imageUrl} = eachAppItem

  return (
    <li className="apps-container">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="app-heading">{appName}</p>
    </li>
  )
}

export default AppItem
