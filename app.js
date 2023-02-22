const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "MRF",
    price: 119,
    colors: [
      {
        code: "black",
        img: "https://c.ndtvimg.com/2023-01/9i1k77l8_virat-kohli-afp_625x300_16_January_23.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
      },
      {
        code: "darkblue",
        img: "https://cdn.24.co.za/files/Cms/General/d/9739/690da382330849c0abac1d47a23c617f.png",
      },
    ],
  },
  {
    id: 2,
    title: "SS",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "https://c.ndtvimg.com/2022-05/27ro96a_kieron-pollard-bcciipl_625x300_12_May_22.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
      },
      {
        code: "green",
        img: "https://dhenkanaldiaries.files.wordpress.com/2020/03/d425258b-97cc-4623-b2ef-2472562e16cf-1000x1063-1.jpeg?w=963s",
      },
    ],
  },
  {
    id: 3,
    title: "CEAT",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "https://www.sportsadda.com/static-assets/waf-images/28/af/fc/16-9/nWA9qdC9pF.jpg?v=1.2&w=420%20420w",
      },
      {
        code: "green",
        img: "https://imagevars.gulfnews.com/2019/11/11/Shreyas-Iyer_16e5a07879e_large.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "KOOKABURRA",
    price: 129,
    colors: [
      {
        code: "black",
        img: "https://i.guim.co.uk/img/media/cb29b3c8c78e4007e6aca1d744f86cba40ed71be/50_61_2596_1558/master/2596.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8f4c5927539009e8d7c11f070fb688a5",
      },
      {
        code: "SPARTAN",
        img: "https://caughtatpoint.com/wp-content/uploads/2019/05/buttler.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "https://image.khaleejtimes.com/?uuid=736d8a2d-4217-401f-a826-99e231dd6bf3&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.94369&x=0&y=0&width=1200&height=675",
      },
      {
        code: "black",
        img: "https://cricketaddictor.com/wp-content/uploads/2021/03/Chris-Gayle-8.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});