import { Button, Card, Col, QRCode, Row } from "antd";
import Layouts from "../../layout/Layout";
import Alvin from "../../assets/images/Alvin.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../core/store/store";
import { getBookingByBookingId } from "../../core/store/bookingSlice";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import PaymentSuccessCarousel from "../../components/carousel/PaymentSuccessCarousel";

interface Item {
  id: string;
  name: string;
  qrCode: JSX.Element;
  dateUse: string;
}

const PaymentSuccess = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>();
  const bookingData: any = useSelector(
    (state: RootState) => state.firestoreBooking.data
  );

  const [bookingTicket, setBookingTicket] = useState<Item[]>([]);

  useEffect(() => {
    dispatch(
      getBookingByBookingId(
        JSON.parse(sessionStorage.getItem("bookingId") as string)
      )
    );

    const ticketName = `ALT${new Date().getFullYear()}`;
    const ticketArray: Item[] = [];
    const ticketQuantity = bookingData.quantity;

    for (let i = 0; i < ticketQuantity; i++) {
      ticketArray.push({
        id: bookingData.id + i,
        name: ticketName + (i + 1).toString().padStart(4, "0"),
        qrCode: (
          <QRCode
            bordered={false}
            value={`${bookingData.bookingId} - ${
              bookingData.dateUse
            } - ${ticketName}${(i + 1).toString().padStart(4, "0")} - Vé Cổng ${
              i + 1
            }/${ticketQuantity}`}
          />
        ),
        dateUse: bookingData.dateUse,
      });
    }

    setBookingTicket(ticketArray);
  }, [
    bookingData.bookingId,
    bookingData.dateUse,
    bookingData.id,
    bookingData.quantity,
    dispatch,
  ]);

  const handleDownloadTicket = () => {
    // capture lấy ra element có class là slick-track bỏ qua các element có class là slick-slide slick-cloned
    const capture = document.querySelector(
      ".slick-track:not(.slick-slide.slick-cloned)"
    ) as HTMLElement;
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("landscape", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("Vé Cổng.pdf");
    });
  };

  const handleSendEmail = () => {
    console.log("send email");
  };

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
              <PaymentSuccessCarousel items={bookingTicket} />
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
                onClick={handleDownloadTicket}
              >
                Tải vé
              </Button>
            </Col>
            <Col>
              <Button
                className="mt-3 button-submit flex justify-center items-start text-white iciel-koni text-base font-black rounded-lg w-[184px] h-[34px]"
                type="primary"
                htmlType="button"
                onClick={handleSendEmail}
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
