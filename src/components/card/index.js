import {h, Component} from 'preact'
import style from './style'

export default class Card extends Component {
    render (){

        let containerClasses = [style.card_container, style.green].join(' ');
        
        return (
            <div class={containerClasses}>
                <h3>
                    Card header
                </h3>
                <div>
                    <p>
                        Card content    
                    </p>
                </div>
            </div>
        );
    }
}