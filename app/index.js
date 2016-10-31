var React = require("react");
var ReactDOM = require("react-dom");
var MainContainer = require("./containers/MainContainer");
var Input = require("./components/Input");
var Output = require("./components/Output");
var initialText = require("./data/initialText").text;
var marked = require("marked");
require("./styles/main.css");



var Home = React.createClass({
	getInitialState : function(){
		return {
			text : initialText,
			outputText : ""
			
		}

	},
	componentDidMount : function(){
		this.setState({
			outputText : this.markDown(this.state.text)
		})
	},
	handleTextInput : function(event){
		//console.log(event.target.value);
		this.setState({
			text : event.target.value,
			outputText : this.markDown(event.target.value)
		});
			
	},
	markDown : function(input){
		var markedDown = marked(input);
		return markedDown;

	},
	render: function(){
		return (
			<MainContainer>
				<Input 
					text={this.state.text}
					onTextInput={this.handleTextInput}/>
				<Output 
					text={this.state.outputText}/>
			</MainContainer>
		)
	}
});

ReactDOM.render(<Home/>, document.getElementById("app"));