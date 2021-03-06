/** @module pathfora/widgets/validate-widget-position */

/**
 * Validate that the widget has correct position field
 * for its layout and type
 *
 * @exports validateWidgetPosition
 * @params {object} widget
 * @params {object} config
 */
export default function validateWidgetPosition (widget, config) {
  var choices;

  switch (config.layout) {
  case 'modal':
    choices = [''];
    break;
  case 'slideout':
    choices = ['bottom-left', 'bottom-right', 'left', 'right', 'top-left', 'top-right'];
    break;
  case 'bar':
    choices = ['top-absolute', 'top-fixed', 'bottom-fixed'];
    break;
  case 'button':
    choices = ['left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'];
    break;
  case 'folding':
    choices = ['left', 'bottom-left', 'bottom-right'];
    break;
  case 'inline':
    choices = [];
    break;
  }

  if (choices.indexOf(config.position) === -1) {
    // NOTE config.position + ' is not valid position for ' + config.layout
  }
}
