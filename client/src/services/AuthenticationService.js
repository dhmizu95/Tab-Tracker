import Api from './Api';

export default {
	register(creditial) {
		return Api().post('register', creditial);
	},
};
