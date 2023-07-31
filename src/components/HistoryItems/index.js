import "./index.css"

const HistoryItems = (props) => {
  const { eachList, deleteHistory } = props
  const { timeAccessed, logoUrl, title, domainUrl, id } = eachList

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li>
      <p className="time-text">{timeAccessed}</p>
      <div className="image-card2">
        <img className="media-image" src={logoUrl} alt="domain logo" />
      </div>
      <div className="text-card">
        <p className="title-text">{title}</p>
        <p className="url-text">{domainUrl}</p>
      </div>
      <div className="icon-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          onClick={onDelete}
        />
      </div>
    </li>
  )
}

export default HistoryItems
