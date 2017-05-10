/** @module pathfora/display-conditions/hide-after-action-checker */

import { PREFIX_CONFIRM, PREFIX_CANCEL, PREFIX_CLOSE } from '../globals/config';

import readCookie from '../utils/cookies/read-cookie';

export default function hideAfterActionChecker (hideAfterActionConstraints, widget) {
  var parts,
      valid = true,
      now = Date.now(),
      confirm = readCookie(PREFIX_CONFIRM + widget.id),
      cancel = readCookie(PREFIX_CANCEL + widget.id),
      closed = readCookie(PREFIX_CLOSE + widget.id);

  if (hideAfterActionConstraints.confirm && confirm) {
    parts = confirm.split('|');

    if (parseInt(parts[0], 10) >= hideAfterActionConstraints.confirm.hideCount) {
      valid = false;
    }

    if (typeof parts[1] !== 'undefined' && (Math.abs(parts[1] - now) / 1000) < hideAfterActionConstraints.confirm.duration) {
      valid = false;
    }
  }

  if (hideAfterActionConstraints.cancel && cancel) {
    parts = cancel.split('|');

    if (parseInt(parts[0], 10) >= hideAfterActionConstraints.cancel.hideCount) {
      valid = false;
    }

    if (typeof parts[1] !== 'undefined' && (Math.abs(parts[1] - now) / 1000) < hideAfterActionConstraints.cancel.duration) {
      valid = false;
    }
  }

  if (hideAfterActionConstraints.closed && closed) {
    parts = closed.split('|');

    if (parseInt(parts[0], 10) >= hideAfterActionConstraints.closed.hideCount) {
      valid = false;
    }

    if (typeof parts[1] !== 'undefined' && (Math.abs(parts[1] - now) / 1000) < hideAfterActionConstraints.closed.duration) {
      valid = false;
    }
  }

  return valid;
}
