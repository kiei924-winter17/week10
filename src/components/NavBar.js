var React = require('react')
var NavBarItem = require('./NavBarItem')

var NavBar = React.createClass({
  render: function() {
    return (
      <div className="sort row">
        <div className="col-sm-12">
          <ul className="nav nav-pills">
            <NavBarItem view="reviews" title="Reviews" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
            <NavBarItem view="jukebox" title="Jukebox" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
            <NavBarItem view="emotions" title="Emotions" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = NavBar