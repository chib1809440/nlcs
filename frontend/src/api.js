import axios from 'axios';
import { apiUrl } from './config';
export async function getProduct(_id) {
	try {
		const response = await axios({
			url: `${apiUrl}api/products/${_id}`,
			method: 'GET',
			header: {
				'Content-Type': 'application/json',
			},
		});
		if (response.statusText !== 'OK') {
			throw new Error(response.data.message);
		}
		return response.data;
	} catch (e) {
		console.log(e);
		return { error: e.response.data.message || e.message };
	}
}
