import {
  CalendarOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import { Button, Card, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

interface Item {
  id: string;
  picture1: string;
  name: string;
  timeStart: Date;
  timeEnd: Date;
  price: string;
}

interface CarouselProps {
  items: Item[];
}

const PrevButton = (props: any) => {
  const { onClick } = props;
  return (
    <Button
      // className={
      //   visiblePage === true
      //     ? "px-[11px] py-[20px] border-0 flex justify-center items-center custom-button rounded-lg absolute top-1/2 left-[25px] transform -translate-y-1/2"
      //     : "px-[11px] py-[20px] border-0 flex justify-center items-center custom-button rounded-lg absolute top-1/2 left-[-43px] transform -translate-y-1/2"
      // }
      className="px-[11px] py-[20px] border-0 flex justify-center items-center custom-button rounded-lg absolute top-1/2 left-[-43px] transform -translate-y-1/2"
      type="primary"
      htmlType="button"
      onClick={onClick}
    >
      <CaretLeftOutlined />
    </Button>
  );
};

const NextButton = (props: any) => {
  const { onClick } = props;
  return (
    <Button
      // className={
      //   visiblePage === true
      //     ? "px-[11px] py-[20px] border-0 flex justify-center items-center custom-button rounded-lg absolute top-1/2 right-[25px] transform -translate-y-1/2"
      //     : "px-[11px] py-[20px] border-0 flex justify-center items-center custom-button rounded-lg absolute top-1/2 right-[-43px] transform -translate-y-1/2"
      // }
      className="px-[11px] py-[20px] border-0 flex justify-center items-center custom-button rounded-lg absolute top-1/2 right-[-43px] transform -translate-y-1/2"
      type="primary"
      htmlType="button"
      onClick={onClick}
    >
      <CaretRightOutlined />
    </Button>
  );
};

export default class EventCarousel extends React.Component<CarouselProps> {
  render() {
    const { items } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: <PrevButton />,
      nextArrow: <NextButton />,
      centerPadding: "100px",
    };
    return (
      <Slider {...settings} className="py-[41.5px] relative">
        {items.map((item: any) => (
          <Card key={item.id} className="card-event border-0 rounded-[20px]">
            <img
              src={item.picture1}
              alt={`Event ${item.id}`}
              className="rounded-t-[20px]"
            />
            <div className="px-5 pt-3 pb-7">
              <h1 className="text-[#23221F] montserrat text-[28px] font-bold">
                {item.name}
              </h1>
              <p className="text-[#6C7272] montserrat text-base font-medium leading-[26px]">
                Đầm sen Park
              </p>
              <Space className="flex items-center justify-start">
                <CalendarOutlined className="text-[#ffb809]" />
                <p className="text-[#444] text-base montserrat font-medium leading-[16px]">
                  {item.timeStart
                    .toDate()
                    .getDate()
                    .toString()
                    .padStart(2, "0") +
                    "/" +
                    (item.timeStart.toDate().getMonth() + 1)
                      .toString()
                      .padStart(2, "0") +
                    "/" +
                    item.timeStart.toDate().getFullYear() +
                    " - " +
                    item.timeEnd
                      .toDate()
                      .getDate()
                      .toString()
                      .padStart(2, "0") +
                    "/" +
                    (item.timeEnd.toDate().getMonth() + 1)
                      .toString()
                      .padStart(2, "0") +
                    "/" +
                    item.timeEnd.toDate().getFullYear()}
                </p>
              </Space>
              <h1 className="text-[#fa7d09] text-[30px] font-bold tracking-[0.16px] leading-[48px]">
                {item.price} <span>VNĐ</span>
              </h1>
              <Link to={`/event/${item.id}`}>
                <Button
                  className="mt-3 button-submit flex justify-center items-start text-white iciel-koni text-base font-black rounded-lg w-[184px] h-[34px]"
                  type="primary"
                  htmlType="button"
                >
                  Xem chi tiết
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </Slider>
    );
  }
}
