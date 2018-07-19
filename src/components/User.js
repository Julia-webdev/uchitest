import React, {Component} from 'react'
import Arrow from '../images/arrow_inactive.png';
import Check from '../images/check.png';

import './User.css'

class User extends Component {
	render() {
		const {user} = this.props
		return (
			<div className="user-card">
				<div className="user-card__check">
						<img src={Check} alt="check"/>
				</div>
				<div className="user-card__image">
					<img src={user.image} alt="user"/>
				</div>
				<div className="user-card__name">
					<h2>
						{user.name}
					</h2>
				</div>
				<div className="user-card__descr">
					<h3>
						{user.description.substr(0, user.description.indexOf(" ")) + ' ...'}
					</h3>
				</div>
				<div className="user-card__email">
					<span>
						<a href="mailto:{user.email}">
							{user.email}
						</a>
					</span>
				</div>
				<div className="user-card__phone">
					<span>
						{user.phone}
					</span>
				</div>
				<div className="user-card__button">
					<button>
						Профиль
						<img src={Arrow} alt="arrow"/>
					</button>  
				</div>
			</div>
		)
	}
}

export default User