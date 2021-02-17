import React, { useContext } from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import RoomContext from "../context/RoomContext/RoomContext";
import Loading from "./Loading";

function RoomContainer() {
  const roomContext = useContext(RoomContext);
  const { isLoading, sortedRooms, rooms } = roomContext;

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default RoomContainer;
