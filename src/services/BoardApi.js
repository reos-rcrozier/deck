/*
 * @copyright Copyright (c) 2018 Michael Weimann <mail@michael-weimann.eu>
 *
 * @author Michael Weimann <mail@michael-weimann.eu>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import axios from 'nextcloud-axios'

/**
 * This class handles all the api communication with the Deck backend.
 */
export class BoardApi {

	url(url) {
		url = `/apps/deck${url}`
		return OC.generateUrl(url)
	}

	/**
	 * Creates a new board.
	 *
	 * @param {{String title, String color}} boardData The board data with title and color in hex format, e.g. "#ff0000"
	 * @return Promise
	 */
	createBoard(boardData) {
		boardData.color = boardData.color.substr(1)

		return axios.post(this.url('/boards'), boardData)
			.then(
				(response) => {
					return Promise.resolve(response.data)
				},
				(err) => {
					return Promise.reject(err)
				}
			)
			.catch((err) => {
				return Promise.reject(err)
			})
	}

	loadBoards() {
		return axios.get(this.url('/boards'))
			.then(
				(response) => {
					return Promise.resolve(response.data)
				},
				(err) => {
					return Promise.reject(err)
				}
			)
			.catch((err) => {
				return Promise.reject(err)
			})
	}

	loadById(id) {
		return axios.get(this.url(`/boards/${id}`))
			.then(
				(response) => {
					return Promise.resolve(response.data)
				},
				(err) => {
					return Promise.reject(err)
				}
			)
			.catch((err) => {
				return Promise.reject(err)
			})
	}

}
