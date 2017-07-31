/**
 * Created by AlexWang on 2/12/2016.
 */
import React, {
	Component
} from 'react';
import $ from 'jquery';
require("./popover.less")



class Popover extends Component {
	constructor() {
		super();

	}



	componentWillMount() {

	}
	componentDidMount() {
	
	}

	render() {
		return (
			<div className="popover">
    <div className="popover__message">Please, submit your changes to apply new configuration</div>
</div>
         
      );
	}



}

export default Popover;