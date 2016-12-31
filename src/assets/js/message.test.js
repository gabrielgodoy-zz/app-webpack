import * as chai from 'chai';
let expect = chai.expect;
import message from './message';

describe('message', function() {
	it('should return message', () => {
		expect(message('Hello')).to.equal('Hello');
	});
});
