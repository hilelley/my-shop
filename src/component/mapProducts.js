import React from "react";
export default function MapProdeucts() {
  const MapProducts = new Map([
    [
      "Product1",
      {
        title: "Pencil",
        image: "/images/pencil.jpg",
        quantity: 4,
      },
    ],
    [
      "Product2",
      {
        title: "Pen",
        image: "/images/pen.jpg",
        quantity: 6,
      },
    ],
    [
      "Product3",
      {
        title: "Notebook",
        image: "/images/noteBook.jpg",
        quantity: 3,
      },
    ],
    [
      "Product4",
      {
        title: "Book",
        image: "/images/book.jpg",
        quantity: 5,
      },
    ],
    [
      "Product5",
      {
        title: "Eraser",
        image: "/images/eraser.jpg",
        quantity: 2,
      },
    ],
    [
      "Product6",
      {
        title: "Sharpener",
        image: "/images/sharpener.jpg",
        quantity: 4,
      },
    ],
  ]);

  return MapProducts;
}
