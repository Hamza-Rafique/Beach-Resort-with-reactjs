import React, { Component } from "react";
import { RoomContext } from "./Context";
import Loading from "./Loading";
import Room from "../components/Room";
import Title from "./Title";
export default class FeacturedRoom extends Component {
  static contextType = RoomContext;

  render() {
    // const { loading, FeacturedRoom: rooms } = this.context;
    // rooms = rooms.map(room => {
    //   return <Room key={room.id} room={room} />;
    // });

    return (
      <div>
        {/* <section className="featured-rooms">
          <Title title="featured rooms" />
          <div className="featured-rooms-center">
            {loading ? <Loading /> : rooms}
          </div>
          <Loading />
        </section> */}
      </div>
    );
  }
}
