'use strict';

const assert = require('proclaim');
const runPa11yCli = require('../helper/pa11y-cli');

describe('CLI enhanced field events', function() {
	let pa11yResponse;

	describe('when setting and clearing field values with enhanced events', function() {

		before(async function() {
			pa11yResponse = await runPa11yCli(`${global.mockWebsiteAddress}/actions-field-events-enhanced`, {
				arguments: [
					'--config', './mock/config/actions-field-events-enhanced.json',
					'--reporter', 'json'
				]
			});
		});

		it('should trigger proper event sequences when setting field values', function() {
			assert.isArray(pa11yResponse.json);
			assert.lengthEquals(pa11yResponse.json, 0);
		});

	});

});