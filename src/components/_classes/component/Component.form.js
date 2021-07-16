import _ from 'lodash';

import EditFormUtils from './editForm/utils';
import LinkPiPoints from './editForm/Component.edit.LinkPiPoints';
export default function(...extend) {
  const components = _.cloneDeep([
    {
      type: 'tabs',
      key: 'tabs',
      components: [
        // {
        //     label: 'Workflow Details',
        //     key: 'workflow_details',
        //     weight: 0,
        //     components: WorkflowDetails
        // },
        // {
        //   label: "User Roles",
        //   key: "user_roles",
        //   weight: 10,
        //   components: UserRoles
        // },
        {
          label: 'Link pi points',
          key: 'linkPiPoints',
          weight: 20,
          components: LinkPiPoints
        },
        // {
        //   label: 'old display',
        //   key: 'display',
        //   weight: 30,
        //   components: ComponentEditDisplay
        // }
        // {
        //   label: 'Display',
        //   key: 'display',
        //   weight: 0,
        //   components: ComponentEditDisplay
        // },
        // {
        //   label: 'Data',
        //   key: 'data',
        //   weight: 10,
        //   components: ComponentEditData
        // },
        // {
        //   label: 'Validation',
        //   key: 'validation',
        //   weight: 20,
        //   components: ComponentEditValidation
        // },
        // {
        //   label: 'API',
        //   key: 'api',
        //   weight: 30,
        //   components: ComponentEditAPI
        // },
        // {
        //   label: 'Conditional',
        //   key: 'conditional',
        //   weight: 40,
        //   components: ComponentEditConditional
        // },
        // {
        //   label: 'Logic',
        //   key: 'logic',
        //   weight: 50,
        //   components: ComponentEditLogic
        // },
        // {
        //   label: 'Layout',
        //   key: 'layout',
        //   weight: 60,
        //   components: ComponentEditLayout
        // },
        // {
        //   label: 'Addons',
        //   key: 'addons',
        //   weight: 70,
        //   components: ComponentEditAddons
        // },
      ]
    }
  ]).concat(extend.map((items) => ({
    type: 'tabs',
    key: 'tabs',
    components: _.cloneDeep(items),
  })));
  return {
    components: _.unionWith(components, EditFormUtils.unifyComponents).concat({
      type: 'hidden',
      key: 'type'
    })
  };
}
