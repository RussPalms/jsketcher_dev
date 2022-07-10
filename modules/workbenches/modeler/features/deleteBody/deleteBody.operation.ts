import { roundValueForPresentation as r } from 'cad/craft/operationHelper';
import { ApplicationContext } from "context";
import { EntityKind } from "cad/model/entities";
import { OperationDescriptor } from "cad/craft/operationPlugin";
import {MShell} from "cad/model/mshell";

interface DeleteBodyParams {
  tools: MShell[];
}

export const DeleteBodyOperation: OperationDescriptor<DeleteBodyParams> = {
  id: 'DELETE_BODY',
  label: 'DeleteBody',
  icon: 'img/cad/intersection',
  info: 'Delete Bodies',
  paramsInfo: ({ tools, DeleteBody }) => `(${r(tools)} ${r(DeleteBody)})`,
  run: (params: DeleteBodyParams, ctx: ApplicationContext) => {
    let occ = ctx.occService;
    const oci = occ.commandInterface;

    let returnObject = {
      created: [],
      consumed: params.tools
    }
    return returnObject;

  },
  form: [
    {
      type: 'selection',
      name: 'tools',
      capture: [EntityKind.SHELL],
      label: 'Tools',
      optional: false,
      multi: true,
      defaultValue: {
        usePreselection: true,
        preselectionIndex: 0
      },
    },
  ],
}