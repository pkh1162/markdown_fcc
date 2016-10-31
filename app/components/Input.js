var React = require("react");
var PropTypes = React.PropTypes;
var styles = require("../styles/indexCSS");

var Input = function(props){

	return(
		<div className="col-sm-6 col-xs-12" style={styles.column}>
		<textarea rows="50" placeholder={props.text} value={props.text} style={styles.input} onChange={props.onTextInput}/>
		</div>

		)
}

Input.propTypes = {
	text : PropTypes.string,
	onTextInput : PropTypes.func
}



module.exports = Input;