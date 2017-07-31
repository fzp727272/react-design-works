/**
 * Created by AlexWang on 2/12/2016.
 */
import React, {
	Component
} from 'react';
import $ from 'jquery';
require("./loadingPage.less");


class LoadingPage extends Component {
	constructor() {
		super();

	}



	componentWillMount() {

	}
	componentDidMount() {
			function autoType(elementClass, typingSpeed) {
				var thhis = $(elementClass);
				thhis.css({
					"display": "inline-block"
				});
			
				thhis = thhis.find(".text-js");
				var text = thhis.text().trim().split('');
				var amntOfChars = text.length;
				var newString = "";
				thhis.text("|");
				setTimeout(function() {
					thhis.css("opacity", 1);
					thhis.prev().removeAttr("style");
					thhis.text("");
					for (var i = 0; i < amntOfChars; i++) {
						(function(i, char) {
							setTimeout(function() {
								newString += char;
								var newhtml = newString + '<span class="cursor" >|</span>';
								thhis.html(newhtml);

							}, i * typingSpeed);
						})(i + 1, text[i]);
					}
				}, 800);
			}
$(document).ready(function(){
  // Now to start autoTyping just call the autoType function with the 
  // class of outer div
  // The second paramter is the speed between each letter is typed.   
  autoType(".type-js",100);

  
});
	}

	render() {
		return (
		<div className="loading-page " style={this.props.loadpageStyle} >
			<div style={{   position: 'fixed',width: '100%',height: '100%',padding: '1.5em',}}>
	           <div style={{ border: '1px solid rgba(255,255,255,0.5)',height: '100%'}}></div>
	           <div className="closebutton" onClick={this.props.showGallery}>
              <span className="closeicon rounded thick"></span>
               
	           </div>


	        </div>
			 <div className="container">
		       <div className=" type-js headline">
		      <div className="main-title">WELCOME</div>
		        <div className="divideline col-lg-1 col-md-1 col-xs-2"></div>
		        <div className="row" style={{marginTop:'1em'}}>
	             <h1 className="text-js col-lg-12">Hi, My name is Steven fu.I am an UX designer,
	             I am crazy about design and also like coding.Here is my personal website.Click the close button and see my design works.
	             </h1>
	             </div>
	           
	           </div>
	         </div>
		</div>)
	}



}

export default LoadingPage;