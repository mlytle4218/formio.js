/* eslint-disable max-len */
export default [
  {
    weight: 0,
    type: 'textfield',
    input: true,
    key: 'workflow_name',
    label: 'Workflow Name',
    placeholder: 'Workflow name',
    tooltip: 'The label for this field that will appear next to it.',
    validate: {
      required: true
    }
  },
  {
    type: 'select',
    input: true,
    key: 'workflow_group',
    label: 'Workflow Group',
    weight: 20,
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
  },
  {
    type: 'select',
    input: true,
    key: 'days',
    label: 'Days',
    weight: 30,
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
  },
  {
    type: 'select',
    input: true,
    key: 'hours',
    label: 'Hours',
    weight: 40,
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
  },
  {
    type: 'select',
    input: true,
    key: 'minutes',
    label: 'Minutes',
    weight: 50,
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
  },
  {
    type: 'checkbox',
    input: true,
    weight: 200,
    key: 'dbIndex',
    label: 'Database Index',
    tooltip: 'Set this field as an index within the database. Increases performance for submission queries.'
  }
];
/* eslint-enable max-len */
