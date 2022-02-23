import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carousel } from '../pages/homepage/components/carousel/carousel/Carousel';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

  productNames: string[] = [
    "Bamboo Watch", 
    "Black Watch", 
    "Blue Band", 
    "Blue T-Shirt", 
    "Bracelet", 
    "Brown Purse", 
    "Chakra Bracelet",
    "Galaxy Earrings",
    "Game Controller",
    "Gaming Set",
    "Gold Phone Case",
    "Green Earbuds",
    "Green T-Shirt",
    "Grey T-Shirt",
    "Headphones",
    "Light Green T-Shirt",
    "Lime Band",
    "Mini Speakers",
    "Painted Phone Case",
    "Pink Band",
    "Pink Purse",
    "Purple Band",
    "Purple Gemstone Necklace",
    "Purple T-Shirt",
    "Shoes",
    "Sneakers",
    "Teal T-Shirt",
    "Yellow Earbuds",
    "Yoga Mat",
    "Yoga Set",
];

  constructor(private http: HttpClient) { }

  getProductsSmall() {
    return this.http.get<any>('assets/products-small.json')
    .toPromise()
    .then(res => <Carousel[]>res.data)
    .then(data => { return data; });
}

getProducts() {
    return this.http.get<any>('assets/products.json')
    .toPromise()
    .then(res => <Carousel[]>res.data)
    .then(data => { return data; });
}

getProductsWithOrdersSmall() {
    return this.http.get<any>('assets/products-orders-small.json')
    .toPromise()
    .then(res => <Carousel[]>res.data)
    .then(data => { return data; });
}

generatePrduct(): Carousel {
    const carousel: Carousel =  {
        id: this.generateId(),
        name: this.generateName(),
        description: "Product Description",
        price: this.generatePrice(),
        quantity: this.generateQuantity(),
        category: "Product Category",
        inventoryStatus: this.generateStatus(),
        rating: this.generateRating()
    };

    carousel.image = carousel.name?.toLocaleLowerCase().split(/[ ,]+/).join('-')+".jpg";;
    return carousel;
}

generateId() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    
    return text;
}

generateName() {
    return this.productNames[Math.floor(Math.random() * Math.floor(30))];
}

generatePrice() {
    return Math.floor(Math.random() * Math.floor(299)+1);
}

generateQuantity() {
    return Math.floor(Math.random() * Math.floor(75)+1);
}

generateStatus() {
    return this.status[Math.floor(Math.random() * Math.floor(3))];
}

generateRating() {
    return Math.floor(Math.random() * Math.floor(5)+1);
}
}
