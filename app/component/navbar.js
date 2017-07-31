/**
 * Created by AlexWang on 2/12/2016.
 */
import React, {
	Component
} from 'react';
import $ from 'jquery';
require("./navbar.less")



class Navbar extends Component {
	constructor() {
		super();

	}



	componentWillMount() {

	}
	componentDidMount() {
		
	}

	render() {
		return (
<div className="nav-bar-top">
<div className="nav-bar-container">
<div className="nav-bar-logo">Steven Fu</div>

<div className="nav-bar-button" id="contactme"><img width="20px" src="./img/look.svg"></img><span> My Resume</span></div>

</div>
</div>
      );
	}



}
/*
<div className="nav-bar-button" id="downloadresume"><img width="18px" src="./img/download.svg"></img><span> Resume</span></div>
<Popover></Popover>*/

export default Navbar;