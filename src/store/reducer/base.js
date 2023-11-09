import * as TYPES from "../action-types";
import _ from "lodash";

let initial = {
	info: null,
};

export default function baseReducer(state = initial, action) {
	const newState = _.cloneDeep(state);
	switch (action.type) {
		default:
	}
	return state;
}
