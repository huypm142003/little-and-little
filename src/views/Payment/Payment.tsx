import React, { useEffect, useState } from "react";
import { Button, Card, Col, DatePicker, Form, Input, Modal, Row } from "antd";
import Layouts from "../../layout/Layout";
import { CalendarOutlined } from "@ant-design/icons";
import Trini from "../../assets/images/Trini.svg";
import PaymentError from "../../assets/images/PaymentError.svg";
import { firestore } from "../../core/firebase";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../core/store/store";
import { createBooking } from "../../core/store/bookingSlice";
import { useNavigate } from "react-router-dom";

const formatCurrency = (number: any) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const Payment = () => {
  const [modal, setModal] = React.useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const navigate = useNavigate();
  const [form] = Form.useForm();

  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>();

  const sessionStorageBooking = sessionStorage.getItem("bookingInfo");

  const [bookingInfomation, setBookingInfomation] = useState({
    name: sessionStorageBooking ? JSON.parse(sessionStorageBooking).name : "",
    email: sessionStorageBooking ? JSON.parse(sessionStorageBooking).email : "",
    phone: sessionStorageBooking ? JSON.parse(sessionStorageBooking).phone : "",
    dateUse: sessionStorageBooking
      ? JSON.parse(sessionStorageBooking).dateUse
      : new Date(),
    quantity: sessionStorageBooking
      ? JSON.parse(sessionStorageBooking).quantity
      : "", 
    pack: sessionStorageBooking ? JSON.parse(sessionStorageBooking).pack : "",
    packName: "",
    cardNumber: "",
    cardName: "",
    cardExpiration: "",
    cardCVV: "",
    price: 0,
    bookingId: Array.from({ length: 10 }, () =>
      Math.random().toString(36).charAt(2)
    ).join(""),
  });

  useEffect(() => {
    sessionStorage.getItem("bookingInfo") === null &&
      (window.location.href = "/");

    const fetchData = async () => {
      const snapshot = firestore
        .collection("packs")
        .doc(bookingInfomation.pack)
        .get();
      const data = (await snapshot).data();
      data &&
        setBookingInfomation({
          ...bookingInfomation,
          packName: data.name,
          price: data.price * bookingInfomation.quantity,
        });
    };
    fetchData();
  });

  const handleDatePickerChange = (value: any) => {
    setIsDatePickerOpen(false);
    setBookingInfomation({
      ...bookingInfomation,
      cardExpiration: value.format("DD/MM/YYYY"),
    });
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setBookingInfomation({ ...bookingInfomation, [name]: value });
  };

  const handlePayment = () => {
    sessionStorage.removeItem("bookingInfo");
    sessionStorage.setItem(
      "bookingId",
      JSON.stringify(bookingInfomation.bookingId)
    );
    dispatch(createBooking(bookingInfomation));
    navigate("/payment-success");
  };

  const packName = bookingInfomation.packName
    ? bookingInfomation.packName.split(" ")[1] +
      " " +
      bookingInfomation.packName.split(" ")[2]
    : "mặc định";

  const payment = (
    <div className="bg-gradient mt-[60px] px-10 pb-5 relative">
      <div className="card-bg p-10">
        <Card className="mt-[-2px] bg-transparent border-0">
          <Row className="flex items-center justify-center mb-4 mt-2">
            <Col>
              <h1 className="text-[92px] iciel-koni text-white font-black leading-[70px]">
                Thanh toán
              </h1>
            </Col>
          </Row>
          <Row gutter={28} className="relative mt-[35px]">
            <Col span={15}>
              <Card className="card-header-large flex items-center pb-2 text-center left-32 h-[70px] absolute z-[999] top-[-3%]">
                <h1 className="uppercase iciel-koni text-[26px] font-black text-white">
                  vé cổng - vé {packName}
                </h1>
              </Card>
              <Card className="card rounded-3xl z-[2] bg-[#fde8b3] border-0 border-b-[#ffca7b] border-b-[12px]">
                <div className="border-[#FFB489] rounded-3xl bg-[#fff6d4] border-[4px] border-dashed pb-[83px] px-20">
                  <Form layout="vertical" autoComplete="off">
                    <Row gutter={30} className="mt-12">
                      <Col span={9}>
                        <Form.Item
                          className="payment-form-item"
                          label={
                            <span className="text-[#23221f] montserrat font-semibold leading-[30px]">
                              Số tiền thanh toán
                            </span>
                          }
                        >
                          <Input
                            className="custom-input text-[#23221f] montserrat font-normal"
                            value={`${formatCurrency(
                              bookingInfomation.price
                            )} vnđ`}
                            readOnly
                          />
                        </Form.Item>
                      </Col>
                      <Col span={6}>
                        <Form.Item
                          className="payment-form-item"
                          label={
                            <span className="text-[#23221f] montserrat font-semibold leading-[30px]">
                              Số lượng vé
                            </span>
                          }
                        >
                          <div className="flex items-center">
                            <Input
                              className="custom-input w-20 text-[#23221f] montserrat font-normal mr-2"
                              name="quantity"
                              min={1}
                              value={bookingInfomation.quantity}
                              onChange={handleInputChange}
                              type="number"
                            />
                            <span className="text-[#23221f] montserrat font-normal">
                              vé
                            </span>
                          </div>
                        </Form.Item>
                      </Col>
                      <Col span={9}>
                        <Form.Item
                          className="payment-form-item"
                          label={
                            <span className="text-[#23221f] montserrat font-semibold leading-[30px]">
                              Ngày sử dụng
                            </span>
                          }
                        >
                          <Input
                            className="custom-input text-[#23221f] montserrat font-normal"
                            value={bookingInfomation.dateUse}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item
                      className="payment-form-item"
                      label={
                        <span className="text-[#23221f] montserrat font-semibold leading-[30px]">
                          Thông tin liên hệ
                        </span>
                      }
                    >
                      <Input
                        className="custom-input w-[315px] text-[#23221f] montserrat font-normal"
                        value={bookingInfomation.name}
                      />
                    </Form.Item>
                    <Form.Item
                      className="payment-form-item"
                      label={
                        <span className="text-[#23221f] montserrat font-semibold leading-[30px]">
                          Điện thoại
                        </span>
                      }
                    >
                      <Input
                        className="custom-input w-[315px] text-[#23221f] montserrat font-normal"
                        value={bookingInfomation.phone}
                      />
                    </Form.Item>
                    <Form.Item
                      className="payment-form-item"
                      label={
                        <span className="text-[#23221f] montserrat font-semibold leading-[30px]">
                          Email
                        </span>
                      }
                    >
                      <Input
                        className="custom-input w-[315px] text-[#23221f] montserrat font-normal"
                        value={bookingInfomation.email}
                      />
                    </Form.Item>
                  </Form>
                </div>
              </Card>
            </Col>
            <Col className="absolute top-[-0.2px] right-[-1.14%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 584"
                fill="none"
                width="800"
                height="535"
              >
                <path
                  d="M 139.686 578.711 L 102 556 L 81.1709 547.233 L 75.184 542.53 V 41.2605 L 81.1709 36.5576 L 110 15 L 139.686 5.0793 C 139.686 5.0793 149.832 0.9407 114.603 0.0315 C 85.9604 -0.721 70.2052 22.6369 70.2052 22.6369 C 60.4685 34.551 56.7188 37.4668 39.7662 18.4043 C 22.8135 -0.6583 -7 0 -24 7 L 19 28 L 39.7662 42.4833 V 541.339 L 14 560 L 0 583.791 C -10 589 22.8451 584.512 40 567 C 56.7188 546.355 60.4685 549.271 70.2052 561.185 C 70.2052 561.185 85.9604 584.543 114.603 583.791 C 149.801 582.85 139.686 578.711 139.686 578.711 Z M 57.2382 519.805 C 50.4635 519.805 45.0122 514.349 45.0122 507.64 C 45.0122 500.899 50.495 495.475 57.2382 495.475 C 63.9815 495.475 69.4643 500.93 69.4643 507.64 C 69.4958 514.349 64.013 519.805 57.2382 519.805 Z M 57.2382 483.279 C 50.4635 483.279 45.0122 477.823 45.0122 471.114 C 45.0122 464.373 50.495 458.949 57.2382 458.949 C 63.9815 458.949 69.4643 464.404 69.4643 471.114 C 69.4958 477.823 64.013 483.279 57.2382 483.279 Z M 57.2382 448.069 C 50.4635 448.069 45.0122 442.614 45.0122 435.905 C 45.0122 429.164 50.495 423.74 57.2382 423.74 C 63.9815 423.74 69.4643 429.195 69.4643 435.905 C 69.4958 442.614 64.013 448.069 57.2382 448.069 Z M 57.2382 411.7 C 50.4635 411.7 45.0122 406.245 45.0122 399.535 C 45.0122 392.794 50.495 387.37 57.2382 387.37 C 63.9815 387.37 69.4643 392.826 69.4643 399.535 C 69.4958 406.245 64.013 411.7 57.2382 411.7 Z M 57.2382 376.303 C 50.4635 376.303 45.0122 370.847 45.0122 364.138 C 45.0122 357.397 50.495 351.973 57.2382 351.973 C 63.9815 351.973 69.4643 357.428 69.4643 364.138 C 69.4958 370.879 64.013 376.303 57.2382 376.303 Z M 57.2382 340.121 C 50.4635 340.121 45.0122 334.666 45.0122 327.957 C 45.0122 321.216 50.495 315.792 57.2382 315.792 C 63.9815 315.792 69.4643 321.247 69.4643 327.957 C 69.4958 334.666 64.013 340.121 57.2382 340.121 Z M 57.2382 304.567 C 50.4635 304.567 45.0122 299.112 45.0122 292.402 C 45.0122 285.661 50.495 280.237 57.2382 280.237 C 63.9815 280.237 69.4643 285.693 69.4643 292.402 C 69.4958 299.112 64.013 304.567 57.2382 304.567 Z M 57.2382 268.512 C 50.4635 268.512 45.0122 263.056 45.0122 256.347 C 45.0122 249.637 50.495 244.182 57.2382 244.182 C 63.9815 244.182 69.4643 249.637 69.4643 256.347 C 69.4643 263.056 64.013 268.512 57.2382 268.512 Z M 57.2382 232.832 C 50.4635 232.832 45.0122 227.377 45.0122 220.667 C 45.0122 213.926 50.495 208.502 57.2382 208.502 C 63.9815 208.502 69.4643 213.958 69.4643 220.667 C 69.4958 227.377 64.013 232.832 57.2382 232.832 Z M 57.2382 196.933 C 50.4635 196.933 45.0122 191.477 45.0122 184.768 C 45.0122 178.027 50.495 172.603 57.2382 172.603 C 63.9815 172.603 69.4643 178.058 69.4643 184.768 C 69.4958 191.477 64.013 196.933 57.2382 196.933 Z M 57.2382 161.065 C 50.4635 161.065 45.0122 155.61 45.0122 148.9 C 45.0122 142.159 50.495 136.735 57.2382 136.735 C 63.9815 136.735 69.4643 142.191 69.4643 148.9 C 69.4958 155.61 64.013 161.065 57.2382 161.065 Z M 57.2382 125.354 C 50.4635 125.354 45.0122 119.899 45.0122 113.189 C 45.0122 106.48 50.495 101.024 57.2382 101.024 C 63.9815 101.024 69.4643 106.48 69.4643 113.189 C 69.4643 119.899 64.013 125.354 57.2382 125.354 Z M 57.2382 89.3298 C 50.4635 89.3298 45.0122 83.8744 45.0122 77.1649 C 45.0122 70.4554 50.495 65 57.2382 65 C 63.9815 65 69.4643 70.4554 69.4643 77.1649 C 69.4643 83.8744 64.013 89.3298 57.2382 89.3298 Z"
                  fill="#FDE8B3"
                />
              </svg>
            </Col>
            <Col
              span={9}
              className="flex flex-col items-center justify-between"
            >
              <Card className="card-header-large flex items-center pb-2 text-center h-[70px] absolute z-[999] top-[-3%]">
                <h1 className="uppercase iciel-koni text-[26px] font-black text-white">
                  thông tin thanh toán
                </h1>
              </Card>
              <Card className="card rounded-3xl z-[2] bg-[#fde8b3] border-0 border-b-[#ffca7b] border-b-[12px]">
                <div className="border-[#FFB489] rounded-3xl bg-[#fff6d4] border-[4px] border-dashed px-20">
                  <Form
                    layout="vertical"
                    className="mt-12"
                    form={form}
                    onFinish={handlePayment}
                  >
                    <Form.Item
                      className="payment-form-item"
                      name="cardNumber"
                      label={
                        <span className="text-[#23221f] montserrat font-semibold leading-[30px]">
                          Số thẻ
                        </span>
                      }
                      rules={[
                        {
                          required: true,
                          message: "",
                        },
                      ]}
                    >
                      <Input
                        className="custom-input text-[#23221f] montserrat font-normal"
                        placeholder="Số thẻ"
                        name="cardNumber"
                        value={bookingInfomation.cardNumber}
                        onChange={handleInputChange}
                        type="number"
                      />
                    </Form.Item>
                    <Form.Item
                      className="payment-form-item"
                      label={
                        <span className="text-[#23221f] montserrat font-semibold leading-[30px]">
                          Họ tên chủ thẻ
                        </span>
                      }
                      name="cardName"
                      rules={[
                        {
                          required: true,
                          message: "",
                        },
                      ]}
                    >
                      <Input
                        className="custom-input text-[#23221f] montserrat font-normal"
                        placeholder="Họ tên chủ thẻ"
                        name="cardName"
                        value={bookingInfomation.cardName}
                        onChange={handleInputChange}
                      />
                    </Form.Item>
                    <Form.Item
                      className="payment-form-item"
                      label={
                        <span className="text-[#23221f] montserrat font-semibold leading-[30px]">
                          Ngày hết hạn
                        </span>
                      }
                    >
                      <Row gutter={16} className="flex items-center">
                        <Col span={20}>
                          <DatePicker
                            format={"DD/MM/YYYY"}
                            placeholder="Ngày hết hạn"
                            suffixIcon={false}
                            className="custom-input w-full"
                            superNextIcon={false}
                            superPrevIcon={false}
                            onChange={handleDatePickerChange}
                            open={isDatePickerOpen}
                            showToday={false}
                          />
                        </Col>
                        <Col span={4}>
                          <Button
                            className="px-[11px] py-[20px] border-0 flex justify-center items-center custom-button rounded-lg"
                            type="primary"
                            htmlType="button"
                            onClick={() =>
                              setIsDatePickerOpen(!isDatePickerOpen)
                            }
                          >
                            <CalendarOutlined />
                          </Button>
                        </Col>
                      </Row>
                    </Form.Item>
                    <Form.Item
                      className="payment-form-item"
                      label={
                        <span className="text-[#23221f] montserrat font-semibold leading-[30px]">
                          CVV/CVC
                        </span>
                      }
                      name="cardCVV"
                      rules={[
                        {
                          required: true,
                          message: "",
                        },
                      ]}
                    >
                      <Input
                        className="custom-input w-[100px] text-[#23221f] montserrat font-normal"
                        placeholder="CVV/CVC"
                        name="cardCVV"
                        value={bookingInfomation.cardCVV}
                        onChange={handleInputChange}
                      />
                    </Form.Item>
                    <Form.Item className="flex items-center justify-center mt-5">
                      <Button
                        className="button-submit flex justify-center items-start text-white iciel-koni text-[26px] font-black rounded-2xl w-[275px] h-[51px]"
                        type="primary"
                        htmlType="submit"
                        onClick={() => form.submit()}
                      >
                        Thanh toán
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </Card>
            </Col>
          </Row>
          <Modal
            width={410}
            centered
            open={modal}
            closable={false}
            onCancel={() => setModal(false)}
            title={
              <div className="relative p-10 bg-[#ff8b15]">
                <img
                  src={PaymentError}
                  alt="PaymentError"
                  className="absolute top-[-60px] w-[130px] left-1/2 transform -translate-x-1/2"
                />
              </div>
            }
            footer={null}
          >
            <div className="monterrat text-[#23221F] text-xl font-normal leading-[30px] p-5">
              <p>Hình như đã có lỗi xảy ra khi thanh toán...</p>
              <p>
                Vui lòng kiểm tra lại thông tin liên hệ, thông tin thẻ và thử
                lại.
              </p>
            </div>
          </Modal>
          <img
            src={Trini}
            alt="Trini"
            className="absolute bottom-5 left-[-80px] w-[190px] z-10"
          />
        </Card>
      </div>
    </div>
  );

  return <Layouts content={payment} />;
};

export default Payment;
