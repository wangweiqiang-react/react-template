import axios from 'axios';
import * as types from './actionsType'

export const changeMenuToggle = (value) => ({
	type: types.IS_TOOGLE_MENU,
	value
});



// export const getDetail = (id) => {
// 	return (dispatch) => {
// 		axios.get('/api/detail.json?id=' + id).then((res) => {
// 			const result = res.data.data;
// 			dispatch(changeDetail(result.title, result.content));
// 		}).catch(() => {
//
// 		})
// 	}
// };