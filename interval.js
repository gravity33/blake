function _0x325f(_0x3769bf, _0x438651) {
	const _0xd40cf7 = _0xd40c();
	return _0x325f = function(_0x325ff0, _0x33dd8c) {
		_0x325ff0 = _0x325ff0 - 0x146;
		let _0x38cfdc = _0xd40cf7[_0x325ff0];
		return _0x38cfdc;
	}, _0x325f(_0x3769bf, _0x438651);
}(function(_0x19f30b, _0x2a405b) {
	const _0x4ed180 = _0x325f,
		_0x213677 = _0x19f30b();
	while (!![]) {
		try {
			const _0x44d43e = -parseInt(_0x4ed180(0x14f)) / 0x1 * (parseInt(_0x4ed180(0x155)) / 0x2) + -parseInt(_0x4ed180(0x153)) / 0x3 + parseInt(_0x4ed180(0x14c)) / 0x4 + -parseInt(_0x4ed180(0x152)) / 0x5 * (-parseInt(_0x4ed180(0x14a)) / 0x6) + parseInt(_0x4ed180(0x151)) / 0x7 * (-parseInt(_0x4ed180(0x14d)) / 0x8) + -parseInt(_0x4ed180(0x149)) / 0x9 * (parseInt(_0x4ed180(0x14e)) / 0xa) + parseInt(_0x4ed180(0x146)) / 0xb;
			if (_0x44d43e === _0x2a405b) break;
			else _0x213677['push'](_0x213677['shift']());
		} catch (_0x5f38f1) {
			_0x213677['push'](_0x213677['shift']());
		}
	}
}(_0xd40c, 0x708de));

function _0xd40c() {
	const _0x311374 = ['forEach', '4239auQcyW', '809106nXIEcN', 'none', '1003424gJiesg', '8vRYiiI', '3370gHFBUN', '11iwODWX', 'length', '3550106WGCuKD', '30ukgoyM', '2614515iJimkk', 'display', '4742NriSNd', '10609841MJuoDg', 'querySelectorAll'];
	_0xd40c = function() {
		return _0x311374;
	};
	return _0xd40c();
}
let initialInterval = 0x46,
	slowInterval = 0x46,
	interval = initialInterval;

function hideWarningElements() {
	const _0x298d09 = _0x325f,
		_0x99e0ed = document[_0x298d09(0x147)]('[role=\x22alert\x22][type=\x22WARNING\x22][data-test-id^=\x22alert-wrapper-\x22]');
	_0x99e0ed[_0x298d09(0x150)] > 0x0 ? (_0x99e0ed[_0x298d09(0x148)](_0x334e80 => {
		const _0x420050 = _0x298d09;
		_0x334e80['style'][_0x420050(0x154)] = _0x420050(0x14b);
	}), interval = initialInterval) : interval = slowInterval, setTimeout(hideWarningElements, interval);
}
hideWarningElements();