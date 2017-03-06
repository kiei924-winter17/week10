var React = require('react')
var Webcam = require('react-webcam')
var EmotionsChart = require('./EmotionsChart')

var Emotions = React.createClass({
  capture: function() {
    var screenshot = this.refs.webcam.getScreenshot()
    var headers = new Headers()
    headers.set("Content-Type", "application/octet-stream")
    headers.set("Ocp-Apim-Subscription-Key", "e9690d4ff8e84b48b7901fc82a9c9506")
    fetch("https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize", {
      headers: headers,
      method: "POST",
      body: toBlob(screenshot)
    }).then(function(response) {
      return response.json()
    }).then(function(json) {
      this.props.emotionsChanged(json[0].scores)
    }.bind(this))
  },
  render: function() {
    return (
      <div>
        <div className="col-sm-6">
          <Webcam ref="webcam" 
                  screenshotFormat="image/jpeg"
                  width="320"
                  height="240"
                  audio={false} />
          <p><a href="#" className="btn btn-success" onClick={this.capture}>How's it going?</a></p>
        </div>
        <div className="col-sm-6">
          <EmotionsChart emotionsData={this.props.emotionsData} />
        </div>
      </div>
    )
  }

})

var toBlob = function(dataURI, callback) {
  var byteString = atob(dataURI.split(',')[1])
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
  var ab = new ArrayBuffer(byteString.length)
  var ia = new Uint8Array(ab)
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }
  var bb = new Blob([ab])
  return bb
}

module.exports = Emotions