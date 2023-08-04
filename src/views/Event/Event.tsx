import { Card, Col, Row } from "antd";
import Layouts from "../../layout/Layout";
import LeftFlags from "../../assets/images/LeftFlags.svg";
import RightFlags from "../../assets/images/RightFlags.svg";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../core/store/store";
import { useEffect } from "react";
import { getEvent } from "../../core/store/eventSlice";
import EventCarousel from "../../components/EventCarousel";

const Event = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>();
  const listEvent = useSelector(
    (state: RootState) => state.firestoreEvent.data
  );
  console.log("🚀 ~ Event ~ listEvent:", listEvent)

  useEffect(() => {
    dispatch(getEvent());
  }, [dispatch]);

  const event = (
    <div className="bg-gradient mt-[60px] px-10 pb-5 relative">
      <div className="card-bg-event p-[50.2px]">
        <img
          src={LeftFlags}
          alt="LeftFlags"
          className="absolute left-[-25px] top-0"
        />
        <Card className="mt-[-2px] bg-transparent border-0">
          <Row className="flex items-center justify-center my-3">
            <Col>
              <h1 className="text-[92px] iciel-koni text-white font-black leading-[100px]">
                Sự kiện nổi bật
              </h1>
            </Col>
          </Row>

          {/* <Carousel
            items={carouselItems}
            renderItem={({ item, isSnapPoint }) => (
              <CarouselItem key={item.id} isSnapPoint={isSnapPoint}>
                
              </CarouselItem>
            )}
          /> */}
          <EventCarousel items={listEvent} />
        </Card>
        <img
          src={RightFlags}
          alt="RightFlags"
          className="absolute right-[-30px] top-[-70px]"
        />
      </div>
    </div>
  );
  return <Layouts content={event} />;
};

export default Event;
