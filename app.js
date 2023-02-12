import React from "react";
import ReactDOM from "react-dom/client";

// Config Driven UI
const resturantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "509008",
      name: "Burger King",
      uuid: "69f93cda-d93a-4f64-bf93-04c788fd7020",
      city: "24",
      area: "Raj Nagar Extension",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "nn3tgn11bbe3yq0bz1rz",
      cuisines: ["Burgers", "American"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 32,
      minDeliveryTime: 32,
      maxDeliveryTime: 32,
      slaString: "32 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "burger-king-vvip-mall-raj-nagar",
        city: "noida",
      },
      cityState: "24",
      address:
        "SHOP NO. 30,31,32,33, GROUND FLOOR , VVIP STYLE MALL, RAJNAGAR EXTENSION, GHAZIABAD, UTTAR PRADESH,201017",
      locality: "Vvip Style Mall",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5936560~p=1~eid=00000186-4421-95b6-32af-79b900e4016b",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "509008",
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "626643",
      name: "CREATIVE CHEF BAKER",
      uuid: "6418e0b3-1af6-4b47-bb2b-79d096c94e47",
      city: "24",
      area: "Raj Nagar Extension",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "biwoan9of4uufghjtvz9",
      cuisines: ["Bakery"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 0.30000001192092896,
      slugs: {
        restaurant: "creative-chef-baker-raj-nagar-raj-nagar",
        city: "noida",
      },
      cityState: "24",
      address:
        "Shop No khasra No Noor Nagar Sihani Raj Nagar Ghaziabad Nagar Nigam Zone 14 Ghaziabad Uttar Pradesh",
      locality: "Sihani Road",
      parentId: 66068,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
          {
            meta: "50% off on all orders",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
          {
            meta: "50% off on all orders",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
          {
            meta: "50% off on all orders",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "626643",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 0.30000001192092896,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "346038",
      name: "Baap Of Rolls",
      uuid: "62f623c2-aa16-47f8-b4ca-9e789f235b05",
      city: "24",
      area: "Raj Nagar Extension",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "m6h8xu48wamatju6xtue",
      cuisines: ["North Indian", "Snacks"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 1,
      slugs: {
        restaurant: "baap-of-rolls-raj-nagar-raj-nagar",
        city: "noida",
      },
      cityState: "24",
      address: "hop no.- gf-41, gnb mall rajnagar extension, ghaziabad, 201017",
      locality: "Gnb Mall",
      parentId: 14310,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT200 off",
        shortDescriptionList: [
          {
            meta: "FLAT200 off | Use VDAY",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT200 off | Use VDAY",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹200 OFF",
        shortDescriptionList: [
          {
            meta: "Use VDAY",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT200 off | Use VDAY",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "346038",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 1,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "454201",
      name: "KFC",
      uuid: "2350b4e7-99e5-41ef-92a4-d9902732b454",
      city: "24",
      area: "Raj Nagar Extension",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: "kfc-gnb-mall-raj-nagar",
        city: "noida",
      },
      cityState: "24",
      address:
        "Ground floor GNB MALL NH58 by pass road raj nagar extension Ghaziabad",
      locality: "Gnb Mall",
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "20% off",
        shortDescriptionList: [
          {
            meta: "20% off | Use SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5936777~p=4~eid=00000186-4421-95b6-32af-79ba00e40435",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "454201",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.9",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "567914",
      name: "Cake N Crust",
      uuid: "988274dc-50a7-4822-8ef7-ee12f124d576",
      city: "24",
      area: "Raj Nagar Extension",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "k48pewdxrbamh6epink0",
      cuisines: ["Bakery", "Italian", "Desserts", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 0.8999999761581421,
      slugs: {
        restaurant: "cake-n-crust-raj-nagar-raj-nagar",
        city: "noida",
      },
      cityState: "24",
      address:
        "1st Floor, Shop No 3, Ajnara Orchid, Raj Nagar Extension, Ghaziabad 201017",
      locality: "Ajnara Orchid",
      parentId: 54996,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "567914",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 0.8999999761581421,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "673176",
      name: "Donald's Pastry Shop",
      uuid: "eebeb69e-ee9f-4b58-b67e-d32468e3bac6",
      city: "24",
      area: "Raj Nagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "57cedff0bab6c904794e39ba33cb8c9d",
      cuisines: ["Bakery", "Snacks", "Desserts"],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 17,
      minDeliveryTime: 17,
      maxDeliveryTime: 17,
      slaString: "17 MINS",
      lastMileTravel: 0.8999999761581421,
      slugs: {
        restaurant: "donald's-pastry-shop-raj-nagar-raj-nagar",
        city: "noida",
      },
      cityState: "24",
      address:
        "SHOP NO-5 UGF, AJNARA INTEGRITY MARKET, RAJ NAGAR EXTN., GHAZIABAD, Ghaziabad Nagar Nigam Zone-15, Ghaziabad, Uttar Pradesh-201002",
      locality: "Ajnara intergrity Market",
      parentId: 13680,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "NEW",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "673176",
        deliveryTime: 17,
        minDeliveryTime: 17,
        maxDeliveryTime: 17,
        lastMileTravel: 0.8999999761581421,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: true,
    },
    subtype: "basic",
  },
];

const RestaurantCard = ({name,cuisines,avgRating,deliveryTime,lastMileTravelString,cloudinaryImageId}) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h4>{avgRating} ratings</h4>
      <h5>{deliveryTime} deliveryTime MINS</h5>
      <h6>{lastMileTravelString} kms</h6>
    </div>
  );
};

const Title = () => {
  return (
    <div>
      <a href="/">
        {" "}
        <img
          alt="Food Haveli"
          src="https://i.pinimg.com/originals/28/65/07/28650724b95899bd15c7266906a738fa.png"
        />
        ;
      </a>
    </div>
  );
};

const Header = () => {
  return (
    <div className="Nav-list">
      <Title />
      <div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Food List</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//props- properties
const Body = () => {
  return (
    <div className="resturant-list">
        {
            resturantList.map((restaurant)=>{
             return <RestaurantCard {...restaurant.data}/>   

            })
        }
    
  
    </div>
  );
};

const Footer = () => {
  return <div>Footer</div>;
};
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
