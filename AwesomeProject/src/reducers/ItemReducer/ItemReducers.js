import { actionType } from "../../containers";

const { Items } = actionType;
const DEFAULT_STATE = {
  listItem: [],
  isFetching: false,
  isError: false,
  message: "",
  totalPage: 1,
  activePage: 1,

};
export default function HrReducer(state = DEFAULT_STATE, { type, payload }) {
  switch (type) {
    case Items.GET_ITEMS_REQUEST:
    case Items.ADD_ITEMS_REQUEST:
    case Items.DELETE_ITEMS_REQUEST:
    case Items.UPDATE_ITEMS_REQUEST:
    case Items.PAGINATE_ITEMS_REQUEST:

      return {
        ...state,
        isFetching: true,
        isError: false,
        message: "",
      };
    case Items.GET_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listItem: payload.listData,
      };
    case Items.ADD_ITEMS_SUCCESS:
    case Items.DELETE_ITEMS_SUCCESS:
    case Items.UPDATE_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

      case Items.PAGINATE_ITEMS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          listItem : payload.listData,
          totalPage : payload.totalPage,
          activePage : payload.activePage
        };

   
    case Items.GET_ITEMS_FAILURE:
    case Items.ADD_ITEMS_FAILURE:
    case Items.DELETE_ITEMS_FAILURE:
    case Items.UPDATE_ITEMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        message: payload.message,
      };
    default:
      return state;
  }
}