import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React, { useState } from "react";
import Slider from "react-slick";
import Tick from "../../assets/images/Tick.svg";

interface Item {
  id: string;
  name: string;
  qrCode: JSX.Element;
  dateUse: string;
}

interface CarouselProps {
  items: Item[];
}

const PrevButton = (props: any) => {
  const { onClick } = props;
  return (
    <Button
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
      className="px-[11px] py-[20px] border-0 flex justify-center items-center custom-button rounded-lg absolute top-1/2 right-[-43px] transform -translate-y-1/2"
      type="primary"
      htmlType="button"
      onClick={onClick}
    >
      <CaretRightOutlined />
    </Button>
  );
};

const PaymentSuccessCarousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: (
      <PrevButton
        onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
      />
    ),
    nextArrow: (
      <NextButton
        onClick={() =>
          setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
        }
      />
    ),
  };

  return (
    <div className="pb-5 pt-[37px]">
      <Slider {...settings} className="relative">
        {items.map((item: any) => (
          <Card
            key={item.id}
            className="card-event border-0 rounded-[20px] text-center"
          >
            <div className="text-[#000] montserrat text-[22px] font-semibold p-5 flex flex-col items-center justify-center">
              {item.qrCode}
              <h3 className="text-3xl uppercase mt-3">{item.name}</h3>
              <h4 className="text-[#ffc226] uppercase mt-3">vé cổng</h4>
              <span className="leading-[10px] block">---</span>
              <p className="text-[#23221f] text-[15.4px] font-normal mt-3">
                Ngày sử dụng: {item.dateUse}
              </p>
              <img src={Tick} alt="Tick" className="mx-auto mt-3" />
            </div>
          </Card>
        ))}
      </Slider>
      <div className="mt-6 flex items-center justify-between text-[#23221f] text-[18px] montserrat font-normal mx-5">
        <p className="leading-[30px]">Số lượng: {items.length} vé</p>
        <p className="leading-[26px] opacity-50">
          Trang: {currentPage}/{totalPages}
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccessCarousel;
