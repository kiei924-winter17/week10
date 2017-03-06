// React
var React = require('react')
var ReactDOM = require('react-dom')

var Header = require('./components/Header')
var NavBar = require('./components/NavBar')
var MovieReviews = require('./components/MovieReviews')
var Jukebox = require('./components/Jukebox')
var Emotions = require('./components/Emotions')

var App = React.createClass({
  viewChanged: function(event, view) {
    event.preventDefault()
     this.setState({
      currentView: view
    })
  },
  renderMainSection: function() {
    if (this.state.currentView === "reviews") {
      return <MovieReviews />
    } else if (this.state.currentView === "jukebox") {
      return <Jukebox />
    } else if (this.state.currentView === "emotions") {
      return <Emotions emotionsData={this.state.emotionsData} emotionsChanged={this.emotionsChanged} />
    }
  },
  emotionsChanged(scores) {
    this.setState({
      emotionsData: scores
    })
  },
  getInitialState: function() {
    return {
      currentView: "reviews",
      currentMovie: null,
      emotionsData: {}
    }
  },
  render: function() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <NavBar currentView={this.state.currentView} viewChanged={this.viewChanged} />
        <div className="main row">
          {this.renderMainSection()}
        </div>
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById("app")
)
