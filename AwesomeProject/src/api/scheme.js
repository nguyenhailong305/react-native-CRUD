import {API_METHOD as METHOD , BASE_URL} from "../containers"
const API_SCHEME = {
    ITEM : {
        GET_ITEM : {
            url : `${BASE_URL}/item`,
            method : METHOD.GET
        },
        ADD_ITEM : {
            url : `${BASE_URL}/item`,
            method : METHOD.POST
        },
        UPDATE_ITEM : {
            url : `${BASE_URL}/item/:id`,
            method : METHOD.PUT
        },
        DELETE_ITEM : {
            url : `${BASE_URL}/item/:id`,
            method : METHOD.DELETE
        },
        PAGINATE_ITEM : {
            url : `${BASE_URL}/item/paginate`,
            method : METHOD.GET
        },

    }
}

export default API_SCHEME