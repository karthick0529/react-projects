import React, { useState } from 'react';

export const ProductContext = React.createContext(null);

function DataContextComponents({ children }) {
  const [user, setUser] = useState({
    "products": [
          {
              "id": 1,
              "title": "iPhone 9",
              "description": "An apple mobile which is nothing like apple",
              "price": 549,
              "discountPercentage": 12.96,
              "rating": 4.69,
              "stock": 94,
              "brand": "Apple",
              "category": "smartphones",
              "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
              "images": [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWu_uDKBP-AgyzgfQzHds2PB7Hqplq6iN-W_UMttlsWqOLkkzmUwx4WB13KQjRalcKWl8&usqp=CAU',
                "https://multimedia.bbycastatic.ca/multimedia/products/500x500/159/15992/15992509.jpeg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCkXoWvKp9Gi8_rwYgLg3YGxh_oyLuN5akucflBFKd4RauyKN-m7HOCG45k-bMBnfpbBA&usqp=CAU",
                "https://img.freepik.com/free-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704931200&semt=sph"
              ]
          },
          {
              "id": 2,
              "title": "iPhone X",
              "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
              "price": 899,
              "discountPercentage": 17.94,
              "rating": 4.44,
              "stock": 34,
              "brand": "Apple",
              "category": "smartphones",
              "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
              "images": [
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-pink?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1693063160403',
                "https://multimedia.bbycastatic.ca/multimedia/products/500x500/159/15992/15992509.jpeg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCkXoWvKp9Gi8_rwYgLg3YGxh_oyLuN5akucflBFKd4RauyKN-m7HOCG45k-bMBnfpbBA&usqp=CAU",
                "https://img.freepik.com/free-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704931200&semt=sph"
              ]
          },
          {
              "id": 3,
              "title": "Samsung Universe 9",
              "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
              "price": 1249,
              "discountPercentage": 15.46,
              "rating": 4.09,
              "stock": 36,
              "brand": "Samsung",
              "category": "smartphones",
              "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
              "images": [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8gv9GWota63pEqP_pWpDmyOkv8478BQE_blI9CPpUVyj4RugNJ_O3LqzG5HLv8ZSM2vo&usqp=CAU',
                "https://multimedia.bbycastatic.ca/multimedia/products/500x500/159/15992/15992509.jpeg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCkXoWvKp9Gi8_rwYgLg3YGxh_oyLuN5akucflBFKd4RauyKN-m7HOCG45k-bMBnfpbBA&usqp=CAU",
                "https://img.freepik.com/free-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704931200&semt=sph"
              ]
          },
          {
              "id": 4,
              "title": "OPPOF19",
              "description": "OPPO F19 is officially announced on April 2021.",
              "price": 280,
              "discountPercentage": 17.91,
              "rating": 4.3,
              "stock": 123,
              "brand": "OPPO",
              "category": "smartphones",
              "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
              "images": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCkXoWvKp9Gi8_rwYgLg3YGxh_oyLuN5akucflBFKd4RauyKN-m7HOCG45k-bMBnfpbBA&usqp=CAU",
                "https://multimedia.bbycastatic.ca/multimedia/products/500x500/159/15992/15992509.jpeg",
                "https://img.freepik.com/free-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704931200&semt=sph"
              ]
          },
          {
              "id": 5,
              "title": "Huawei P30",
              "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
              "price": 499,
              "discountPercentage": 10.58,
              "rating": 4.09,
              "stock": 32,
              "brand": "Huawei",
              "category": "smartphones",
              "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
              "images": [
                "https://img.freepik.com/free-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704931200&semt=sph",
                  "https://multimedia.bbycastatic.ca/multimedia/products/500x500/159/15992/15992509.jpeg",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCkXoWvKp9Gi8_rwYgLg3YGxh_oyLuN5akucflBFKd4RauyKN-m7HOCG45k-bMBnfpbBA&usqp=CAU"
              ]
          }
      ]});

      return (
        <ProductContext.Provider value={{ user, setUser }}>
          {children}
        </ProductContext.Provider>
      );
    }
    
    export default DataContextComponents;