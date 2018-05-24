import { h, Component } from 'preact';
import Card from '../../components/card'
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
				<Card />
			</div>
		);
	}
}
