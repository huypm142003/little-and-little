import { Card, Col, Row, Space } from "antd";
import Layouts from "../../layout/Layout";
import LeftFlags from "../../assets/images/LeftFlags.svg";
import RightFlags from "../../assets/images/RightFlags.svg";
import { CalendarOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { firestore } from "../../core/firebase";

const DetailEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({
    name: "",
    picture1: "",
    picture2: "",
    picture3: "",
    price: "",
    timeStart: new Date(),
    timeEnd: new Date(),
    content1: "",
    content2: "",
    content3: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = firestore.collection("events").doc(id).get();
      const data = (await snapshot).data();
      data &&
        setEvent({
          name: data.name,
          picture1: data.picture1,
          picture2: data.picture2,
          picture3: data.picture3,
          price: data.price,
          timeStart: data.timeStart.toDate(),
          timeEnd: data.timeEnd.toDate(),
          content1: data.content1,
          content2: data.content2,
          content3: data.content3,
        });
    };
    fetchData();
  });

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
                {event.name}
              </h1>
            </Col>
          </Row>

          <Row className="mt-[38px]">
            <Card className="card rounded-3xl z-[2] bg-[#fde8b3] border-0 border-b-[#ffca7b] border-b-[12px]">
              <div className="border-[#FFB489] rounded-3xl bg-[#fff6d4] border-[4px] border-dashed px-[20px] py-[5.7px]">
                <Row gutter={24} className="my-[15px]">
                  <Col className="max-w-[32.8%]">
                    <img
                      src={event.picture1}
                      alt={event.name}
                      className="rounded-[20px]"
                    />
                    <Space className="flex items-center justify-start mt-4">
                      <CalendarOutlined className="text-[#ffb809]" />
                      <p className="text-[#444] text-base montserrat font-medium leading-[50px]">
                        {/* 30/05/2021 - 01/06/2021 */}
                        {event.timeStart.getDate().toString().padStart(2, "0") +
                          "/" +
                          (event.timeStart.getMonth() + 1)
                            .toString()
                            .padStart(2, "0") +
                          "/" +
                          event.timeStart.getFullYear() +
                          " - " +
                          event.timeEnd.getDate().toString().padStart(2, "0") +
                          "/" +
                          (event.timeEnd.getMonth() + 1)
                            .toString()
                            .padStart(2, "0") +
                          "/" +
                          event.timeEnd.getFullYear()}
                      </p>
                    </Space>
                    <p className="text-[#6C7272] montserrat text-base font-medium leading-[20px]">
                      Đầm sen Park
                    </p>
                    <h1 className="text-[#fa7d09] montserrat text-[30px] font-bold tracking-[0.16px] leading-[48px]">
                      {event.price} <span>VNĐ</span>
                    </h1>
                  </Col>
                  <Col className="max-w-[23.2%]">
                    <p className="text-[#000] montserrat text-base font-medium leading-[25px] text-justify">
                      <span className="text-[#fa7d09] text-[22px] font-bold leading-[25px]">
                        {event.content1.split(" ").slice(0, 2).join(" ") + " "}
                      </span>
                      {event.content1.split(" ").slice(2).join(" ")}
                    </p>
                  </Col>
                  <Col className="max-w-[22%]">
                    <img
                      src={event.picture2}
                      alt={event.name}
                      className="rounded-[20px]"
                    />
                    <p className="text-[#000] montserrat text-base font-medium leading-[26px] text-justify mt-5">
                      {event.content2}
                    </p>
                  </Col>
                  <Col className="max-w-[22%]">
                    <p className="text-[#000] montserrat text-base font-medium leading-[26px] text-justify mb-5">
                      {event.content3}
                    </p>
                    <img
                      src={event.picture3}
                      alt={event.name}
                      className="rounded-[20px]"
                    />
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
