var React = require("react");
var styles = require("../styles/indexCSS");

function Header(props){
	return(

		<div style={styles.header}>
			<p>Markdown Previewer: FreeCodeCamp</p>
		</div>

	)
}

module.exports = Header;