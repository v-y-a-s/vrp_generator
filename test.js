var js2xmlparser = require("js2xmlparser");
var inp = `{
    "vehicleRouteList": [
      {
        "hexColor": "#8ae234",
        "depotLatitude": 41.8802596,
        "demandTotal": 0,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [],
        "capacity": 48000
      },
      {
        "hexColor": "#fce94f",
        "depotLatitude": 41.8802596,
        "demandTotal": 42290,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJwy_qZyv45IcRdnjRyKx7g08",
            "latitude": 41.945566,
            "demand": 42290,
            "longitude": -91.680138
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#729fcf",
        "depotLatitude": 41.8802596,
        "demandTotal": 42340,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJO4z4DqobU4gR6W5P5JE4-gU",
            "latitude": 36.055224,
            "demand": 9813,
            "longitude": -79.873963
          },
          {
            "locationName": "ChIJO4z4DqobU4gR6W5P5JE4-gU",
            "latitude": 36.055224,
            "demand": 8958,
            "longitude": -79.873963
          },
          {
            "locationName": "ChIJ90qmgKQbU4gRJXwRwJ1DOGo",
            "latitude": 36.0655903,
            "demand": 16167,
            "longitude": -79.8689107
          },
          {
            "locationName": "ChIJHzpBj3mQUogRuYCBBn_Bkyg",
            "latitude": 36.6892878,
            "demand": 7402,
            "longitude": -79.8848244
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#e9b96e",
        "depotLatitude": 41.8802596,
        "demandTotal": 41877,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJl3qLJ7lu_ogRVHN8XEImtRc",
            "latitude": 32.9188957,
            "demand": 21222,
            "longitude": -79.8492618
          },
          {
            "locationName": "ChIJa5P1XyO7-IgRn3gRAMcLkK8",
            "latitude": 33.987826,
            "demand": 20655,
            "longitude": -81.041049
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#ad7fa8",
        "depotLatitude": 41.8802596,
        "demandTotal": 44675,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJf5LjC2VrxIkR-l2ItpNMX8M",
            "latitude": 40.678692,
            "demand": 44675,
            "longitude": -75.257705
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#73d216",
        "depotLatitude": 41.8802596,
        "demandTotal": 43242,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJ82USeJxE54YR7IropSuUGwU",
            "latitude": 31.7506189,
            "demand": 43242,
            "longitude": -106.3142074
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#edd400",
        "depotLatitude": 41.8802596,
        "demandTotal": 0,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [],
        "capacity": 48000
      },
      {
        "hexColor": "#3465a4",
        "depotLatitude": 41.8802596,
        "demandTotal": 46927,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJo_lYaSZOwYkRonf8YvQPNxs",
            "latitude": 40.1202783,
            "demand": 3366,
            "longitude": -74.8367148
          },
          {
            "locationName": "ChIJocduCQiP5IkRLpPhCMZ73qU",
            "latitude": 42.0225283,
            "demand": 43561,
            "longitude": -71.0506868
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#c17d11",
        "depotLatitude": 41.8802596,
        "demandTotal": 44192,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJf5LjC2VrxIkR-l2ItpNMX8M",
            "latitude": 40.678692,
            "demand": 44192,
            "longitude": -75.257705
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#75507b",
        "depotLatitude": 41.8802596,
        "demandTotal": 34942,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJ-WRTX2ufMIgRa4-woVKSLJU",
            "latitude": 41.3531501,
            "demand": 15157,
            "longitude": -82.1555612
          },
          {
            "locationName": "ChIJP4SmpHDlMIgR0pcHU9T2Fh0",
            "latitude": 41.425745,
            "demand": 19582,
            "longitude": -81.679576
          },
          {
            "locationName": "ChIJP4SmpHDlMIgR0pcHU9T2Fh0",
            "latitude": 41.425745,
            "demand": 203,
            "longitude": -81.679576
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#4e9a06",
        "depotLatitude": 41.8802596,
        "demandTotal": 44734,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJgT-aNi-teIgR-sx-RKTMjGY",
            "latitude": 35.924117,
            "demand": 44734,
            "longitude": -89.881794
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#c4a000",
        "depotLatitude": 41.8802596,
        "demandTotal": 0,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [],
        "capacity": 48000
      },
      {
        "hexColor": "#204a87",
        "depotLatitude": 41.8802596,
        "demandTotal": 46188,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJg91xC9DBM4gRNg74_otfwMY",
            "latitude": 41.2222595,
            "demand": 9275,
            "longitude": -80.5077105
          },
          {
            "locationName": "ChIJFf3MDAiTtIkRRSTPSOjrU80",
            "latitude": 38.4193852,
            "demand": 12777,
            "longitude": -78.8968902
          },
          {
            "locationName": "ChIJkw5JvEizUogREZm7ScI2vjE",
            "latitude": 36.5838888,
            "demand": 24136,
            "longitude": -79.3903783
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#8f5902",
        "depotLatitude": 41.8802596,
        "demandTotal": 46329,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJlUxipN3OwogR4-OP66ki3Zw",
            "latitude": 27.9705094,
            "demand": 5637,
            "longitude": -82.3379827
          },
          {
            "locationName": "ChIJgRKhQe_IwogRYntuf1HPvsk",
            "latitude": 27.9059438,
            "demand": 40692,
            "longitude": -82.3830942
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#5c3566",
        "depotLatitude": 41.8802596,
        "demandTotal": 38604,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJUcJwif25QIYRqFkY949vSJ8",
            "latitude": 29.8680541,
            "demand": 38604,
            "longitude": -95.31892169999999
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#7eda25",
        "depotLatitude": 41.8802596,
        "demandTotal": 44042,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJuZJEWAXU3ocRhws7eKjAxHc",
            "latitude": 38.7245186,
            "demand": 44042,
            "longitude": -90.6684064
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#f4de27",
        "depotLatitude": 41.8802596,
        "demandTotal": 0,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [],
        "capacity": 48000
      },
      {
        "hexColor": "#5382b9",
        "depotLatitude": 41.8802596,
        "demandTotal": 46099,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJZw9135ZR4okRpxmuwsdENgU",
            "latitude": 42.9462188,
            "demand": 46099,
            "longitude": -71.3503149
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#d59b3f",
        "depotLatitude": 41.8802596,
        "demandTotal": 42494,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJafBHu955bIcRBYWiJRkjMC4",
            "latitude": 39.8165882,
            "demand": 42494,
            "longitude": -104.9671831
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#916791",
        "depotLatitude": 41.8802596,
        "demandTotal": 35440,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJFbkjfDi-9YgRtm7n0vd2twg",
            "latitude": 33.984674,
            "demand": 19101,
            "longitude": -83.987419
          },
          {
            "locationName": "ChIJn3NwRTi-9YgRsF6u7VeyvQo",
            "latitude": 33.9859764,
            "demand": 16339,
            "longitude": -83.98695710000001
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#60b60e",
        "depotLatitude": 41.8802596,
        "demandTotal": 44827,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJ3_oVohIQqYkRXFn9hyOSKF0",
            "latitude": 34.7558406,
            "demand": 21379,
            "longitude": -77.3905706
          },
          {
            "locationName": "ChIJ8bJtPRPjrIkR_c6x1wEiyGU",
            "latitude": 36.0270195,
            "demand": 23448,
            "longitude": -78.86874139999999
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#d8ba00",
        "depotLatitude": 41.8802596,
        "demandTotal": 0,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [],
        "capacity": 48000
      },
      {
        "hexColor": "#2a5795",
        "depotLatitude": 41.8802596,
        "demandTotal": 42181,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJb-Bd61AuUYgRYxA-3aB6hZo",
            "latitude": 35.72707400000001,
            "demand": 8426,
            "longitude": -81.37673900000001
          },
          {
            "locationName": "ChIJ-fcdcskvUYgR6FsGeTSKOI8",
            "latitude": 35.7416032,
            "demand": 13442,
            "longitude": -81.3585663
          },
          {
            "locationName": "ChIJAa7hoC2aVogR9_ucW2iDQYM",
            "latitude": 35.1298683,
            "demand": 12000,
            "longitude": -80.945891
          },
          {
            "locationName": "ChIJ_xh6AkXjNogRfoyrgnEG1fs",
            "latitude": 40.4926074,
            "demand": 8256,
            "longitude": -81.4409175
          },
          {
            "locationName": "ChIJE6If4s_YEYgR1iQ05gzvtYA",
            "latitude": 41.663132,
            "demand": 57,
            "longitude": -87.50997799999999
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#a86b09",
        "depotLatitude": 41.8802596,
        "demandTotal": 47150,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJ34R74bZ5bIcRCtHIuy1iqjM",
            "latitude": 39.796519,
            "demand": 36900,
            "longitude": -104.976969
          },
          {
            "locationName": "ChIJ34R74bZ5bIcRCtHIuy1iqjM",
            "latitude": 39.796519,
            "demand": 10250,
            "longitude": -104.976969
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#684270",
        "depotLatitude": 41.8802596,
        "demandTotal": 47963,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJZw9135ZR4okRpxmuwsdENgU",
            "latitude": 42.9462188,
            "demand": 45009,
            "longitude": -71.3503149
          },
          {
            "locationName": "ChIJg91xC9DBM4gRNg74_otfwMY",
            "latitude": 41.2222595,
            "demand": 2954,
            "longitude": -80.5077105
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#78d61d",
        "depotLatitude": 41.8802596,
        "demandTotal": 0,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [],
        "capacity": 48000
      },
      {
        "hexColor": "#f0d913",
        "depotLatitude": 41.8802596,
        "demandTotal": 40599,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJX05vPsfXmoARiyYCBrjIVVM",
            "latitude": 38.648449,
            "demand": 40599,
            "longitude": -121.4760769
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#4373ae",
        "depotLatitude": 41.8802596,
        "demandTotal": 45656,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJy2omfecb44kRpYr6UIJdF1E",
            "latitude": 42.6879474,
            "demand": 45656,
            "longitude": -70.9157259
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#cb8c28",
        "depotLatitude": 41.8802596,
        "demandTotal": 0,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [],
        "capacity": 48000
      },
      {
        "hexColor": "#835b86",
        "depotLatitude": 41.8802596,
        "demandTotal": 47903,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJZw9135ZR4okRpxmuwsdENgU",
            "latitude": 42.9462188,
            "demand": 39527,
            "longitude": -71.3503149
          },
          {
            "locationName": "ChIJ240daDA9yUwRk-8hEALpCtA",
            "latitude": 45.5109024,
            "demand": 7184,
            "longitude": -73.7380361
          },
          {
            "locationName": "ChIJ240daDA9yUwRk-8hEALpCtA",
            "latitude": 45.5109024,
            "demand": 1192,
            "longitude": -73.7380361
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#57a80a",
        "depotLatitude": 41.8802596,
        "demandTotal": 0,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [],
        "capacity": 48000
      },
      {
        "hexColor": "#cead00",
        "depotLatitude": 41.8802596,
        "demandTotal": 43757,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJqz4LoAqa7ocR7AM3Hl0cNRg",
            "latitude": 41.6441096,
            "demand": 43757,
            "longitude": -93.58128289999999
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#25508e",
        "depotLatitude": 41.8802596,
        "demandTotal": 42899,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJOTnc9Hr2BFMR0cqvTyQgREU",
            "latitude": 52.1752473,
            "demand": 42899,
            "longitude": -106.6452097
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#9b6205",
        "depotLatitude": 41.8802596,
        "demandTotal": 36848,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJ2fUZyWtNw4ARmFuEI5muvDM",
            "latitude": 34.09744209999999,
            "demand": 36848,
            "longitude": -117.3804902
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#623b6b",
        "depotLatitude": 41.8802596,
        "demandTotal": 39306,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJuZJEWAXU3ocRhws7eKjAxHc",
            "latitude": 38.7245186,
            "demand": 39306,
            "longitude": -90.6684064
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#84de2c",
        "depotLatitude": 41.8802596,
        "demandTotal": 47583,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJQ3lsEeH79IgRtK_7-6cicco",
            "latitude": 33.5601607,
            "demand": 7993,
            "longitude": -84.3577159
          },
          {
            "locationName": "ChIJrW9RwLy82YgRTyNAyTf1W2U",
            "latitude": 25.890844,
            "demand": 39590,
            "longitude": -80.378247
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#f8e33b",
        "depotLatitude": 41.8802596,
        "demandTotal": 0,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [],
        "capacity": 48000
      },
      {
        "hexColor": "#6290c4",
        "depotLatitude": 41.8802596,
        "demandTotal": 45583,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJV7Oei26-t4kR4pE7kHrcneU",
            "latitude": 38.837335,
            "demand": 45583,
            "longitude": -76.856038
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#dfaa56",
        "depotLatitude": 41.8802596,
        "demandTotal": 0,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [],
        "capacity": 48000
      },
      {
        "hexColor": "#9f739c",
        "depotLatitude": 41.8802596,
        "demandTotal": 34487,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJ33sKFDqjOIgRS0isrxSpZAA",
            "latitude": 39.94117800000001,
            "demand": 9127,
            "longitude": -83.30838
          },
          {
            "locationName": "ChIJ33sKFDqjOIgRS0isrxSpZAA",
            "latitude": 39.94117800000001,
            "demand": 10617,
            "longitude": -83.30838
          },
          {
            "locationName": "ChIJ33sKFDqjOIgRS0isrxSpZAA",
            "latitude": 39.94117800000001,
            "demand": 14743,
            "longitude": -83.30838
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#69c412",
        "depotLatitude": 41.8802596,
        "demandTotal": 0,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [],
        "capacity": 48000
      },
      {
        "hexColor": "#e2c700",
        "depotLatitude": 41.8802596,
        "demandTotal": 44277,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJPd_dOqTAt4kRjT3Vqli6Agw",
            "latitude": 38.9185136,
            "demand": 28398,
            "longitude": -76.90234079999999
          },
          {
            "locationName": "ChIJPd_dOqTAt4kRjT3Vqli6Agw",
            "latitude": 38.9185136,
            "demand": 15879,
            "longitude": -76.90234079999999
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#2f5e9c",
        "depotLatitude": 41.8802596,
        "demandTotal": 45792,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJSVrGsnylPIgRlRjsl95aOpM",
            "latitude": 42.223449,
            "demand": 6885,
            "longitude": -83.725841
          },
          {
            "locationName": "ChIJT48XLOnPJIgRPMpdd2RMG3I",
            "latitude": 42.484204,
            "demand": 5292,
            "longitude": -83.09298299999999
          },
          {
            "locationName": "ChIJT48XLOnPJIgRPMpdd2RMG3I",
            "latitude": 42.484204,
            "demand": 33615,
            "longitude": -83.09298299999999
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#b4740d",
        "depotLatitude": 41.8802596,
        "demandTotal": 41653,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJeQwQ12JKDogRRGXgfh5y2JU",
            "latitude": 41.6949504,
            "demand": 41653,
            "longitude": -88.0067377
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#6e4975",
        "depotLatitude": 41.8802596,
        "demandTotal": 47604,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJva0L25YEWYgR98yoNZDJ0do",
            "latitude": 34.2087578,
            "demand": 47604,
            "longitude": -82.14636329999999
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#75d419",
        "depotLatitude": 41.8802596,
        "demandTotal": 41306,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJq3mifRa6CIgRnp9tp9LCci8",
            "latitude": 42.327667,
            "demand": 16235,
            "longitude": -88.95858899999999
          },
          {
            "locationName": "ChIJLY4X3My7CIgRhnjOvHVoNJU",
            "latitude": 42.323282,
            "demand": 10117,
            "longitude": -88.98079899999999
          },
          {
            "locationName": "ChIJ3Wos0Q6xD4gRn8xDhzzSCoI",
            "latitude": 42.00817500000001,
            "demand": 6606,
            "longitude": -87.96807
          },
          {
            "locationName": "ChIJ3Wos0Q6xD4gRn8xDhzzSCoI",
            "latitude": 42.00817500000001,
            "demand": 8348,
            "longitude": -87.96807
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#eed609",
        "depotLatitude": 41.8802596,
        "demandTotal": 43139,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJUcJwif25QIYRqFkY949vSJ8",
            "latitude": 29.8680541,
            "demand": 43139,
            "longitude": -95.31892169999999
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#3b6ca9",
        "depotLatitude": 41.8802596,
        "demandTotal": 44692,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJi0rWeFLORIYROtYH0hMaA2c",
            "latitude": 30.4526916,
            "demand": 41731,
            "longitude": -97.6576364
          },
          {
            "locationName": "ChIJ1yZ_xO6JDogR-27_BGsrAR0",
            "latitude": 41.4917833,
            "demand": 658,
            "longitude": -88.181119
          },
          {
            "locationName": "ChIJNeDiAWJhDogR97kHdi8glDo",
            "latitude": 41.5058132,
            "demand": 2303,
            "longitude": -88.1253059
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#c6841c",
        "depotLatitude": 41.8802596,
        "demandTotal": 45767,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJR8Ke1YorU4gRIagUvSDrvII",
            "latitude": 36.0619759,
            "demand": 45767,
            "longitude": -79.4476071
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#7c5580",
        "depotLatitude": 41.8802596,
        "demandTotal": 42744,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJLUyxJy5CsYkRdpiaYrW2Q6M",
            "latitude": 37.7021935,
            "demand": 1092,
            "longitude": -77.6647236
          },
          {
            "locationName": "ChIJLUyxJy5CsYkRdpiaYrW2Q6M",
            "latitude": 37.7021935,
            "demand": 41652,
            "longitude": -77.6647236
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#52a108",
        "depotLatitude": 41.8802596,
        "demandTotal": 0,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [],
        "capacity": 48000
      },
      {
        "hexColor": "#c9a600",
        "depotLatitude": 41.8802596,
        "demandTotal": 42801,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJtamOPbwh7ogRqiHAGzMN2IA",
            "latitude": 31.382938,
            "demand": 42801,
            "longitude": -83.21519599999999
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#224d8a",
        "depotLatitude": 41.8802596,
        "demandTotal": 0,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [],
        "capacity": 48000
      },
      {
        "hexColor": "#955d03",
        "depotLatitude": 41.8802596,
        "demandTotal": 42014,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJ9WMSIyQf9YgRNuYdkITzKS8",
            "latitude": 33.7517935,
            "demand": 42014,
            "longitude": -84.571084
          }
        ],
        "capacity": 48000
      },
      {
        "hexColor": "#5f3868",
        "depotLatitude": 41.8802596,
        "demandTotal": 43547,
        "depotLongitude": -87.6346818,
        "depotLocationName": "ChIJ8S1syr4sDogRJew3ip-A69w",
        "customerList": [
          {
            "locationName": "ChIJ2fUZyWtNw4ARmFuEI5muvDM",
            "latitude": 34.09744209999999,
            "demand": 43547,
            "longitude": -117.3804902
          }
        ],
        "capacity": 48000
      }
    ],
    "distance": "72878km 356m",
    "name": "problems_usa_zekleer1527861637145",
    "customerList": [
      {
        "locationName": "ChIJR8Ke1YorU4gRIagUvSDrvII",
        "latitude": 36.0619759,
        "demand": 45767,
        "longitude": -79.4476071
      },
      {
        "locationName": "ChIJy2omfecb44kRpYr6UIJdF1E",
        "latitude": 42.6879474,
        "demand": 45656,
        "longitude": -70.9157259
      },
      {
        "locationName": "ChIJa5P1XyO7-IgRn3gRAMcLkK8",
        "latitude": 33.987826,
        "demand": 20655,
        "longitude": -81.041049
      },
      {
        "locationName": "ChIJl3qLJ7lu_ogRVHN8XEImtRc",
        "latitude": 32.9188957,
        "demand": 21222,
        "longitude": -79.8492618
      },
      {
        "locationName": "ChIJ2fUZyWtNw4ARmFuEI5muvDM",
        "latitude": 34.09744209999999,
        "demand": 43547,
        "longitude": -117.3804902
      },
      {
        "locationName": "ChIJ-WRTX2ufMIgRa4-woVKSLJU",
        "latitude": 41.3531501,
        "demand": 15157,
        "longitude": -82.1555612
      },
      {
        "locationName": "ChIJP4SmpHDlMIgR0pcHU9T2Fh0",
        "latitude": 41.425745,
        "demand": 203,
        "longitude": -81.679576
      },
      {
        "locationName": "ChIJP4SmpHDlMIgR0pcHU9T2Fh0",
        "latitude": 41.425745,
        "demand": 19582,
        "longitude": -81.679576
      },
      {
        "locationName": "ChIJ_xh6AkXjNogRfoyrgnEG1fs",
        "latitude": 40.4926074,
        "demand": 8256,
        "longitude": -81.4409175
      },
      {
        "locationName": "ChIJn3NwRTi-9YgRsF6u7VeyvQo",
        "latitude": 33.9859764,
        "demand": 16339,
        "longitude": -83.98695710000001
      },
      {
        "locationName": "ChIJFbkjfDi-9YgRtm7n0vd2twg",
        "latitude": 33.984674,
        "demand": 19101,
        "longitude": -83.987419
      },
      {
        "locationName": "ChIJQ3lsEeH79IgRtK_7-6cicco",
        "latitude": 33.5601607,
        "demand": 7993,
        "longitude": -84.3577159
      },
      {
        "locationName": "ChIJi0rWeFLORIYROtYH0hMaA2c",
        "latitude": 30.4526916,
        "demand": 41731,
        "longitude": -97.6576364
      },
      {
        "locationName": "ChIJqz4LoAqa7ocR7AM3Hl0cNRg",
        "latitude": 41.6441096,
        "demand": 43757,
        "longitude": -93.58128289999999
      },
      {
        "locationName": "ChIJZw9135ZR4okRpxmuwsdENgU",
        "latitude": 42.9462188,
        "demand": 45009,
        "longitude": -71.3503149
      },
      {
        "locationName": "ChIJg91xC9DBM4gRNg74_otfwMY",
        "latitude": 41.2222595,
        "demand": 9275,
        "longitude": -80.5077105
      },
      {
        "locationName": "ChIJg91xC9DBM4gRNg74_otfwMY",
        "latitude": 41.2222595,
        "demand": 2954,
        "longitude": -80.5077105
      },
      {
        "locationName": "ChIJ8bJtPRPjrIkR_c6x1wEiyGU",
        "latitude": 36.0270195,
        "demand": 23448,
        "longitude": -78.86874139999999
      },
      {
        "locationName": "ChIJ3_oVohIQqYkRXFn9hyOSKF0",
        "latitude": 34.7558406,
        "demand": 21379,
        "longitude": -77.3905706
      },
      {
        "locationName": "ChIJgRKhQe_IwogRYntuf1HPvsk",
        "latitude": 27.9059438,
        "demand": 40692,
        "longitude": -82.3830942
      },
      {
        "locationName": "ChIJrW9RwLy82YgRTyNAyTf1W2U",
        "latitude": 25.890844,
        "demand": 39590,
        "longitude": -80.378247
      },
      {
        "locationName": "ChIJlUxipN3OwogR4-OP66ki3Zw",
        "latitude": 27.9705094,
        "demand": 5637,
        "longitude": -82.3379827
      },
      {
        "locationName": "ChIJeQwQ12JKDogRRGXgfh5y2JU",
        "latitude": 41.6949504,
        "demand": 41653,
        "longitude": -88.0067377
      },
      {
        "locationName": "ChIJE6If4s_YEYgR1iQ05gzvtYA",
        "latitude": 41.663132,
        "demand": 57,
        "longitude": -87.50997799999999
      },
      {
        "locationName": "ChIJNeDiAWJhDogR97kHdi8glDo",
        "latitude": 41.5058132,
        "demand": 2303,
        "longitude": -88.1253059
      },
      {
        "locationName": "ChIJ1yZ_xO6JDogR-27_BGsrAR0",
        "latitude": 41.4917833,
        "demand": 658,
        "longitude": -88.181119
      },
      {
        "locationName": "ChIJf5LjC2VrxIkR-l2ItpNMX8M",
        "latitude": 40.678692,
        "demand": 44192,
        "longitude": -75.257705
      },
      {
        "locationName": "ChIJf5LjC2VrxIkR-l2ItpNMX8M",
        "latitude": 40.678692,
        "demand": 44675,
        "longitude": -75.257705
      },
      {
        "locationName": "ChIJva0L25YEWYgR98yoNZDJ0do",
        "latitude": 34.2087578,
        "demand": 47604,
        "longitude": -82.14636329999999
      },
      {
        "locationName": "ChIJwy_qZyv45IcRdnjRyKx7g08",
        "latitude": 41.945566,
        "demand": 42290,
        "longitude": -91.680138
      },
      {
        "locationName": "ChIJ3Wos0Q6xD4gRn8xDhzzSCoI",
        "latitude": 42.00817500000001,
        "demand": 6606,
        "longitude": -87.96807
      },
      {
        "locationName": "ChIJ3Wos0Q6xD4gRn8xDhzzSCoI",
        "latitude": 42.00817500000001,
        "demand": 8348,
        "longitude": -87.96807
      },
      {
        "locationName": "ChIJLY4X3My7CIgRhnjOvHVoNJU",
        "latitude": 42.323282,
        "demand": 10117,
        "longitude": -88.98079899999999
      },
      {
        "locationName": "ChIJq3mifRa6CIgRnp9tp9LCci8",
        "latitude": 42.327667,
        "demand": 16235,
        "longitude": -88.95858899999999
      },
      {
        "locationName": "ChIJuZJEWAXU3ocRhws7eKjAxHc",
        "latitude": 38.7245186,
        "demand": 39306,
        "longitude": -90.6684064
      },
      {
        "locationName": "ChIJuZJEWAXU3ocRhws7eKjAxHc",
        "latitude": 38.7245186,
        "demand": 44042,
        "longitude": -90.6684064
      },
      {
        "locationName": "ChIJo_lYaSZOwYkRonf8YvQPNxs",
        "latitude": 40.1202783,
        "demand": 3366,
        "longitude": -74.8367148
      },
      {
        "locationName": "ChIJtamOPbwh7ogRqiHAGzMN2IA",
        "latitude": 31.382938,
        "demand": 42801,
        "longitude": -83.21519599999999
      },
      {
        "locationName": "ChIJ2fUZyWtNw4ARmFuEI5muvDM",
        "latitude": 34.09744209999999,
        "demand": 36848,
        "longitude": -117.3804902
      },
      {
        "locationName": "ChIJgT-aNi-teIgR-sx-RKTMjGY",
        "latitude": 35.924117,
        "demand": 44734,
        "longitude": -89.881794
      },
      {
        "locationName": "ChIJOTnc9Hr2BFMR0cqvTyQgREU",
        "latitude": 52.1752473,
        "demand": 42899,
        "longitude": -106.6452097
      },
      {
        "locationName": "ChIJ240daDA9yUwRk-8hEALpCtA",
        "latitude": 45.5109024,
        "demand": 7184,
        "longitude": -73.7380361
      },
      {
        "locationName": "ChIJ240daDA9yUwRk-8hEALpCtA",
        "latitude": 45.5109024,
        "demand": 1192,
        "longitude": -73.7380361
      },
      {
        "locationName": "ChIJO4z4DqobU4gR6W5P5JE4-gU",
        "latitude": 36.055224,
        "demand": 9813,
        "longitude": -79.873963
      },
      {
        "locationName": "ChIJO4z4DqobU4gR6W5P5JE4-gU",
        "latitude": 36.055224,
        "demand": 8958,
        "longitude": -79.873963
      },
      {
        "locationName": "ChIJ90qmgKQbU4gRJXwRwJ1DOGo",
        "latitude": 36.0655903,
        "demand": 16167,
        "longitude": -79.8689107
      },
      {
        "locationName": "ChIJAa7hoC2aVogR9_ucW2iDQYM",
        "latitude": 35.1298683,
        "demand": 12000,
        "longitude": -80.945891
      },
      {
        "locationName": "ChIJFf3MDAiTtIkRRSTPSOjrU80",
        "latitude": 38.4193852,
        "demand": 12777,
        "longitude": -78.8968902
      },
      {
        "locationName": "ChIJHzpBj3mQUogRuYCBBn_Bkyg",
        "latitude": 36.6892878,
        "demand": 7402,
        "longitude": -79.8848244
      },
      {
        "locationName": "ChIJkw5JvEizUogREZm7ScI2vjE",
        "latitude": 36.5838888,
        "demand": 24136,
        "longitude": -79.3903783
      },
      {
        "locationName": "ChIJ33sKFDqjOIgRS0isrxSpZAA",
        "latitude": 39.94117800000001,
        "demand": 14743,
        "longitude": -83.30838
      },
      {
        "locationName": "ChIJ33sKFDqjOIgRS0isrxSpZAA",
        "latitude": 39.94117800000001,
        "demand": 9127,
        "longitude": -83.30838
      },
      {
        "locationName": "ChIJ33sKFDqjOIgRS0isrxSpZAA",
        "latitude": 39.94117800000001,
        "demand": 10617,
        "longitude": -83.30838
      },
      {
        "locationName": "ChIJT48XLOnPJIgRPMpdd2RMG3I",
        "latitude": 42.484204,
        "demand": 33615,
        "longitude": -83.09298299999999
      },
      {
        "locationName": "ChIJT48XLOnPJIgRPMpdd2RMG3I",
        "latitude": 42.484204,
        "demand": 5292,
        "longitude": -83.09298299999999
      },
      {
        "locationName": "ChIJSVrGsnylPIgRlRjsl95aOpM",
        "latitude": 42.223449,
        "demand": 6885,
        "longitude": -83.725841
      },
      {
        "locationName": "ChIJ9WMSIyQf9YgRNuYdkITzKS8",
        "latitude": 33.7517935,
        "demand": 42014,
        "longitude": -84.571084
      },
      {
        "locationName": "ChIJV7Oei26-t4kR4pE7kHrcneU",
        "latitude": 38.837335,
        "demand": 45583,
        "longitude": -76.856038
      },
      {
        "locationName": "ChIJPd_dOqTAt4kRjT3Vqli6Agw",
        "latitude": 38.9185136,
        "demand": 28398,
        "longitude": -76.90234079999999
      },
      {
        "locationName": "ChIJPd_dOqTAt4kRjT3Vqli6Agw",
        "latitude": 38.9185136,
        "demand": 15879,
        "longitude": -76.90234079999999
      },
      {
        "locationName": "ChIJ34R74bZ5bIcRCtHIuy1iqjM",
        "latitude": 39.796519,
        "demand": 10250,
        "longitude": -104.976969
      },
      {
        "locationName": "ChIJ34R74bZ5bIcRCtHIuy1iqjM",
        "latitude": 39.796519,
        "demand": 36900,
        "longitude": -104.976969
      },
      {
        "locationName": "ChIJUcJwif25QIYRqFkY949vSJ8",
        "latitude": 29.8680541,
        "demand": 38604,
        "longitude": -95.31892169999999
      },
      {
        "locationName": "ChIJUcJwif25QIYRqFkY949vSJ8",
        "latitude": 29.8680541,
        "demand": 43139,
        "longitude": -95.31892169999999
      },
      {
        "locationName": "ChIJocduCQiP5IkRLpPhCMZ73qU",
        "latitude": 42.0225283,
        "demand": 43561,
        "longitude": -71.0506868
      },
      {
        "locationName": "ChIJZw9135ZR4okRpxmuwsdENgU",
        "latitude": 42.9462188,
        "demand": 46099,
        "longitude": -71.3503149
      },
      {
        "locationName": "ChIJZw9135ZR4okRpxmuwsdENgU",
        "latitude": 42.9462188,
        "demand": 39527,
        "longitude": -71.3503149
      },
      {
        "locationName": "ChIJ82USeJxE54YR7IropSuUGwU",
        "latitude": 31.7506189,
        "demand": 43242,
        "longitude": -106.3142074
      },
      {
        "locationName": "ChIJafBHu955bIcRBYWiJRkjMC4",
        "latitude": 39.8165882,
        "demand": 42494,
        "longitude": -104.9671831
      },
      {
        "locationName": "ChIJLUyxJy5CsYkRdpiaYrW2Q6M",
        "latitude": 37.7021935,
        "demand": 1092,
        "longitude": -77.6647236
      },
      {
        "locationName": "ChIJLUyxJy5CsYkRdpiaYrW2Q6M",
        "latitude": 37.7021935,
        "demand": 41652,
        "longitude": -77.6647236
      },
      {
        "locationName": "ChIJX05vPsfXmoARiyYCBrjIVVM",
        "latitude": 38.648449,
        "demand": 40599,
        "longitude": -121.4760769
      },
      {
        "locationName": "ChIJ-fcdcskvUYgR6FsGeTSKOI8",
        "latitude": 35.7416032,
        "demand": 13442,
        "longitude": -81.3585663
      },
      {
        "locationName": "ChIJb-Bd61AuUYgRYxA-3aB6hZo",
        "latitude": 35.72707400000001,
        "demand": 8426,
        "longitude": -81.37673900000001
      }
    ],
    "feasible": true
  }`;

var opt = {};
  inp = JSON.parse(inp);
  var ShipHeaderSet = {};
  ShipHeaderSet.ShipHeader = [];
  var ShipHeader = {};
  var ShipItems = {};
  var ShipItemsSet = {};
  var sum = 0;
  

  inp.vehicleRouteList.forEach(element => {
      if(element.customerList.length > 0)
      {
        ShipHeader = {};
        ShipHeader.ShipmentNum = '1';
        ShipHeader.ShipmentType = '001';
        ShipHeader.ShippingType = '01';
        ShipHeader.TransPlanPt = 'TP03';
        ShipHeader.TarpRequest = '6LT';
        ShipHeader.TruckType = '53';
        var ShipItemsSet = {};
        ShipItemsSet.ShipItems = [];
          element.customerList.forEach(function(element,i) {
              ShipItems = {};
              ShipItems.Delivery = element.locationName;
              ShipItems.Itenerary =  i+1;
              ShipItems.latitude = element.latitude;
              ShipItems.longitude  = element.longitude;
              ShipItems.demand = element.demand;              
              ShipItemsSet.ShipItems.push(ShipItems);
          });
          //console.log(ShipItemsSet);
          ShipHeader.ShipItemsSet = ShipItemsSet;
          ShipHeaderSet.ShipHeader.push(ShipHeader);  
      }
      
  });
  opt.ShipHeaderSet =ShipHeaderSet;

    var op_deliveries = 0; 
    opt.ShipHeaderSet.ShipHeader.forEach(element => {
    op_deliveries = op_deliveries + element.ShipItemsSet.ShipItems.length;
  });
  console.log(js2xmlparser.parse('ShipHeaderSet',opt.ShipHeaderSet));
  console.log(op_deliveries);
  console.log(opt.ShipHeaderSet.ShipHeader.length);
