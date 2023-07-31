import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { CSSProperties, useState } from "react";
import { useSnapCarousel } from "react-snap-carousel";

const styles = {
  root: {},
  scroll: {
    position: "relative",
    display: "flex",
    overflow: "hidden",
    scrollSnapType: "x mandatory",
    scrollBehavior: "smooth",
  },
  item: {
    flex: "0 0 auto",
    scrollSnapAlign: "center",
    width: "calc(100% / 4)",
    padding: "0 13px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  itemSnapPoint: {
    scrollSnapAlign: "start",
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  nextPrevButton: {},
  nextPrevButtonDisabled: { opacity: 0.3 },
  pagination: {
    display: "flex",
  },
  paginationButton: {
    margin: "10px",
  },
  paginationButtonActive: { opacity: 0.3 },
  pageIndicator: {
    display: "flex",
    justifyContent: "center",
  },
} satisfies Record<string, CSSProperties>;

interface CarouselProps<T> {
  readonly items: T[];
  readonly renderItem: (
    props: CarouselRenderItemProps<T>
  ) => React.ReactElement<CarouselItemProps>;
  visiblePage?: boolean;
}

interface CarouselRenderItemProps<T> {
  readonly item: T;
  readonly isSnapPoint: boolean;
}

export const Carousel = <T extends any>({
  items,
  renderItem,
  visiblePage = false,
}: CarouselProps<T>) => {
  const { scrollRef, prev, next, snapPointIndexes } = useSnapCarousel();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePrev = () => {
    prev();
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    next();
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  return (
    <div
      className={visiblePage === true ? "py-[34.5px]" : "py-11 relative"}
      style={styles.root}
    >
      <Button
        className={
          visiblePage === true
            ? "px-[11px] py-[20px] border-0 flex justify-center items-center custom-button rounded-lg absolute top-1/2 left-[25px] transform -translate-y-1/2"
            : "px-[11px] py-[20px] border-0 flex justify-center items-center custom-button rounded-lg absolute top-1/2 left-[-43px] transform -translate-y-1/2"
        }
        type="primary"
        htmlType="button"
        onClick={handlePrev}
        // disabled={currentPage === 1}
      >
        <CaretLeftOutlined />
      </Button>
      <ul style={styles.scroll} ref={scrollRef}>
        {items.map((item, i) =>
          renderItem({
            item,
            isSnapPoint: snapPointIndexes.has(i),
          })
        )}
      </ul>
      {visiblePage === true && (
        <div className="mt-3 flex items-center justify-between text-[#23221f] text-[18px] montserrat font-normal mx-5">
          <p className="leading-[30px]">Số lượng: {items.length} vé</p>
          <p className="leading-[26px] opacity-50">
            Trang: {currentPage}/{totalPages}
          </p>
        </div>
      )}
      <Button
        className={
          visiblePage === true
            ? "px-[11px] py-[20px] border-0 flex justify-center items-center custom-button rounded-lg absolute top-1/2 right-[25px] transform -translate-y-1/2"
            : "px-[11px] py-[20px] border-0 flex justify-center items-center custom-button rounded-lg absolute top-1/2 right-[-43px] transform -translate-y-1/2"
        }
        type="primary"
        htmlType="button"
        onClick={handleNext}
        // disabled={currentPage === totalPages}
      >
        <CaretRightOutlined />
      </Button>
    </div>
  );
};

interface CarouselItemProps {
  readonly isSnapPoint: boolean;
  readonly children?: React.ReactNode;
}

export const CarouselItem = ({ isSnapPoint, children }: CarouselItemProps) => (
  <li
    style={{
      ...styles.item,
      ...(isSnapPoint ? styles.itemSnapPoint : {}),
    }}
  >
    {children}
  </li>
);
