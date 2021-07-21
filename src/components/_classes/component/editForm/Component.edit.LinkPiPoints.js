/* eslint-disable max-len */
export default [
  // {
  //   weight: 0,
  //   type: 'textfield',
  //   input: true,
  //   key: 'label',
  //   label: 'Label',
  //   placeholder: 'Field Label',
  //   tooltip: 'The label for this field that will appear next to it.',
  //   validate: {
  //     required: true
  //   }
  // },
  {
    type: 'select',
    input: true,
    key: 'piPoint01',
    label: 'PI Point',
    weight: 10,
    tooltip: 'The PI Point to which the data input will refer.',
    dataSrc: 'custom',
    valueProperty: 'value_drop_down',
    data: {
      custom(context) {
        var values_pi_point = [];
        values_pi_point.push(
          { label: 'Point1', value_drop_down: 'point_1' },
          { label: 'Point2', value_drop_down: 'point_2' },
          { label: 'Point3', value_drop_down: 'point_3' },
          { label: 'Point4', value_drop_down: 'point_4' }
        );
        context.utils.eachComponent(context.instance.options.editForm.components, function(component, path) {
          if (component.key !== context.data.key) {
            values_pi_point.push({
              label: component.label || component.key,
              value: path
            });
          }
        });
        return values_pi_point;
      }
    },
  },
  {
    type: 'select',
    input: true,
    key: 'inputType01',
    label: 'Input Type',
    weight: 20,
    tooltip: 'The Type of Input required.',
    dataSrc: 'custom',
    valueProperty: 'value_input_type',
    data: {
      custom(context) {
        var values_input_type = [];
        values_input_type.push(
                  { label: 'Textfield', value_input_type: '1' },
                  { label: 'Number', value_input_type: '2' }
        );
        context.utils.eachComponent(context.instance.options.editForm.components, function(component, path) {
          if (component.key !== context.data.key) {
            values_input_type.push({
              label: component.label || component.key,
              value: path
            });
          }
        });
        return values_input_type;
      }
    },
  },
  {
    weight: 25,
    type: 'MyNewComponent',
    label: 'myNewComponent',
    tooltip: 'This determines if the value will be Read Only if checked.',
    key: 'my_new_component',
    input: true
  },
  {
    weight: 30,
    type: 'checkbox',
    label: 'Read Only',
    tooltip: 'This determines if the value will be Read Only if checked.',
    key: 'read_only',
    input: true
  },
  // {
  //   weight: 40,
  //   type:'nestedarray',
  //   label: 'Check the Matrix',
  //   key: 'huh',
  //   input: true
  // }

];
/* eslint-enable max-len */
