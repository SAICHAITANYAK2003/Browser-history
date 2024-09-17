import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const DeleteItem = () => {
    onDeleteItem(id)
  }
  return (
    <li className="history-data-container">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} className="logo-url" alt="domain logo" />
      <p className="title">{title}</p>

      <p className="domain-url">{domainUrl}</p>
      <button className="delete-logo" onClick={DeleteItem} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
