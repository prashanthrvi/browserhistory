import { Component } from "react"
import "./index.css"
import HistoryItems from "../HistoryItems"

class BrowserHistory extends Component {
  state = { searchValue: "", historyList: this.props.initialHistoryList }

  onSearch = (event) => {
    this.setState({ searchValue: event.target.value.toLowerCase() })
  }

  deleteHistory = (id) => {
    const { historyList } = this.state

    const filteredList = historyList.filter((eachList) => eachList.id !== id)

    this.setState({ historyList: filteredList })
  }

  render() {
    const { searchValue, historyList } = this.state

    const searchResults = historyList.filter((eachList) =>
      eachList.title.toLowerCase().includes(searchValue)
    )
    return (
      <div className="bg">
        <div className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="image-card">
            <img
              className="history-img"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
          </div>
          <input
            type="search"
            value={searchValue}
            placeholder="Search history"
            onChange={this.onSearch}
          />
        </div>

        <div className="card">
          {searchResults.length === 0 ? (
            <div className="message">
              <p>There is no history to show</p>
            </div>
          ) : (
            <ul>
              {searchResults.map((eachList) => (
                <HistoryItems
                  eachList={eachList}
                  deleteHistory={this.deleteHistory}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default BrowserHistory
