import { Card, Col, Row, Space } from "antd";
import Layouts from "../../layout/Layout";
import LeftFlags from "../../assets/images/LeftFlags.svg";
import RightFlags from "../../assets/images/RightFlags.svg";
import { CalendarOutlined } from "@ant-design/icons";
import Event1 from "../../assets/images/Event1.svg";
import Event4 from "../../assets/images/Event4.svg";

const DetailEvent = () => {
  const detailEvent = (
    <div className="bg-gradient mt-[60px] px-10 pb-5 relative">
      <div className="card-bg-event p-[50.2px]">
        <img
          src={LeftFlags}
          alt="LeftFlags"
          className="absolute left-[-25px] top-0"
        />
        <Card className="mt-[-2px] bg-transparent border-0">
          <Row className="flex items-center justify-center">
            <Col>
              <h1 className="text-6xl iciel-koni text-white font-black leading-[70px]">
                Sự kiện 1
              </h1>
            </Col>
          </Row>

          <Row className="mt-[38px]">
            <Card className="card rounded-3xl z-[2] bg-[#fde8b3] border-0 border-b-[#ffca7b] border-b-[12px]">
              <div className="border-[#FFB489] rounded-3xl bg-[#fff6d4] border-[4px] border-dashed px-[20px] py-[5.7px]">
                <Row gutter={24} className="my-[15px]">
                  <Col className="max-w-[32.8%]">
                    <img src={Event4} alt="Event1" className="rounded-[20px]" />
                    <Space className="flex items-center justify-start mt-4">
                      <CalendarOutlined className="text-[#ffb809]" />
                      <p className="text-[#444] text-base montserrat font-medium leading-[50px]">
                        30/05/2021 - 01/06/2021
                      </p>
                    </Space>
                    <p className="text-[#6C7272] montserrat text-base font-medium leading-[20px]">
                      Đầm sen Park
                    </p>
                    <h1 className="text-[#fa7d09] montserrat text-[30px] font-bold tracking-[0.16px] leading-[48px]">
                      25.000 <span>VNĐ</span>
                    </h1>
                  </Col>
                  <Col className="max-w-[23.2%]">
                    <p className="text-[#000] montserrat text-base font-medium leading-[25px] text-justify">
                      <span className="text-[#fa7d09] text-[22px] font-bold leading-[25px]">
                        Lorem Ipsum
                      </span>{" "}
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries,
                      but also the leap into electronic sdsd typesetting,
                      remaining cssa essentially unchanged. It was popularised
                      in the 1960s with the release of Letraset sheets
                      containing Lorem Ipsum passages, of Lorem Ipsum.
                    </p>
                  </Col>
                  <Col className="max-w-[22%]">
                    <img src={Event1} alt="Event1" className="rounded-[20px]" />
                    <p className="text-[#000] montserrat text-base font-medium leading-[26px] text-justify mt-5">
                      Lorem Ipsum is not simply random text. It has roots in a
                      piece of classical Latin literature from 45 BC, making it
                      over 2000 years old. words, consectetur, from a Lorem
                      Ipsum passage, and going through the cites of the word in
                      classical literature,
                    </p>
                  </Col>
                  <Col className="max-w-[22%]">
                    <p className="text-[#000] montserrat text-base font-medium leading-[26px] text-justify mb-5">
                      Lorem Ipsum is not simply random text. It has roots in a
                      piece of classical Latin literature from 45 BC, making it
                      over 2000 years old. words, consectetur, from a Lorem
                      Ipsum passage, and going through the cites of the word in
                      classical literature,
                    </p>
                    <img src={Event1} alt="Event1" className="rounded-[20px]" />
                  </Col>
                </Row>
              </div>
            </Card>
          </Row>
        </Card>
        <img
          src={RightFlags}
          alt="RightFlags"
          className="absolute right-[-30px] top-[-70px]"
        />
      </div>
    </div>
  );
  return <Layouts content={detailEvent} />;
};

export default DetailEvent;
