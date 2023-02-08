import { put, takeLatest  , select} from "@redux-saga/core/effects";
import { ItemAction } from "../actions/ItemActions";
import { itemApi } from "../api"
import { actionType, LIMIT } from "../containers";

function* handleGetItem() {
    try {
        const res = yield itemApi.getItem(null, null, null) //param , query , data
        yield put(ItemAction.getSuccess({
            listData: res.listData
        }))
        console.log(res , 'saga')
    } catch (error) {
        yield put(ItemAction.getFailure({
            message: error.message
        }))
    }
}

function* handleAddItem({ payload }) {
    console.log(payload)
    try {
        yield itemApi.addItem(null, null, payload)
        yield put(ItemAction.addSuccess())
        yield put(ItemAction.getRequest({}))
    } catch (error) {
        yield put(ItemAction.addFailure(error))
    }
}

function* handleUpdateItem({payload}) {
    try {
        const store = yield select((state ) => state.items)
        yield itemApi.updateItem({id : payload.id}, null, payload)
        yield put(ItemAction.updateSuccess())
        yield put(ItemAction.getRequest({}))
    } catch (error) {
        yield put(ItemAction.updateFailure(error))
    }
}

function* handleDeleteItem({payload}) {
    try {
        console.log(payload, 'saga')
        yield itemApi.deleteItem({id : payload.id}, null, null)
        yield put(ItemAction.deleteSuccess())
        yield put(ItemAction.getRequest({}))
      
    } catch (error) {
        yield put(ItemAction.deleteFailure(error))
    }
}

function* handlePaginateItem({payload}) {
    try {
        const res = yield itemApi.paginateItem(null, {activePage : `${payload.activePage}&` , limit : LIMIT}, payload) //param , query , data
        if(res.totalPage === 0) {
            res.totalPage = 1
        }
        yield put(ItemAction.paginateSuccess({
            listData : res.listData,
            totalPage : res.totalPage,
            activePage : payload.activePage
        }))
    } catch (error) {
        yield put(ItemAction.paginateFailure({
            message: error.message
        }))
    }
}



const itemSaga = [
    takeLatest(actionType.Items.GET_ITEMS_REQUEST, handleGetItem),
    takeLatest(actionType.Items.ADD_ITEMS_REQUEST, handleAddItem),
    takeLatest(actionType.Items.UPDATE_ITEMS_REQUEST , handleUpdateItem),
    takeLatest(actionType.Items.DELETE_ITEMS_REQUEST , handleDeleteItem),
    takeLatest(actionType.Items.PAGINATE_ITEMS_REQUEST, handlePaginateItem),

]
export default itemSaga