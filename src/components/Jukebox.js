var React = require('react')

var Jukebox = React.createClass({
  handleChange: function(event) {
    this.setState({
      query: event.target.value
    })
  },
  handleSubmit: function(event) {
    event.preventDefault()
    this.searchForAlbums()
  },
  searchForAlbums: function() {
    var url = "https://api.spotify.com/v1/search?type=album&q=" + this.state.query
    fetch(url).then(function(response) {
      return response.json()
    }).then(function(json) {
      this.setState({
        albums: json.albums.items
      })
    }.bind(this))
  },
  fetchArtist: function() {
    var url = "https://agile-atoll-8687.herokuapp.com/messages.json"
    fetch(url).then(function(response) {
      return response.json()
    }).then(function(json) {
      this.setState({
        query: json.body
      })
      this.searchForAlbums()
    }.bind(this))
  },
  componentDidMount: function() {
    window.intervalID = setInterval(this.fetchArtist, 5000)
  },
  componentWillUnmount: function() {
    clearInterval(window.intervalID)
  },
  getInitialState: function() {
    return { 
      query: "",
      albums: []
    }
  },
  render: function() {
    return (
      <div>
        <div className="col-sm-8">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <input type="text" className="form-control" value={this.state.query} onChange={this.handleChange} />&nbsp;
            <button type="submit" className="btn btn-success">Find music!</button>
          </form>
          <br />
          {this.state.albums.map(function(album) {
            return <img key={album.id} role="presentation" className="album" src={album.images[0].url} />
          })}
        </div>
        <div className="col-sm-4">
          <h3>KIEI-924 Request Hotline</h3>
          <h4>(312) 436-2244</h4>
        </div>
      </div>
    )
  }
})

module.exports = Jukebox