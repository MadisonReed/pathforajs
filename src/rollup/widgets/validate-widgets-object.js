/** @module pathfora/widgets/validate-widgets-object */

/**
 * Validate that the widget has correct position field
 * for its layout and type
 *
 * @exports validateWidgetPosition
 * @params {object} widget
 * @params {object} config
 */
export default function validateWidgetsObject (widgets) {
  if (!widgets) {
    throw new Error('Widgets not specified');
  }

  if (!(widgets instanceof Array) && widgets.target) {
    widgets.common = widgets.common || [];

    for (var i = 0; i < widgets.target.length; i++) {
      if (!widgets.target[i].segment) {
        throw new Error('All targeted widgets should have segment specified');
      } else if (widgets.target[i].segment === '*') {
        widgets.common = widgets.common.concat(widgets.target[i].widgets);
        widgets.target.splice(i, 1);
      }
    }
  }
}