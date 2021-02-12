import React, { useState } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

const SingleRoom = (props) => {
  const [singleSlug, setSingleSlug] = props.match.params.slug;
  const [defaultBackground, setDefaultBackground] = defaultBcg;
  const { getRoom } = React.useContext(RoomContext);
  const room = getRoom(singleSlug);
  console.log(room);
  return <div>hello from single room page</div>;
};

export default SingleRoom;
