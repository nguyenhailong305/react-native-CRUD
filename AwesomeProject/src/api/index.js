import {Helpers} from '../utils';
import Api from './scheme'

export const itemApi = {
    getItem : Helpers.createApi(Api.ITEM.GET_ITEM),
    addItem : Helpers.createApi(Api.ITEM.ADD_ITEM),
    deleteItem : Helpers.createApi(Api.ITEM.DELETE_ITEM),
    updateItem : Helpers.createApi(Api.ITEM.UPDATE_ITEM),
    paginateItem : Helpers.createApi(Api.ITEM.PAGINATE_ITEM),

}