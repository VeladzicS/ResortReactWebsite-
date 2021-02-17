import { UPDATE_STATE, SET_IS_LOADING, GET_DATA } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,
        isLoading: false,
        rooms: action.payload,
        featuredRooms: action.payload.filter((room) => room.featured),
        sortedRooms: action.payload,
        price: Math.max(...action.payload.map((room) => room.price)),
        maxPrice: Math.max(...action.payload.map((room) => room.price)),
        maxSize: Math.max(...action.payload.map((room) => room.size)),
      };
    }

    case UPDATE_STATE:
      const { name, value, filteredRooms } = action.payload;

      return {
        ...state,
        [name]: value,
        sortedRooms: filteredRooms,
      };

    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
