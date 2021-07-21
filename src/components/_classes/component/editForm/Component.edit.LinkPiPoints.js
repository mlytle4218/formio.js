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
    valueProperty: 'valueDropDown',
    data: {
      custom(context) {
        var valuePiPointArray = [];
        valuePiPointArray.push(
          { label: 'Point1', valueDropDown: 'point_1' },
          { label: 'Point2', valueDropDown: 'point_2' },
          { label: 'Point3', valueDropDown: 'point_3' },
          { label: 'Point4', valueDropDown: 'point_4' }
        );
        context.utils.eachComponent(context.instance.options.editForm.components, function(component, path) {
          if (component.key !== context.data.key) {
            valuePiPointArray.push({
              label: component.label || component.key,
              value: path
            });
          }
        });
        return valuePiPointArray;
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
    valueProperty: 'valueInputType',
    data: {
      custom(context) {
        var valueInputTypeArray = [];
        valueInputTypeArray.push(
                  { label: 'Textfield', valueInputType: '1' },
                  { label: 'Number', valueInputType: '2' }
        );
        context.utils.eachComponent(context.instance.options.editForm.components, function(component, path) {
          if (component.key !== context.data.key) {
            valueInputTypeArray.push({
              label: component.label || component.key,
              value: path
            });
          }
        });
        return valueInputTypeArray;
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
