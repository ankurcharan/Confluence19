import React from "react";

class Jumbotron extends React.Component {

    render() {

        return (
            <div id="index-banner" class="parallax-container">
                <div class="section no-pad-bot">
                    <div class="container">
                        <br />
                        <br />
                        <h1 class="header center teal-text text-lighten-2">
                            {this.props.title}
                        </h1>
                        <div class="row center">
                            <h5 class="header col s12 light">
                                {this.props.text}
                            </h5>
                        </div>
                        {/*<div class="row center">*/}
                            {/*<a href="https://www.instagram.com/ankurcharan/" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">*/}
                                {/*Get to know me :)*/}
                            {/*</a>*/}
                        {/*</div>*/}
                        <br />
                        <br />
                    </div>
                </div>
                <div class="parallax">
                    <img src={this.props.photo} alt="cover" />
                </div>
            </div>
        );
    }
}

export default Jumbotron;