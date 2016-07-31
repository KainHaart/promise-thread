const createThread = require('../index');

const phi = {
	prelast: 0,
	last: 1,
	next: function(comment) {
		return new Promise(resolve => {
			const value = this.prelast + this.last;
			setTimeout(() => {
				this.prelast = this.last;
				this.last = value;
				console.log(value);
				resolve(value);
			}, Math.random() * 1000);
		})
	}
};

const thread = createThread(phi);

for (let i = 0; i < 10; i++) {
	thread.next();
}
// thread._.getHead().then(() => console.log('done'));
