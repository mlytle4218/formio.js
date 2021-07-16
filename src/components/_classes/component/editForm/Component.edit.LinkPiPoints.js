/* eslint-disable max-len */
export default [
  {
    weight: 0,
    type: 'textfield',
    input: true,
    key: 'label',
    label: 'Label',
    placeholder: 'Field Label',
    tooltip: 'The label for this field that will appear next to it.',
    validate: {
      required: true
    }
  },
  {
    type: 'select',
    input: true,
    key: 'piPoint01',
    label: 'PI Point',
    weight: 10,
    tooltip: 'The PI Point to which the data input will refer.',
    dataSrc: 'custom',
    valueProperty: 'value',
    data: {
      custom(context) {
        var values = [];
        values.push(
          { label: 'Point1', value: 'point_1' },
          { label: 'Point2', value: 'point_2' },
          { label: 'Point3', value: 'point_3' },
          { label: 'Point4', value: 'point_4' }
        );
        context.utils.eachComponent(context.instance.options.editForm.components, function (component, path) {
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
    key: 'inputType',
    label: 'Input Type',
    weight: 20,
    tooltip: 'The Type of Input required.',
    dataSrc: 'custom',
    valueProperty: 'value',
    data: {
      custom(context) {
        var values = [];
        values.push(
          { label: 'Textfield', value: '1' },
          { label: 'Number', value: '2' }
        );
        context.utils.eachComponent(context.instance.options.editForm.components, function (component, path) {
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
    weight: 30,
    type: 'checkbox',
    label: 'Read Only',
    tooltip: 'This determines if the value will be Read Only if checked.',
    key: 'read_only',
    input: true
  },
];
/* eslint-enable max-len */
