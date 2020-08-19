const name = 'CART_';

import * as Types from './../constants/loadList';

export const actions = (params) => {
  return {
    type: name + Types.FETCH_LOAD_LIST,
    payload: params
  }
}

export default actions;