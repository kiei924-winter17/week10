var React = require('react')
var MovieReview = require('./MovieReview')

var MovieReviews = React.createClass({
  getInitialState: function() {
    return { 
      reviews: []
    }
  },
  componentDidMount: function() {
    var apiKey = "b605cf2415ced5685c4050b3e1892032:2:54552145" // don't steal it
    // var url = "https://api.nytimes.com/svc/movies/v2/reviews/{resource-type}.json?api-key="
    // fetch(url).then(function(response) {
    //   return response.json()
    // }).then(function(json) {
    //   console.log(json)
    // }.bind(this))
  },
  render: function() {
    return (
      <div className="col-sm-12">
        <ul className="list-group">
          {this.state.reviews.map(function(review) {
            return <MovieReview key={review.link.url} review={review} />
          })}
        </ul>
      </div>
    )
  }
})

module.exports = MovieReviews