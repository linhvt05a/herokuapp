const name = 'CART_';

import * as exampleType from './../constants/loadList';

export const actions = (params) => {
  return {
    type: exampleType.FETCH_LOAD_LIST,
    payload: params
  }
}

export default actions;