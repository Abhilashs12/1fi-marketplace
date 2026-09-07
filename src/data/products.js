const products = [
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    brand: "Apple",
    description:
      "iPhone 17 Pro with a premium design, powerful performance and an advanced camera system.",
    variants: [
      {
        id: "iphone-17-pro-silver",
        name: "Silver",
        storage: "256 GB",
        price: 129900,
        mrp: 134900,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
      },
      {
        id: "iphone-17-pro-black",
        name: "Black",
        storage: "512 GB",
        price: 149900,
        mrp: 154900,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
      },
    ],
    emiPlans: [
      {
        id: "iphone-3",
        monthlyAmount: 43300,
        tenure: 3,
        interestRate: 0,
        cashback: 2000,
      },
      {
        id: "iphone-6",
        monthlyAmount: 21650,
        tenure: 6,
        interestRate: 0,
        cashback: 2500,
      },
      {
        id: "iphone-12",
        monthlyAmount: 10825,
        tenure: 12,
        interestRate: 0,
        cashback: 3000,
      },
      {
        id: "iphone-24",
        monthlyAmount: 6200,
        tenure: 24,
        interestRate: 10.5,
        cashback: 3000,
      },
    ],
  },
  {
    id: "samsung-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    description:
      "Galaxy S24 Ultra with a premium display, flagship performance and advanced camera capabilities.",
    variants: [
      {
        id: "s24-black",
        name: "Titanium Black",
        storage: "256 GB",
        price: 109999,
        mrp: 119999,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
      },
      {
        id: "s24-gray",
        name: "Titanium Gray",
        storage: "512 GB",
        price: 119999,
        mrp: 129999,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
      },
    ],
    emiPlans: [
      {
        id: "s24-3",
        monthlyAmount: 36667,
        tenure: 3,
        interestRate: 0,
        cashback: 1500,
      },
      {
        id: "s24-6",
        monthlyAmount: 18333,
        tenure: 6,
        interestRate: 0,
        cashback: 2000,
      },
      {
        id: "s24-12",
        monthlyAmount: 9167,
        tenure: 12,
        interestRate: 0,
        cashback: 2500,
      },
      {
        id: "s24-24",
        monthlyAmount: 5200,
        tenure: 24,
        interestRate: 10.5,
        cashback: 2500,
      },
    ],
  },
  {
    id: "oneplus-13",
    name: "OnePlus 13",
    brand: "OnePlus",
    description:
      "OnePlus 13 with flagship performance, a high-quality display and fast charging.",
    variants: [
      {
        id: "oneplus-blue",
        name: "Midnight Blue",
        storage: "256 GB",
        price: 69999,
        mrp: 74999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
      },
      {
        id: "oneplus-black",
        name: "Black",
        storage: "512 GB",
        price: 77999,
        mrp: 82999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
      },
    ],
    emiPlans: [
      {
        id: "oneplus-3",
        monthlyAmount: 23333,
        tenure: 3,
        interestRate: 0,
        cashback: 1000,
      },
      {
        id: "oneplus-6",
        monthlyAmount: 11667,
        tenure: 6,
        interestRate: 0,
        cashback: 1500,
      },
      {
        id: "oneplus-12",
        monthlyAmount: 5833,
        tenure: 12,
        interestRate: 0,
        cashback: 2000,
      },
      {
        id: "oneplus-24",
        monthlyAmount: 3400,
        tenure: 24,
        interestRate: 10.5,
        cashback: 2000,
      },
    ],
  },
];

export default products;