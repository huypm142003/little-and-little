import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React from "react";
import Slider from "react-slick";
import Tick from "../assets/images/Tick.svg";

interface Item {
  name: string;
  qrCode: JSX.Element;
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

export default class PaymentSuccessCarousel extends React.Component<CarouselProps> {
  render() {
    const { items } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: <PrevButton />,
      nextArrow: <NextButton />,
    };
    return (
      <>
        <Slider {...settings} className="relative">
          {items.map((item: any) => (
            <Card className="card-event border-0 rounded-[20px] text-center">
              <div className="text-[#000] montserrat text-[22px] font-semibold p-5">
                {item.qrCode}
                <h3 className="text-3xl uppercase mt-3">{item.name}</h3>
                <h4 className="text-[#ffc226] text-[22px] uppercase mt-3">
                  vé cổng
                </h4>
                <span className="leading-[10px] block">---</span>
                <p className="text-[#23221f] text-base font-normal mt-3">
                  Ngày sử dụng: 31/05/2021
                </p>
                <img src={Tick} alt="Tick" className="mx-auto mt-3" />
              </div>
            </Card>
          ))}
        </Slider>
        <div className="flex items-center justify-between text-[#23221f] text-[18px] montserrat font-normal mx-5">
          <p className="leading-[30px]">Số lượng: {items.length} vé</p>
          <p className="leading-[26px] opacity-50">Trang:</p>
        </div>
      </>
    );
  }
}
