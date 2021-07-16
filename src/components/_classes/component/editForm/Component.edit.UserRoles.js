/* eslint-disable max-len */
export default [
  {
    type: 'select',
    input: true,
    key: 'equipments',
    label: 'Equipments',
    weight: 0,
    tooltip: 'Redraw this component if another component changes. This is useful if interpolating parts of the component like the label.',
    dataSrc: 'custom',
    valueProperty: 'value',
    data: {
      custom(context) {
        var values = [];
        values.push({ label: 'Any Change', value: 'data' });
        context.utils.eachComponent(context.instance.options.editForm.components, function(component, path) {
          if (component.key !== context.data.key) {
            values.push({
              label: component.label || component.key,
              value: path
            });
          }
        });
        return values;
      }
    },
  }
];
/* eslint-enable max-len */
