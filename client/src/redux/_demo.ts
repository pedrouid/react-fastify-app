import { apiGetName } from "../helpers/api";
import { notificationShow } from "./_notification";

// -- Constants ------------------------------------------------------------- //

const DEMO_GET_NAME_REQUEST = "order/DEMO_GET_NAME_REQUEST";
const DEMO_GET_NAME_SUCCESS = "order/DEMO_GET_NAME_SUCCESS";
const DEMO_GET_NAME_FAILURE = "order/DEMO_GET_NAME_FAILURE";

const DEMO_CLEAR_STATE = "demo/DEMO_CLEAR_STATE";

// -- Actions --------------------------------------------------------------- //

export const demoGetName = (account: string, orderId: string) => async (
  dispatch: any,
  getState: any
) => {
  dispatch({ type: DEMO_GET_NAME_REQUEST });

  try {
    const name = await apiGetName();

    await dispatch({ type: DEMO_GET_NAME_SUCCESS, payload: name });
  } catch (error) {
    console.error(error); // tslint:disable-line
    dispatch(notificationShow(error.message, true));
    dispatch({ type: DEMO_GET_NAME_FAILURE });
  }
};

export const demoClearState = () => ({ type: DEMO_CLEAR_STATE });

// -- Reducer --------------------------------------------------------------- //
const INITIAL_STATE = {
  loading: false,
  name: ""
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case DEMO_GET_NAME_REQUEST:
      return { ...state, loading: true };
    case DEMO_GET_NAME_SUCCESS:
      return { ...state, loading: false, name: action.payload };
    case DEMO_GET_NAME_FAILURE:
      return { ...state, loading: false };
    case DEMO_CLEAR_STATE:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
