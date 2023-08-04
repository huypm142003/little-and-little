import React from "react";
import { Button, Card, Col, Form, Input, Modal, Row } from "antd";
import Layouts from "../../layout/Layout";
import Address from "../../assets/images/Adress.svg";
import Email from "../../assets/images/Email.svg";
import Telephone from "../../assets/images/Telephone.svg";
import Alex from "../../assets/images/Alex.svg";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../core/store/store";
import { useDispatch } from "react-redux";
import { createContact } from "../../core/store/contactSlice";
import { useForm } from "antd/es/form/Form";

const Contact = () => {
  const [modal, setModal] = React.useState(false);
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>();
  const [form] = useForm();

  const [contactInfomation, setContactInfomation] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setContactInfomation({ ...contactInfomation, [name]: value });
  };

  const handleSendContact = () => {
    dispatch(createContact(contactInfomation));
    setModal(true);
  };

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
            <Col span={15} className="ml-[53px]">
              <Card className="card rounded-3xl z-[2] bg-[#fde8b3] border-0 border-b-[#ffca7b] border-b-[12px]">
                <div className="border-[#FFB489] rounded-3xl bg-[#fff6d4] border-[4px] border-dashed px-[30px] py-[16.8px]">
                  <Form
                    className="mt-4"
                    autoComplete="off"
                    form={form}
                    onFinish={handleSendContact}
                  >
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
                        <Form.Item
                          name="name"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập tên!",
                            },
                          ]}
                        >
                          <Input
                            className="custom-input"
                            placeholder="Tên"
                            name="name"
                            value={contactInfomation.name}
                            onChange={handleInputChange}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={15}>
                        <Form.Item
                          name="email"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập email!",
                            },
                            {
                              type: "email",
                              message: "Email không hợp lệ!",
                            },
                          ]}
                        >
                          <Input
                            className="custom-input"
                            placeholder="Email"
                            name="email"
                            value={contactInfomation.email}
                            onChange={handleInputChange}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={24}>
                      <Col span={9}>
                        <Form.Item
                          name="phone"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập số điện thoại!",
                            },
                            {
                              pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                              message: "Số điện thoại không hợp lệ!",
                            },
                          ]}
                        >
                          <Input
                            className="custom-input"
                            placeholder="Số điện thoại"
                            name="phone"
                            value={contactInfomation.phone}
                            onChange={handleInputChange}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={15}>
                        <Form.Item
                          name="address"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập địa chỉ!",
                            },
                          ]}
                        >
                          <Input
                            className="custom-input"
                            placeholder="Địa chỉ"
                            name="address"
                            value={contactInfomation.address}
                            onChange={handleInputChange}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Form.Item
                        name="message"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập lời nhắn!",
                          },
                          {
                            min: 10,
                            message: "Lời nhắn phải có ít nhất 10 ký tự!",
                          },
                        ]}
                      >
                        <Input.TextArea
                          className="custom-input"
                          placeholder="Lời nhắn"
                          rows={4}
                          cols={100}
                          name="message"
                          value={contactInfomation.message}
                          onChange={handleInputChange}
                        />
                      </Form.Item>
                    </Row>
                    <Row className="flex items-center justify-center mt-3">
                      <Form.Item className="flex items-center justify-center">
                        <Button
                          className="button-submit flex justify-center items-start text-white iciel-koni text-[26px] font-black rounded-lg w-[275px] h-[51px]"
                          type="primary"
                          htmlType="submit"
                          onClick={() => form.submit()}
                        >
                          Gửi liên hệ
                        </Button>
                      </Form.Item>
                    </Row>
                  </Form>
                </div>
              </Card>
            </Col>
            <Col span={8} className="flex flex-col justify-between">
              <a
                href="https://goo.gl/maps/BuRDrUUEdWQ5h7cc8"
                target="_blank"
                rel="noreferrer"
              >
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
              </a>
              <a href="mailto:investigate@your-site.com">
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
              </a>
              <a href="tel:+84145689798">
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
              </a>
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
