import React from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "../components/Room";
import Title from "./Title";

const FeaturedRooms = () => {
  let { featuredRooms: rooms, isLoading } = React.useContext(RoomContext);
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
