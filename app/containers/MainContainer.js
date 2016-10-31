var React = require("react");
var styles = require("../styles/indexCSS");
var Header = require("../components/Header");
var Footer = require("../components/Footer");

var MainContainer = React.createClass({

	render : function(){
		return(
			<div>
			<Header />
			<div className="row" style={styles.margin}>
			{this.props.children}
			</div>
			<Footer />
			</div>
		)
	}
	

});

module.exports = MainContainer;