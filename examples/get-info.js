/**
 * @author Jonathan Cardoso Machado
 * @license MIT
 * @copyright 2015, Jonathan Cardoso Machado
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Example that shows all information you can get from a single request.
 */
var Curl = require('../lib/Curl');

var curl = new Curl(),
  url = 'http://www.google.com';

curl.setOpt(Curl.option.URL, url);
curl.setOpt(Curl.option.FOLLOWLOCATION, true);
curl.setOpt(Curl.option.COOKIEFILE, ''); //enable cookies
curl.perform();

curl.on('end', function() {
  for (var infoName in Curl.info) {
    if (Curl.info.hasOwnProperty(infoName) && infoName !== 'debug') {
      console.info(infoName, ': ', this.getInfo(infoName));
    }
  }

  this.close();
});

curl.on('error', curl.close.bind(curl));
