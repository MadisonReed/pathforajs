/** @module pathfora/integrations/on-google-load */

import autoCompleteGoogleData from './auto-complete-google-data';
import onGoogleClick from './on-google-click';

import window from '../dom/window';
import document from '../dom/document';

import { pathforaDataObject } from '../globals/config';

export default function onGoogleLoad () {
  window.gapi.load('auth2', function () {
    var auth2 = gapi.auth2.init({
      clientId: pathforaDataObject.socialNetworks.googleClientID,
      cookiepolicy: 'single_host_origin',
      scope: 'profile'
    });

    var googleBtns = Array.prototype.slice.call(document.querySelectorAll('.social-login-btn.google-login-btn span'));

    auth2.then(function () {
      var user = auth2.currentUser.get();
      autoCompleteGoogleData(user, googleBtns);

      googleBtns.forEach(function (element) {
        if (element.parentElement) {
          element.parentElement.onclick = function () {
            onGoogleClick(googleBtns);
          };
        }
      });
    });
  });
}
