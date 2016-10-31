var React = require("react");
var styles =require("../styles/indexCSS");
require("../styles/output.css");

var Output = function(props){

	return(
		<div className="col-sm-6 col-xs-12 output" style={styles.column}>
		<div style={styles.input} dangerouslySetInnerHTML={{__html : props.text}}/>
			
		</div>

		)
}

module.exports = Output;