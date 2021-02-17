import React, { useReducer, useEffect } from "react";
import RoomContext from "./RoomContext";
import RoomReducer from "./RoomReducer";
import items from "../../data";
import { UPDATE_STATE, SET_IS_LOADING, GET_DATA } from "../types";

const RoomState = (props) => {
  const initialState = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    isLoading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  const [state, dispatch] = useReducer(RoomReducer, initialState);

  //SET LOADING

  const setIsLoading = () => dispatch({ SET_IS_LOADING });

  // get data formated for contentfull headless cms

  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  const getRoom = (slug) => {
    let tempRooms = [...state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };
  const filterRooms = (name, value) => {
    let {
      rooms,
      type,
      minSize,
      maxSize,
      price,
      capacity,
      breakfast,
      pets,
    } = state;

    switch (name) {
      case "type":
        type = value;
        break;

      case "capacity":
        value = parseInt(value);
        capacity = value;
        break;

      case "price":
        value = parseInt(value);
        price = value;
        break;
      case "minSize":
        minSize = value;
        break;

      case "maxSize":
        maxSize = value;
        break;

      case "breakfast":
        breakfast = value;
        break;

      case "pets":
        pets = value;
        break;

      default:
        break;
    }

    let tempRooms = [...rooms];

    // Filter by Type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    // Filter by Capcity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    // Filter by Price
    tempRooms = tempRooms.filter((room) => room.price <= price);

    // Filter by Size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    //Filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    //Filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    return tempRooms;
  };

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const filteredRooms = filterRooms(name, value);

    dispatch({
      type: UPDATE_STATE,
      payload: {
        name,
        value,
        filteredRooms,
      },
    });
  };

  useEffect(() => {
    dispatch({
      type: GET_DATA,
      payload: formatData(items),
    });
  }, []);

  return (
    <RoomContext.Provider
      value={{
        rooms: state.rooms,
        sortedRooms: state.sortedRooms,
        featuredRooms: state.featuredRooms,
        isLoading: state.isLoading,
        price: state.price,
        minPrice: state.minPrice,
        maxPrice: state.maxPrice,
        capacity: state.capacity,
        type: state.type,
        minPrice: state.minPrice,
        minSize: state.minSize,
        maxSize: state.maxSize,
        breakfast: state.breakfast,
        pets: state.pets,
        getRoom,
        handleChange,
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
};

export default RoomState;
