import React from "react";
import { Card, Col, Row } from "antd";
import Layouts from "../../layout/Layout";
import DamSenLogo from "../../assets/images/DamSenLogo.svg";
import Star from "../../assets/images/Star.svg";
import LisaArnold from "../../assets/images/Lisa_Arnold.svg";
import GroupPersion from "../../assets/images/GroupPersion.svg";
import HotAirBalloon1 from "../../assets/images/HotAirBalloon1.svg";
import HotAirBalloon2 from "../../assets/images/HotAirBalloon2.svg";
import HotAirBalloon3 from "../../assets/images/HotAirBalloon3.svg";
import HotAirBalloon5 from "../../assets/images/HotAirBalloon5.svg";
import HotAirBalloon6 from "../../assets/images/HotAirBalloon6.svg";

const Home = () => {
  const content = (
    <div className="bg-gradient mt-[60px] px-12 pb-8 relative">
      <Card className="p-8 card-bg">
        <Row className="flex items-center mt-1 mb-8">
          <img src={DamSenLogo} alt="Dam Sen Logo" className="w-[150px]" />
          <h1 className="iciel-koni text-6xl text-white uppercase w-[350px]">
            đầm sen park
          </h1>
        </Row>
        <Row gutter={28} className="relative">
          <Col span={15}>
            <Card className="card rounded-3xl z-[2] bg-[#fde8b3] border-0 border-b-[#ffca7b] border-b-[12px]">
              <div className="border-[#FFB489] rounded-3xl bg-[#fff6d4] border-[4px] border-dashed pb-20 px-[9px]">
                <Row className="my-7">
                  <Col>
                    <p className="text-[#23221F] text-lg montserrat font-normal leading-[30px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse ac mollis justo. Etiam volutpat tellus quis
                      risus volutpat, ut posuere ex facilisis.
                    </p>
                  </Col>
                </Row>
                <Row className="mb-7">
                  <Col>
                    <p className="text-[#23221F] text-lg montserrat font-normal leading-[30px]">
                      Suspendisse iaculis libero lobortis condimentum gravida.
                      Aenean auctor iaculis risus, lobortis molestie lectus
                      consequat a.
                    </p>
                  </Col>
                </Row>
                <Row className="flex items-center justify-center mb-[2px]">
                  <Col span={2} className="ml-[59px]">
                    <div className="flex items-center justify-center">
                      <img src={Star} alt="Star" className="w-[40px]" />
                    </div>
                  </Col>
                  <Col span={20}>
                    <h2 className="text-[#23221F] text-xl montserrat font-bold leading-[36px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                  </Col>
                </Row>
                <Row className="flex items-center justify-center mb-[2px]">
                  <Col span={2} className="ml-[59px]">
                    <div className="flex items-center justify-center">
                      <img src={Star} alt="Star" className="w-[40px]" />
                    </div>
                  </Col>
                  <Col span={20}>
                    <h2 className="text-[#23221F] text-xl montserrat font-bold leading-[36px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                  </Col>
                </Row>
                <Row className="flex items-center justify-center mb-[2px]">
                  <Col span={2} className="ml-[59px]">
                    <div className="flex items-center justify-center">
                      <img src={Star} alt="Star" className="w-[40px]" />
                    </div>
                  </Col>
                  <Col span={20}>
                    <h2 className="text-[#23221F] text-xl montserrat font-bold leading-[36px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                  </Col>
                </Row>
                <Row className="flex items-center justify-center mb-[2px]">
                  <Col span={2} className="ml-[59px]">
                    <div className="flex items-center justify-center">
                      <img src={Star} alt="Star" className="w-[40px]" />
                    </div>
                  </Col>
                  <Col span={20}>
                    <h2 className="text-[#23221F] text-xl montserrat font-bold leading-[36px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
          <Col className="absolute top-[-0.2px] right-[-0.6%]">
            <foreignObject x="130" y="250">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 584"
                fill="none"
                width="800"
                height="490"
                className="svg-item"
              >
                <path
                  d="M 139.686 578.711 L 102 556 L 81.1709 547.233 L 75.184 542.53 V 41.2605 L 81.1709 36.5576 L 110 15 L 139.686 5.0793 C 139.686 5.0793 149.832 0.9407 114.603 0.0315 C 85.9604 -0.721 70.2052 22.6369 70.2052 22.6369 C 60.4685 34.551 56.7188 37.4668 39.7662 18.4043 C 22.8135 -0.6583 -7 0 -24 7 L 19 28 L 39.7662 42.4833 V 541.339 L 14 560 L 0 583.791 C -10 589 22.8451 584.512 40 567 C 56.7188 546.355 60.4685 549.271 70.2052 561.185 C 70.2052 561.185 85.9604 584.543 114.603 583.791 C 149.801 582.85 139.686 578.711 139.686 578.711 Z M 57.2382 519.805 C 50.4635 519.805 45.0122 514.349 45.0122 507.64 C 45.0122 500.899 50.495 495.475 57.2382 495.475 C 63.9815 495.475 69.4643 500.93 69.4643 507.64 C 69.4958 514.349 64.013 519.805 57.2382 519.805 Z M 57.2382 483.279 C 50.4635 483.279 45.0122 477.823 45.0122 471.114 C 45.0122 464.373 50.495 458.949 57.2382 458.949 C 63.9815 458.949 69.4643 464.404 69.4643 471.114 C 69.4958 477.823 64.013 483.279 57.2382 483.279 Z M 57.2382 448.069 C 50.4635 448.069 45.0122 442.614 45.0122 435.905 C 45.0122 429.164 50.495 423.74 57.2382 423.74 C 63.9815 423.74 69.4643 429.195 69.4643 435.905 C 69.4958 442.614 64.013 448.069 57.2382 448.069 Z M 57.2382 411.7 C 50.4635 411.7 45.0122 406.245 45.0122 399.535 C 45.0122 392.794 50.495 387.37 57.2382 387.37 C 63.9815 387.37 69.4643 392.826 69.4643 399.535 C 69.4958 406.245 64.013 411.7 57.2382 411.7 Z M 57.2382 376.303 C 50.4635 376.303 45.0122 370.847 45.0122 364.138 C 45.0122 357.397 50.495 351.973 57.2382 351.973 C 63.9815 351.973 69.4643 357.428 69.4643 364.138 C 69.4958 370.879 64.013 376.303 57.2382 376.303 Z M 57.2382 340.121 C 50.4635 340.121 45.0122 334.666 45.0122 327.957 C 45.0122 321.216 50.495 315.792 57.2382 315.792 C 63.9815 315.792 69.4643 321.247 69.4643 327.957 C 69.4958 334.666 64.013 340.121 57.2382 340.121 Z M 57.2382 304.567 C 50.4635 304.567 45.0122 299.112 45.0122 292.402 C 45.0122 285.661 50.495 280.237 57.2382 280.237 C 63.9815 280.237 69.4643 285.693 69.4643 292.402 C 69.4958 299.112 64.013 304.567 57.2382 304.567 Z M 57.2382 268.512 C 50.4635 268.512 45.0122 263.056 45.0122 256.347 C 45.0122 249.637 50.495 244.182 57.2382 244.182 C 63.9815 244.182 69.4643 249.637 69.4643 256.347 C 69.4643 263.056 64.013 268.512 57.2382 268.512 Z M 57.2382 232.832 C 50.4635 232.832 45.0122 227.377 45.0122 220.667 C 45.0122 213.926 50.495 208.502 57.2382 208.502 C 63.9815 208.502 69.4643 213.958 69.4643 220.667 C 69.4958 227.377 64.013 232.832 57.2382 232.832 Z M 57.2382 196.933 C 50.4635 196.933 45.0122 191.477 45.0122 184.768 C 45.0122 178.027 50.495 172.603 57.2382 172.603 C 63.9815 172.603 69.4643 178.058 69.4643 184.768 C 69.4958 191.477 64.013 196.933 57.2382 196.933 Z M 57.2382 161.065 C 50.4635 161.065 45.0122 155.61 45.0122 148.9 C 45.0122 142.159 50.495 136.735 57.2382 136.735 C 63.9815 136.735 69.4643 142.191 69.4643 148.9 C 69.4958 155.61 64.013 161.065 57.2382 161.065 Z M 57.2382 125.354 C 50.4635 125.354 45.0122 119.899 45.0122 113.189 C 45.0122 106.48 50.495 101.024 57.2382 101.024 C 63.9815 101.024 69.4643 106.48 69.4643 113.189 C 69.4643 119.899 64.013 125.354 57.2382 125.354 Z M 57.2382 89.3298 C 50.4635 89.3298 45.0122 83.8744 45.0122 77.1649 C 45.0122 70.4554 50.495 65 57.2382 65 C 63.9815 65 69.4643 70.4554 69.4643 77.1649 C 69.4643 83.8744 64.013 89.3298 57.2382 89.3298 Z"
                  fill="#FDE8B3"
                />
              </svg>
            </foreignObject>
          </Col>
          <Col span={9}>
            <Card className="card rounded-3xl z-[2] bg-[#fde8b3] border-0 border-b-[#ffca7b] border-b-[12px]">
              <div className="border-[#FFB489] rounded-3xl bg-[#fff6d4] border-[4px] border-dashed pb-20 px-[9px]">
                <Row className="my-7">
                  <Col>
                    <p className="text-[#23221F] text-lg montserrat font-normal leading-[30px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse ac mollis justo. Etiam volutpat tellus quis
                      risus volutpat, ut posuere ex facilisis.
                    </p>
                  </Col>
                </Row>
                <Row className="mb-7">
                  <Col>
                    <p className="text-[#23221F] text-lg montserrat font-normal leading-[30px]">
                      Suspendisse iaculis libero lobortis condimentum gravida.
                      Aenean auctor iaculis risus, lobortis molestie lectus
                      consequat a.
                    </p>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
        <img
          src={LisaArnold}
          alt="Lisa Arnold"
          className="absolute bottom-0 left-[-48px] w-[185px] z-10"
        />
        <img
          src={HotAirBalloon2}
          alt="Hot Air Balloon"
          className="absolute bottom-[-31px] left-1/4 w-[100px] z-[0]"
        />
        <img
          src={HotAirBalloon3}
          alt="Hot Air Balloon"
          className="absolute bottom-[-20px] right-0 w-[110px] z-[0]"
        />
        <img
          src={HotAirBalloon5}
          alt="Hot Air Balloon"
          className="absolute top-3 left-[53%] w-[110px] z-[0]"
        />
        <img
          src={HotAirBalloon3}
          alt="Hot Air Balloon"
          className="absolute top-[70px] left-[40%] w-[110px] z-[0]"
        />
        <img
          src={GroupPersion}
          alt="Group Persion"
          className="absolute top-[-50px] right-0 w-[600px] z-[0]"
        />
      </Card>
      <img
        src={HotAirBalloon1}
        alt="Hot Air Balloon"
        className="absolute top-1/2 right-0 w-[105px] z-[9999999] transform -translate-y-1/2"
      />
      <img
        src={HotAirBalloon6}
        alt="Hot Air Balloon"
        className="absolute top-1/3 left-0 w-[105px] z-[9999999] transform -translate-y-1/2"
      />
    </div>
  );

  return <Layouts content={content} />;
};

export default Home;
