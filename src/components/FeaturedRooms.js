import React, { useContext } from "react";
import Loading from "./Loading";
import Room from "../components/Room";
import Title from "./Title";
import RoomContext from "../context/RoomContext/RoomContext";

const FeaturedRooms = () => {
  const roomContext = useContext(RoomContext);
  let { featuredRooms: rooms, isLoading } = roomContext;
  rooms = rooms.map((room) => {
    return <Room key={room.id} room={room} />;
  });
  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {isLoading ? <Loading /> : rooms}
      </div>
    </section>
  );
};

export default FeaturedRooms;
