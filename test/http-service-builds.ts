import test from 'tape';
import getApiRoot from '../build/src/http.service.js';
import getPath from '../build/src/http.service_config.js';

test('test results', (t) => {
	t.same(getApiRoot(), "https://github.com/maxtoan/http-service-builds.git",
    'it should be "hola"');

    t.same(getPath(), "https://github.com/maxtoan/http-service-builds.git",
    'it should be "hola2"');

  	t.end();
});