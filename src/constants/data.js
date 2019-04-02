export const DATA_HEADER = {
  logo: {
    logoImages: "https://cdn6.agoda.net/images/MVC/default/agoda-logo.svg",
    logoLink: "/",
    tag: "a"
  },
  linkItem: [{
      text: "Chỗ ở",
      link: '/',
      tag: "a"
    },
    {
      text: "Chuyến bay",
      link: '/',
      tag: "a"
    },
    {
      text: "Taxi sân bay",
      link: '/',
      tag: "a"
    },
    {
      text: "Ưu đãi cho gia đình",
      link: '/',
      tag: "a"
    },
    {
      text: "agoda Homes",
      link: '/',
      tag: "a",
      icon: true
    }
  ]
}

export const HEADER_OPTION_CITY = ["Seoul", "Gangnam", "Dongdaemun", "VietNam"]

export const DATA_HEADER_FILTER = {
  Popular: [{
      name: "Thanh toán tại nơi ở",
      count: 966,
      value: "1"
    },
    {
      name: "phù hợp cho gia đình/trẻ em",
      count: 1153,
      value: "2"
    },
    {
      name: "phù hợp cho gia đình/trẻ em",
      count: 1153,
      value: "3"
    },
    {
      name: "Nhà khách / Nhà nghỉ B&B",
      count: 45,
      value: "4"
    },
    {
      name: "bãi đậu xe",
      count: 639,
      value: "5"
    },
    {
      name: "quy định hút thuốc (có phòng không hút thuốc)",
      count: 438,
      value: "6"
    },
    {
      name: "quầy lễ tân 24 giờ",
      count: 116,
      value: "7"
    }
  ],
  StarRating: [{
      icon: "ficon-star-5 star-orange",
      count: 32,
      id: 5,
      name: ""
    },
    {
      icon: "ficon-star-4 star-orange",
      count: 102,
      id: 4,
      name: ""
    },
    {
      icon: "ficon-star-3 star-orange",
      count: 446,
      id: 3,
      name: ""
    },
    {
      icon: "ficon-star-2 star-orange",
      count: 219,
      id: 2,
      name: ""
    },
    {
      icon: "ficon-star-1 star-orange",
      count: 80,
      id: 1,
      name: ""
    },
    {
      icon: "",
      count: 247,
      id: 0,
      name: "Chưa xếp hạng"
    }
  ],
  ReviewScores: [{
      name: "Trên cả tuyệt vời",
      title: "9+",
      id: 9,
      count: 174
    },
    {
      name: "Xuất sắc",
      title: "8+",
      id: 8,
      count: 581
    },
    {
      name: "Rất tốt",
      title: "7+",
      id: 7,
      count: 837
    },
    {
      name: "Hài lòng",
      title: "6+",
      id: 6,
      count: 930
    }
  ],
  Area: [{
      name: "Phố Cổ",
      count: 265
    },
    {
      name: "Quận Hoàn Kiếm",
      count: 248
    },
    {
      name: "Quận Ba Đình",
      count: 234
    },
    {
      name: "Quận Cầu Giấy",
      count: 163
    },
    {
      name: "Quận Tây Hồ",
      count: 113
    },
    {
      name: "Quận Hai Bà Trưng",
      count: 101
    },
    {
      name: "My Dinh",
      count: 63
    }
  ],
  PriceFilterRange: {
    CurrencyCode: "₫",
    CurrencyFormat: "{0} ₫",
    CurrentMax: 13546660,
    CurrentMaxPosition: 29,
    CurrentMin: 0,
    CurrentMinPosition: 0,
    FilterId: "PriceFilterRange",
    HideTag: false,
    IsDisabledPrice: false,
    IsShowCallOut: true,
    Max: 0,
    Min: 0,
    Name: "Giá phòng (1 đêm)",
    Type: 3,
    BinsPrices: [{
        Min: 0,
        Max: 920000,
        count: 17
      },
      {
        Min: 920000,
        Max: 1800000,
        count: 59
      },
      {
        Min: 1800000,
        Max: 2700000,
        count: 35
      },
      {
        Min: 2700000,
        Max: 3700000,
        count: 35
      },
      {
        Min: 3700000,
        Max: 2147483647,
        count: 42
      }
    ]
  },
  RoomAmenities: {
    ItemList: [{
        ChildItems: null,
        Count: 0,
        CountFormatted: "0",
        ExtraData: null,
        FilterData: {
          typeId: 17,
          itemId: 50,
          columnType: "RoomAmenities"
        },
        FilterGroupMetric: null,
        FilterId: "roomAmenitiesFilterList",
        FilterItemGroupId: 0,
        Icon: "ficon-private-pool",
        Id: 50,
        IsSelected: false,
        Name: "hồ bơi riêng",
        Title: null,
        Type: null,
      },
      {
        ChildItems: null,
        Count: 0,
        CountFormatted: "0",
        ExtraData: null,
        FilterData: {
          typeId: 17,
          itemId: 25,
          columnType: "RoomAmenities"
        },
        FilterGroupMetric: null,
        FilterId: "roomAmenitiesFilterList",
        FilterItemGroupId: 0,
        Icon: "ficon-air-conditioning",
        Id: 25,
        IsSelected: false,
        Name: "máy điều hòa",
        Title: null,
        Type: null,
      },
      {
        ChildItems: null,
        Count: 0,
        CountFormatted: "0",
        ExtraData: null,
        FilterData: {
          typeId: 17,
          itemId: 43,
          columnType: "RoomAmenities"
        },
        FilterGroupMetric: null,
        FilterId: "roomAmenitiesFilterList",
        FilterItemGroupId: 0,
        Icon: "ficon-balcony-terrace",
        Id: 43,
        IsSelected: false,
        Name: "ban công/sân hiên",
        Title: null,
        Type: null,
      },
      {
        ChildItems: null,
        Count: 0,
        CountFormatted: "0",
        ExtraData: null,
        FilterData: {
          typeId: 17,
          itemId: 35,
          columnType: "RoomAmenities"
        },
        FilterGroupMetric: null,
        FilterId: "roomAmenitiesFilterList",
        FilterItemGroupId: 0,
        Icon: "ficon-tv",
        Id: 35,
        IsSelected: false,
        Name: "tivi",
        Title: null,
        Type: null,
      }
    ]
  }
}
