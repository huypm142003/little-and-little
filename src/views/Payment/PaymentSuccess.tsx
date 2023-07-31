import { Button, Card, Col, QRCode, Row } from "antd";
import Layouts from "../../layout/Layout";
import { Carousel, CarouselItem } from "../../components/Carousel";
import Tick from "../../assets/images/Tick.svg";
import Alvin from "../../assets/images/Alvin.svg";

const PaymentSuccess = () => {
  const carouselItems = [
    {
      id: "ALT20210501",
      qr: <QRCode bordered={false} value="https://www.facebook.com/" />,
    },
    {
      id: "ALT20210502",
      qr: <QRCode bordered={false} value="https://www.facebook.com/" />,
    },
    {
      id: "ALT20210503",
      qr: <QRCode bordered={false} value="https://www.facebook.com/" />,
    },
    {
      id: "ALT20210504",
      qr: <QRCode bordered={false} value="https://www.facebook.com/" />,
    },
    {
      id: "ALT20210505",
      qr: <QRCode bordered={false} value="https://www.facebook.com/" />,
    },
    {
      id: "ALT20210506",
      qr: <QRCode bordered={false} value="https://www.facebook.com/" />,
    },
    {
      id: "ALT20210507",
      qr: <QRCode bordered={false} value="https://www.facebook.com/" />,
    },
    {
      id: "ALT20210508",
      qr: <QRCode bordered={false} value="https://www.facebook.com/" />,
    },
  ];

  const patmentSuccess = (
    <div className="bg-gradient mt-[60px] px-10 pb-5 relative">
      <div className="card-bg p-[50.2px]">
        <Card className="mt-[-2px] bg-transparent border-0">
          <Row className="flex items-center justify-center">
            <Col>
              <h1 className="text-6xl iciel-koni text-white font-black leading-[70px]">
                Thanh toán thành công
              </h1>
            </Col>
          </Row>

          <Card className="card rounded-3xl z-[2] bg-[#fde8b3] border-0 border-b-[#ffca7b] border-b-[12px] mt-5 ml-10">
            <div className="border-[#FFB489] rounded-3xl bg-[#fff6d4] border-[4px] border-dashed px-[60px] carousel-qr-code">
              <Carousel
                visiblePage={true}
                items={carouselItems}
                renderItem={({ item, isSnapPoint }) => (
                  <CarouselItem key={item.id} isSnapPoint={isSnapPoint}>
                    <Card className="card-event border-0 rounded-[20px] text-center">
                      <div className="text-[#000] montserrat text-[22px] font-semibold p-5">
                        {item.qr}
                        <h3 className="text-3xl uppercase mt-3">{item.id}</h3>
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
                  </CarouselItem>
                )}
              />
            </div>
          </Card>
          <Row
            gutter={28}
            className="flex items-center justify-center absolute bottom-[-25px] left-0 w-full"
          >
            <Col>
              <Button
                className="mt-3 button-submit flex justify-center items-start text-white iciel-koni text-base font-black rounded-lg w-[184px] h-[34px]"
                type="primary"
                htmlType="button"
              >
                Tải vé
              </Button>
            </Col>
            <Col>
              <Button
                className="mt-3 button-submit flex justify-center items-start text-white iciel-koni text-base font-black rounded-lg w-[184px] h-[34px]"
                type="primary"
                htmlType="button"
              >
                Gửi Email
              </Button>
            </Col>
          </Row>
          <img
            src={Alvin}
            alt="Alvin"
            className="absolute bottom-5 left-[-90px] w-[190px] z-10"
          />
        </Card>
      </div>
    </div>
  );
  return <Layouts content={patmentSuccess} />;
};

export default PaymentSuccess;
