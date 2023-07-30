import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { CSSProperties } from "react";
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
    // cách nhau 15px không dùng margin vì nó sẽ làm thay đổi kích thước của item
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
}

interface CarouselRenderItemProps<T> {
  readonly item: T;
  readonly isSnapPoint: boolean;
}

export const Carousel = <T extends any>({
  items,
  renderItem,
}: CarouselProps<T>) => {
  const { scrollRef, prev, next, snapPointIndexes } = useSnapCarousel();
  return (
    <div className="py-11 relative" style={styles.root}>
      <Button
        className="px-[11px] py-[20px] border-0 flex justify-center items-center custom-button rounded-lg absolute top-1/2 left-[-43px] transform -translate-y-1/2"
        type="primary"
        htmlType="button"
        onClick={() => prev()}
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
      <Button
        className="px-[11px] py-[20px] border-0 flex justify-center items-center custom-button rounded-lg absolute top-1/2 right-[-43px] transform -translate-y-1/2"
        type="primary"
        htmlType="button"
        onClick={() => next()}
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
