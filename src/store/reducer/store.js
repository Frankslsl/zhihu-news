import * as TYPES from "../action-types";
import _ from "lodash";

let initial = {
	list: null,
};

export default function storeReducer(state = initial, action) {
	const newState = _.cloneDeep(state);
	switch (action.type) {
		default:
	}
	return state;
}
