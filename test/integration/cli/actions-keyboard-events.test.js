'use strict';

const assert = require('proclaim');
const runPa11yCli = require('../helper/pa11y-cli');

describe('CLI keyboard events', function() {
	let pa11yResponse;

	describe('when setting and clearing field values with keyboard events', function() {

		before(async function() {
			pa11yResponse = await runPa11yCli(`${global.mockWebsiteAddress}/actions-keyboard-events`, {
				arguments: [
					'--config', './mock/config/actions-keyboard-events.json',
					'--reporter', 'json'
				]
			});
		});

		it('should trigger keyboard events when setting and clearing field values', function() {
			assert.isArray(pa11yResponse.json);
			assert.lengthEquals(pa11yResponse.json, 0);
		});

	});

});