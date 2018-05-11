var { After, Before, Status } = require('cucumber');

After(function (testCase) {
  var world = this;
  if (testCase.result.status === Status.FAILED) {
    return this.browser.saveScreenshot().then(function(screenShot) {
      world.attach(screenShot, 'image/png')
      }).end();
  } else {
   // return this.browser.end();
  }
});
