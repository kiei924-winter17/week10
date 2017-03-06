var React = require('react')

var MovieReview = React.createClass({
  playTTS: function(event) {
    event.preventDefault()
    var ttsUrl = "https://watson-api-explorer.mybluemix.net/text-to-speech/api/v1/synthesize?accept=audio%2Fogg%3Bcodecs%3Dopus&voice=en-US_MichaelVoice&text=" + this.props.review.summary_short
    window.audioObject = new Audio(ttsUrl);
    window.audioObject.play();
  },
  render: function() {
    return (
      <li className="list-group-item clearfix">
        <img role="presentation" className="pull-left" src={this.props.review.multimedia.src} />
        <h4 className="list-group-item-heading">
          <a href={this.props.review.link.url} target="_blank">{this.props.review.display_title}</a>
        </h4>
        <h5>{this.props.review.byline}</h5>
        <p className="list-group-item-text">
          <a href="#" onClick={this.playTTS}><i className="fa fa-volume-up"></i></a>
          &nbsp;&nbsp;
          {this.props.review.summary_short}
        </p>
      </li>
    )
  }
})

module.exports = MovieReview

// var translateUrl = "https://watson-api-explorer.mybluemix.net/language-translator/api/v2/translate?source=en&target=es&text=" + this.props.review.summary_short