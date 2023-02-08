import { createAction } from '@reduxjs/toolkit'
import {actionType} from '../containers' 

export const ItemAction = {
    getRequest : createAction(actionType.Items.GET_ITEMS_REQUEST),
    getSuccess : createAction(actionType.Items.GET_ITEMS_SUCCESS),
    getFailure : createAction(actionType.Items.GET_ITEMS_FAILURE),

    addRequest : createAction(actionType.Items.ADD_ITEMS_REQUEST),
    addSuccess : createAction(actionType.Items.ADD_ITEMS_SUCCESS),
    addFailure : createAction(actionType.Items.ADD_ITEMS_FAILURE),

    deleteRequest : createAction(actionType.Items.DELETE_ITEMS_REQUEST),
    deleteSuccess : createAction(actionType.Items.DELETE_ITEMS_SUCCESS),
    deleteFailure : createAction(actionType.Items.DELETE_ITEMS_FAILURE),

    updateRequest : createAction(actionType.Items.UPDATE_ITEMS_REQUEST),
    updateSuccess : createAction(actionType.Items.UPDATE_ITEMS_SUCCESS),
    updateFailure : createAction(actionType.Items.UPDATE_ITEMS_FAILURE),

    paginateRequest : createAction(actionType.Items.PAGINATE_ITEMS_REQUEST),
    paginateSuccess : createAction(actionType.Items.PAGINATE_ITEMS_SUCCESS),
    paginateFailure : createAction(actionType.Items.PAGINATE_ITEMS_FAILURE),


}
