import React from 'react';
import './eventsGenre.css'

    
class EventsGenre extends React.Component {
        
    render() {
        return (
            
            <div className='center valign-wrapper'>
                <div class="color-list">
                    <section class="color" id="clean">
                        <h2 class="name">Art</h2>
                        <ul class="details">
                            <li>#A7D2CB</li>
                            <li>RGB(167,210,203)</li>
                            <li><button class="pure-material-button-contained">Button</button></li>
                        </ul>
                    </section>
                    <section class="color" id="butter">
                        <h2 class="name">Dance</h2>
                        <ul class="details">
                            <li>#F2D388</li>
                            <li>RGB(242,211,136)</li>
                            <li><button class="pure-material-button-contained">Button</button></li>
                        </ul>
                    </section>
                    <section class="color" id="salmon">
                        <h2 class="name">Music2</h2>
                        <ul class="details">
                            <li>#C98474</li>
                            <li>RGB(201,132,116)</li>
                            <li><button class="pure-material-button-contained">Button</button></li>
                        </ul>
                    </section>
                    <section class="color" id="eggplant">
                        <h2 class="name">Singing</h2>
                        <ul class="details">
                            <li>#874C62</li>
                            <li>RGB(135,76,98)</li>
                            <li><button class="pure-material-button-contained">Button</button></li>
                        </ul>
                    </section>
                    <section class="color" id="eggplant">
                        <h2 class="name">Singing</h2>
                        <ul class="details">
                            <li>#874C62</li>
                            <li>RGB(135,76,98)</li>
                            <li><button class="pure-material-button-contained">Button</button></li>
                        </ul>
                    </section>
                    <section class="color" id="Stage">
                        <h2 class="name">Stage</h2>
                        <ul class="details">
                            <li>#874C62</li>
                            <li>RGB(135,76,98)</li>
                            <li><button class="pure-material-button-contained">Button</button></li>
                        </ul>
                    </section>
                </div>
            </div> 
        );
    }
}

export default EventsGenre;