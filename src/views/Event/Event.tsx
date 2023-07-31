import { Button, Card, Col, Row, Space } from "antd";
import Layouts from "../../layout/Layout";
import Event1 from "../../assets/images/Event1.svg";
import Event3 from "../../assets/images/Event3.svg";
import Event4 from "../../assets/images/Event4.svg";
import LeftFlags from "../../assets/images/LeftFlags.svg";
import RightFlags from "../../assets/images/RightFlags.svg";
import { CalendarOutlined } from "@ant-design/icons";
import { Carousel, CarouselItem } from "../../components/Carousel";

const Event = () => {

  const carouselItems = [
    {
      id: 1,
      src: Event1,
    },
    {
      id: 2,
      src: Event1,
    },
    {
      id: 3,
      src: Event3,
    },
    {
      id: 4,
      src: Event4,
    },
    {
      id: 5,
      src: Event3,
    },
    {
      id: 6,
      src: Event1,
    },
    {
      id: 7,
      src: Event4,
    },
    {
      id: 8,
      src: Event3,
    },
  ];

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

          <Carousel
            items={carouselItems}
            renderItem={({ item, isSnapPoint }) => (
              <CarouselItem key={item.id} isSnapPoint={isSnapPoint}>
                <Card className="card-event border-0 rounded-[20px]">
                  <img
                    src={item.src}
                    alt={`Event${item.id}`}
                    className="rounded-t-[20px]"
                  />
                  <div className="px-5 pt-3 pb-7">
                    <h1 className="text-[#23221F] montserrat text-[28px] font-bold">
                      Sự kiện {item.id}
                    </h1>
                    <p className="text-[#6C7272] montserrat text-base font-medium leading-[26px]">
                      Đầm sen Park
                    </p>
                    <Space className="flex items-center justify-start">
                      <CalendarOutlined className="text-[#ffb809]" />
                      <p className="text-[#444] text-base montserrat font-medium leading-[16px]">
                        30/05/2021 - 01/06/2021
                      </p>
                    </Space>
                    <h1 className="text-[#fa7d09] text-[30px] font-bold tracking-[0.16px] leading-[48px]">
                      25.000 <span>VNĐ</span>
                    </h1>
                    <Button
                      className="mt-3 button-submit flex justify-center items-start text-white iciel-koni text-base font-black rounded-lg w-[184px] h-[34px]"
                      type="primary"
                      htmlType="button"
                    >
                      Xem chi tiết
                    </Button>
                  </div>
                </Card>
              </CarouselItem>
            )}
          />
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
