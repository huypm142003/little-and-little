import React from "react";
import { Button, Card, Col, Form, Input, Modal, Row } from "antd";
import Layouts from "../../layout/Layout";
import Address from "../../assets/images/Adress.svg";
import Email from "../../assets/images/Email.svg";
import Telephone from "../../assets/images/Telephone.svg";
import Alex from "../../assets/images/Alex.svg";

const Contact = () => {
  const [modal, setModal] = React.useState(false);

  const contact = (
    <div className="bg-gradient mt-[60px] px-10 pb-5 relative">
      <div className="card-bg p-10">
        <Card className="mt-[-2px] bg-transparent border-0">
          <Row className="flex items-center justify-center my-3">
            <Col>
              <h1 className="text-[92px] iciel-koni text-white font-black leading-[70px]">
                Liên hệ
              </h1>
            </Col>
          </Row>
          <Row gutter={28} className="mt-[42px]">
            <Col span={14} className="ml-[53px]">
              <Card className="card rounded-3xl z-[2] bg-[#fde8b3] border-0 border-b-[#ffca7b] border-b-[12px]">
                <div className="border-[#FFB489] rounded-3xl bg-[#fff6d4] border-[4px] border-dashed px-[25px] py-[1.8px]">
                  <Form className="mt-4">
                    <Row className="mb-7">
                      <Col>
                        <p className="text-[#23221F] text-lg montserrat font-normal leading-[30px]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse ac mollis justo. Etiam volutpat
                          tellus quis risus volutpat, ut posuere ex facilisis.
                        </p>
                      </Col>
                    </Row>
                    <Row gutter={24}>
                      <Col span={9}>
                        <Form.Item>
                          <Input className="custom-input" placeholder="Tên" />
                        </Form.Item>
                      </Col>
                      <Col span={15}>
                        <Form.Item>
                          <Input className="custom-input" placeholder="Email" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={24}>
                      <Col span={9}>
                        <Form.Item>
                          <Input
                            className="custom-input"
                            placeholder="Số điện thoại"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={15}>
                        <Form.Item>
                          <Input
                            className="custom-input"
                            placeholder="Địa chỉ"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Form.Item>
                        <Input.TextArea
                          className="custom-input"
                          placeholder="Lời nhắn"
                          rows={4}
                          cols={100}
                        />
                      </Form.Item>
                    </Row>
                    <Row className="flex items-center justify-center mt-3">
                      <Form.Item className="flex items-center justify-center">
                        <Button
                          className="button-submit flex justify-center items-start text-white iciel-koni text-[26px] font-black rounded-lg w-[275px] h-[51px]"
                          type="primary"
                          htmlType="submit"
                          onClick={() => setModal(true)}
                        >
                          Gửi liên hệ
                        </Button>
                      </Form.Item>
                    </Row>
                  </Form>
                </div>
              </Card>
            </Col>
            <Col span={9} className="flex flex-col justify-between">
              <Card className="card rounded-3xl z-[2] bg-[#fde8b3] border-0 border-b-[#ffca7b] border-b-[12px]">
                <div className="border-[#FFB489] rounded-3xl bg-[#fff6d4] border-[4px] border-dashed px-4 py-5 flex items-center">
                  <img src={Address} alt="Address" className="mr-4" />
                  <div className="flex flex-col">
                    <h3 className="text-[#12265a] montserrat text-[22px] font-semibold">
                      Địa chỉ:
                    </h3>
                    <p className="text-[#23221F] text-[16.5px] montserrat font-normal leading-[30px]">
                      86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="card rounded-3xl z-[2] bg-[#fde8b3] border-0 border-b-[#ffca7b] border-b-[12px]">
                <div className="border-[#FFB489] rounded-3xl bg-[#fff6d4] border-[4px] border-dashed px-4 py-9 flex items-center">
                  <img src={Email} alt="Email" className="mr-4" />
                  <div className="flex flex-col">
                    <h3 className="text-[#12265a] montserrat text-[22px] font-semibold">
                      Email:
                    </h3>
                    <p className="text-[#23221F] text-[17px] montserrat font-normal leading-[30px]">
                      investigate@your-site.com
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="card rounded-3xl z-[2] bg-[#fde8b3] border-0 border-b-[#ffca7b] border-b-[12px]">
                <div className="border-[#FFB489] rounded-3xl bg-[#fff6d4] border-[4px] border-dashed px-4 py-9 flex items-center">
                  <img src={Telephone} alt="Telephone" className="mr-4" />
                  <div className="flex flex-col">
                    <h3 className="text-[#12265a] montserrat text-[22px] font-semibold">
                      Điện thoại
                    </h3>
                    <p className="text-[#23221F] text-[17px] montserrat font-normal leading-[30px]">
                      +84 145 689 798
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
          <Modal
            width={400}
            centered
            open={modal}
            onCancel={() => setModal(false)}
            footer={null}
          >
            <div className="monterrat text-[#23221F] text-xl font-normal leading-[30px] p-5">
              <p>Gửi liên hệ thành công.</p>
              <p>Vui lòng kiên nhẫn đợi phản hồi từ chúng tôi, bạn nhé!</p>
            </div>
          </Modal>
          <img
            src={Alex}
            alt="Alex"
            className="absolute bottom-5 left-[-80px] w-[190px] z-10"
          />
        </Card>
      </div>
    </div>
  );

  return <Layouts content={contact} />;
};

export default Contact;
