import './header.scss';
import React from 'react';

export default class Header extends React.Component {

	constructor() {
        super();
		this.getCurrent = this.getCurrent.bind(this);
    }

	getCurrent() {
		console.log('you dont know');
	}

    render() {
        return (
            <div>
                <div className="nav-bar">
                    <div className="logo">
                        <img src="/src/components/header/logo.svg"/>
                        <div className="name">BRANDON <span className="last">PADILLA</span></div>
                    </div>
                    <nav>
                        <div className="nav-item sel" id="nav-1" onClick={this.getCurrent}>
                            <div className="nav-text" >about</div>
                        </div>
                        <div className="nav-item" id="nav-2">
                            <div className="nav-text">project</div>
							<div className="tabs">
								<div className="box num1">1</div>
								<div className="box num2">2</div>
								<div className="box num3">3</div>
								<div className="box num4">4</div>
							</div>
                        </div>
                        <div className="nav-item" id="nav-3">
                            <div className="nav-text">contact</div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}
