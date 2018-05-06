"use strict";

const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()



Given('I go to figure1', function(callback) {
  this.browser
    .init()
    .url('https://app.figure1.com/account/register').then(function() {
      callback();
    })
})

When('I Register and go into', function(callback) {
  this.browser
    .waitForVisible('.register-page__username-input')
    .setValue(".register-page__username-input", Math.random().toString(36).substring(7))
    .setValue(".register-page__email-input", Math.random().toString(36).substring(7) + "@yahoo.ca")
    .setValue(".register-page__password-input", "password")
    .setValue(".register-page__confirm-password-input", "password")
    .addValue('.register-page__specialties-list', 'Physician') 
    .addValue('.register-page__specialties-other-list', 'Anesthesiology')
    .scroll('.register-page__terms-checkbox')
    .click(".register-page__terms-checkbox")
    .click(".register-page__submit-button")
    .then(function(){
      callback();
 }).catch(function(error){
      callback(error);
    })
  })

  Then('I should see confirm button', function(callback) {
    this.browser
     .waitForVisible(".left-panel", 5000)
      .isVisible(".left-panel").then(function(result){
         // result.should.equal("Confirm");
         result.should.be.true;
          callback();
    }).catch(function(error){
      callback(error);
    })

  })



