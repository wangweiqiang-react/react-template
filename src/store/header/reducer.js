import * as types from './actionsType';
const defaultState = {
	userInfo: {
		username: '佚名',
		deptName: '小吉',
	},
	menuToggle: false,
	marqueeTip: 'react重构精准测试自动化平台'
}

export default (state = defaultState, action) => {
	if (action.type === types.USER_INFO) {
		return {
			...state
		}
	} else if (action.type === types.IS_TOOGLE_MENU) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.menuToggle = action.value;
		return newState
	}
	return state
}