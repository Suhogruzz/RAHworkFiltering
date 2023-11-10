import {
    FILTER_SERVICE
} from '../actions/actionTypes';

const initialState = {
    filteredItems: [],
    filterText: false
  };
  
  export default function serviceFilterReducer(state = initialState, action) {
    switch (action.type) {
      case FILTER_SERVICE:
        const {
          items, value
        } = action.payload;
        if (!value) {
          return {
            filteredItems: items,
            filterText: false
          };
        }
  
        const data = items.filter(service => service.name.match(value)? service : null);
        return {
          filteredItems: data, filterText: value
        };
  
      default:
        return state;
    }
  }