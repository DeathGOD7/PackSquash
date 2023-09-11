window.BENCHMARK_DATA = {
  "lastUpdate": 1694461928037,
  "repoUrl": "https://github.com/ComunidadAylas/PackSquash",
  "entries": {
    "PackSquash library quick benchmarks": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bfd3f71572c964078906a06140c91b19a2592d62",
          "message": "fix(deps): update rust crate winreg to 0.51.0",
          "timestamp": "2023-08-19T22:48:42Z",
          "tree_id": "b26305d31be785af4bd6526129582aff68c59fc5",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/bfd3f71572c964078906a06140c91b19a2592d62"
        },
        "date": 1692492406277,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 14292472,
            "range": "± 988143",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 211391342,
            "range": "± 3266031",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3346678592,
            "range": "± 93844546",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 339276847,
            "range": "± 3792528",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9122dab1d8f95d57e09ef6f322e3b2ebe5064e61",
          "message": "fix(deps): update rust crate serde to 1.0.185",
          "timestamp": "2023-08-21T06:19:16Z",
          "tree_id": "4da988a0611738811ea3e048bf8e9c462c4c4778",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/9122dab1d8f95d57e09ef6f322e3b2ebe5064e61"
        },
        "date": 1692616846017,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 7273424,
            "range": "± 9248059",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 93571872,
            "range": "± 1900092",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 1381242570,
            "range": "± 7300390",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 85589491,
            "range": "± 1112840",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "29003831b69247fab7427961c215cc2c9dab0e75",
          "message": "chore: migrate from `time` to `chrono`\n\n`chrono` is now actively maintained, and `time` has been taking some\nmandatory political decisions I, quite frankly, do not agree with, and\ncause me significant burnout to (not) deal with every few months.",
          "timestamp": "2023-08-21T15:18:31+02:00",
          "tree_id": "51f79584fc58365968beddfcf47e3b895efbf7fb",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/29003831b69247fab7427961c215cc2c9dab0e75"
        },
        "date": 1692626478329,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 14079067,
            "range": "± 680372",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 211690128,
            "range": "± 6868987",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3351766725,
            "range": "± 49170822",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 340202246,
            "range": "± 8097697",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "366936ae37971e711636a3951adf790dce0d1f3c",
          "message": "chore(deps): stop using `chrono` fork\n\nThe PR we made was merged.",
          "timestamp": "2023-08-21T20:06:51+02:00",
          "tree_id": "e51d9fbc345bdaca1c93fa9960be4e698994668f",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/366936ae37971e711636a3951adf790dce0d1f3c"
        },
        "date": 1692643384940,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 9691589,
            "range": "± 187768",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 160059429,
            "range": "± 11764789",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 2708147160,
            "range": "± 17020954",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 244133541,
            "range": "± 1323134",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3e6bfdc45a6c174aadb3eecb56328e9ffc7c0d1",
          "message": "chore(deps): update rust crate winresource to 0.1.17",
          "timestamp": "2023-08-22T14:33:27Z",
          "tree_id": "bf4789a7853c5b01ff26c09e283855a8d585e07b",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/f3e6bfdc45a6c174aadb3eecb56328e9ffc7c0d1"
        },
        "date": 1692725360784,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 9734727,
            "range": "± 636121",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 159406780,
            "range": "± 3835385",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 2736514586,
            "range": "± 24199585",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 243791427,
            "range": "± 2485925",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "b0217d18471dc53fd7d77c37a70b1470fd34c734",
          "message": "chore: remove unnecessary `unreachable_unchecked` usage\n\nIt turns out that match expressions can be used for this purpose better.",
          "timestamp": "2023-08-25T17:36:28+02:00",
          "tree_id": "80b3992f1f2eea498e483142bfc805fbddeafeb4",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/b0217d18471dc53fd7d77c37a70b1470fd34c734"
        },
        "date": 1692980269835,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 10628590,
            "range": "± 399811",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 170293457,
            "range": "± 11956966",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3187584437,
            "range": "± 33456169",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 261236715,
            "range": "± 2188638",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63a025b3222d754df23097c478ca3a7426c0752b",
          "message": "fix(deps): update rust crate serde to 1.0.187",
          "timestamp": "2023-08-25T19:01:51Z",
          "tree_id": "40d5572065b798d98d3a5f4e9a2c63815837101e",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/63a025b3222d754df23097c478ca3a7426c0752b"
        },
        "date": 1693005133819,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 12658137,
            "range": "± 1337217",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 203222604,
            "range": "± 4178432",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3488432922,
            "range": "± 113140163",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 316370050,
            "range": "± 3504569",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ce9b13373977d414e67a6750137a98706596b5e7",
          "message": "fix(deps): update rust crate serde to 1.0.188",
          "timestamp": "2023-08-26T03:06:05Z",
          "tree_id": "0d275ecceb2ec0288a16c669355bc0157700676e",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/ce9b13373977d414e67a6750137a98706596b5e7"
        },
        "date": 1693033761879,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 9632261,
            "range": "± 195022",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 159912084,
            "range": "± 9980803",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 2682572826,
            "range": "± 28939612",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 245547262,
            "range": "± 2750573",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2134dd10489e56733d60290862987fae2d7d1629",
          "message": "fix(deps): update rust crate regex to 1.9.4",
          "timestamp": "2023-08-26T14:21:48Z",
          "tree_id": "cd48fb395073401eb440b239eb55f2ff8e5af0d8",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/2134dd10489e56733d60290862987fae2d7d1629"
        },
        "date": 1693068667481,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 13399982,
            "range": "± 530646",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 203020800,
            "range": "± 3042302",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3231213034,
            "range": "± 56127039",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 327212833,
            "range": "± 5453750",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b006e5fc57bf18c8af7f2055e016c9e5c318f70",
          "message": "fix(deps): update rust crate sysinfo to 0.29.9",
          "timestamp": "2023-08-28T10:37:49Z",
          "tree_id": "9aae8277b26bfc53389687e96b69de1091ca4d79",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/9b006e5fc57bf18c8af7f2055e016c9e5c318f70"
        },
        "date": 1693227672072,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 14757494,
            "range": "± 1449848",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 220324752,
            "range": "± 3224249",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3545689799,
            "range": "± 86777335",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 377809529,
            "range": "± 7934759",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "838f9096e5c9e1b932979c2cee5b57702ff3a0bd",
          "message": "chore(deps): update dependency filelock to v3.12.3",
          "timestamp": "2023-08-28T16:32:48Z",
          "tree_id": "3012eeb48032d8db1b820a81d52950cf62767668",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/838f9096e5c9e1b932979c2cee5b57702ff3a0bd"
        },
        "date": 1693250260143,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 9607265,
            "range": "± 178805",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 157555179,
            "range": "± 9188795",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 2715254048,
            "range": "± 22030669",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 244852554,
            "range": "± 2946923",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2e67c4596f19ee72c1102ddd47bbcf55b41411e6",
          "message": "chore(deps): update rust crate chrono to 0.4.27",
          "timestamp": "2023-08-29T15:58:15Z",
          "tree_id": "6b5c36812baf8d528a02890f3da1ca0bb765cf6f",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/2e67c4596f19ee72c1102ddd47bbcf55b41411e6"
        },
        "date": 1693342110811,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 10280441,
            "range": "± 333200",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 170449906,
            "range": "± 15445272",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3172185091,
            "range": "± 39495444",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 260504609,
            "range": "± 2338547",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "692dd4cb505bdb0a0ea704a844d5d43aa91c8586",
          "message": "fix(deps): update rust crate aho-corasick to 1.0.5",
          "timestamp": "2023-08-29T20:12:47Z",
          "tree_id": "b1670d3a6897da4bada7b1d6154548b6accb2c25",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/692dd4cb505bdb0a0ea704a844d5d43aa91c8586"
        },
        "date": 1693347421465,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 8389229,
            "range": "± 67663",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 157839441,
            "range": "± 6978813",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 2706283553,
            "range": "± 34532690",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 244026505,
            "range": "± 2205146",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "09ec20ac75ccca9f8ac63820bac2b766fc98763d",
          "message": "chore(renovate): use `config:best-practices` base preset\n\nThis preset is a bit more opinionated and aggressive with dependency\npinning, as recommended by current best-practices.",
          "timestamp": "2023-08-30T12:53:07+02:00",
          "tree_id": "c59d22fe86b01e8ab4d709947840024faed54e5d",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/09ec20ac75ccca9f8ac63820bac2b766fc98763d"
        },
        "date": 1693394988866,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 9107197,
            "range": "± 157779",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 166887969,
            "range": "± 11173259",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3166755045,
            "range": "± 32694317",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 258354299,
            "range": "± 3286043",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0a74bd09a03037856c126f547920b8a00959d02",
          "message": "chore(deps): pin dependencies (#243)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2023-08-30T12:55:15+02:00",
          "tree_id": "691f50743362f8a41614181edb5aff326f2d1a9c",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/a0a74bd09a03037856c126f547920b8a00959d02"
        },
        "date": 1693395286028,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 9116618,
            "range": "± 3178407",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 169102107,
            "range": "± 8308914",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3175540125,
            "range": "± 36610407",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 257052174,
            "range": "± 2154835",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "6bc0d50da96d63e6c646b99fd81f4d516c693ff8",
          "message": "ci: add missing permission to SLSA provenance generation jobs",
          "timestamp": "2023-08-30T14:05:51+02:00",
          "tree_id": "29b408417a0a54c682ee68a6e1f4a77849bd4475",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/6bc0d50da96d63e6c646b99fd81f4d516c693ff8"
        },
        "date": 1693399163337,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 12521827,
            "range": "± 588356",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 203246250,
            "range": "± 1833729",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3308304463,
            "range": "± 84290163",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 336294893,
            "range": "± 3218502",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97ffe325c469fb9e39c9d91206ab2f60a1ef0ae6",
          "message": "chore(deps): pin dependencies (#244)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2023-08-30T14:06:25+02:00",
          "tree_id": "8effd26a5e2b957a8c7dbcc1027de9151445fd91",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/97ffe325c469fb9e39c9d91206ab2f60a1ef0ae6"
        },
        "date": 1693399379754,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 11357669,
            "range": "± 616467",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 202587816,
            "range": "± 9674002",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3798339323,
            "range": "± 49678703",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 311647915,
            "range": "± 2808737",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "a08f953c73ce065b6e4f348e2acb75f38e77f8f8",
          "message": "ci(slsa): do not use GNU-specific `base64` command flag\n\nThe POSIX standard does not define the `base64` command, and it turns\nout that its macOS flavor does not have the `-w` flag, which is\nLinux-specific. Let's use `tr` instead to delete newlines, which is\nspecified by POSIX.",
          "timestamp": "2023-08-30T14:47:36+02:00",
          "tree_id": "1edc31b41d0fa71680b119c7938c91212980099b",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/a08f953c73ce065b6e4f348e2acb75f38e77f8f8"
        },
        "date": 1693401672681,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 9338693,
            "range": "± 239599",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 166283687,
            "range": "± 6592389",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3177960269,
            "range": "± 33497023",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 259788785,
            "range": "± 2334975",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "22d48092f8530d78cda0283ed336c428524364b0",
          "message": "ci(slsa): more macOS command portability fixes",
          "timestamp": "2023-08-30T15:31:05+02:00",
          "tree_id": "6fb46102aaedeecf9663ed33d55c49ad92a43546",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/22d48092f8530d78cda0283ed336c428524364b0"
        },
        "date": 1693404276014,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 9401506,
            "range": "± 496251",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 169233615,
            "range": "± 11951801",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3137221041,
            "range": "± 53863990",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 257741409,
            "range": "± 1797717",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "818ecbe54fb016d072739048db4ca8c798a7569b",
          "message": "ci(slsa): test fix for missing subjects in attestations\n\nMatrix jobs overwritted the SLSA subjects output, meaning that not every\ndesired artifact was included.",
          "timestamp": "2023-08-30T16:07:28+02:00",
          "tree_id": "ace295af5e4a1d87ddb6d6ee4f24ceabdaaafe48",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/818ecbe54fb016d072739048db4ca8c798a7569b"
        },
        "date": 1693407081712,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 11930108,
            "range": "± 647155",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 197512429,
            "range": "± 3392692",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3283807525,
            "range": "± 92497358",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 326688445,
            "range": "± 7794279",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "50730c92fd2e7fdc23e7d2971cd853527e3f17c7",
          "message": "docs(CHANGELOG): add SLSA provenance",
          "timestamp": "2023-08-30T22:20:17+02:00",
          "tree_id": "724b8bba6dfc985976c672d0e5307cbb0e6085bd",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/50730c92fd2e7fdc23e7d2971cd853527e3f17c7"
        },
        "date": 1693428939019,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 12171130,
            "range": "± 823986",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 203360788,
            "range": "± 2790904",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3225683150,
            "range": "± 53701270",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 326274083,
            "range": "± 4823051",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "58afce3dc2fa1de800b7b8a0ad0d62143d728b4f",
          "message": "docs(CHANGELOG): reflect different SLSA attestation for containers",
          "timestamp": "2023-08-30T23:55:56+02:00",
          "tree_id": "7712a2392cb1e8679683580048cf4e7965dcdbde",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/58afce3dc2fa1de800b7b8a0ad0d62143d728b4f"
        },
        "date": 1693434422832,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 11022673,
            "range": "± 394500",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 202458944,
            "range": "± 3610163",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3782695230,
            "range": "± 58614270",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 310857785,
            "range": "± 2654571",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "018ac2a95a4626568b2aedd7932b1a72e27de608",
          "message": "chore(deps): update gcr.io/distroless/static-debian11 docker digest to e7e79fb",
          "timestamp": "2023-08-31T00:26:54Z",
          "tree_id": "2d93af45443fc648c6e31fe9e40b821b46143ade",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/018ac2a95a4626568b2aedd7932b1a72e27de608"
        },
        "date": 1693443341935,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 11319070,
            "range": "± 263239",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 204815806,
            "range": "± 2716826",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3817961745,
            "range": "± 42560011",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 311434918,
            "range": "± 1870144",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "97ddf4006ef9f0b216b8a9f6803285414a7a6684",
          "message": "chore(deps): update rust crate chrono to 0.4.28",
          "timestamp": "2023-08-31T03:36:17Z",
          "tree_id": "e80cf591554840be6c4d5126e6fbb69fab85c28e",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/97ddf4006ef9f0b216b8a9f6803285414a7a6684"
        },
        "date": 1693455063092,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 9204617,
            "range": "± 153567",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 164229765,
            "range": "± 12693384",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 2951870573,
            "range": "± 28499343",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 259446635,
            "range": "± 2858119",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eab0dc059c1db4b5db8144b464023e05933d739c",
          "message": "chore(deps): update taiki-e/install-action digest to 6801bd5",
          "timestamp": "2023-09-01T04:09:46Z",
          "tree_id": "98e93160c0544bd16ef0e3f6b619cddd5506e3e1",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/eab0dc059c1db4b5db8144b464023e05933d739c"
        },
        "date": 1693556845976,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 9410109,
            "range": "± 118124",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 166257663,
            "range": "± 10982443",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 2953190437,
            "range": "± 27679317",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 264223454,
            "range": "± 2286303",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a77f6ae13e65e53c52d3a1949fc05171d0c5757a",
          "message": "chore(deps): update dependency soupsieve to v2.5",
          "timestamp": "2023-09-02T13:15:43Z",
          "tree_id": "de31e8ea006eed0ecd726e487846a8924c99f290",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/a77f6ae13e65e53c52d3a1949fc05171d0c5757a"
        },
        "date": 1693676929326,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 10980425,
            "range": "± 280295",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 206195328,
            "range": "± 3261086",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3884216647,
            "range": "± 60216405",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 315763260,
            "range": "± 2885244",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "eedf2935118541a97ab0b425ad0ad158c910787d",
          "message": "perf: use latest OptiVorbis perf. improvements, reduce build time\n\nBuild time and transitive dependency tree size was greatly reduced by\nnot using `git2` on build-time to gather version metadata, instead\nrelying on CI scripts for that.",
          "timestamp": "2023-09-02T20:30:43+02:00",
          "tree_id": "c13dc9617f4d731ec1759e8fc775325fab23bda6",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/eedf2935118541a97ab0b425ad0ad158c910787d"
        },
        "date": 1693681132008,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 9449039,
            "range": "± 160643",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 174821414,
            "range": "± 11298612",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3314975683,
            "range": "± 47016554",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 268735334,
            "range": "± 1900809",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "450d8553a09904498bf7e0be24a29e09cb045d75",
          "message": "ci: test fix for dubious ownership on `git describe` invocation",
          "timestamp": "2023-09-02T21:27:59+02:00",
          "tree_id": "143a2022431c24bfdcf36925d854ffcfa4d81b1d",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/450d8553a09904498bf7e0be24a29e09cb045d75"
        },
        "date": 1693684359336,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 8541888,
            "range": "± 61939",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 158211553,
            "range": "± 19237615",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 2730133894,
            "range": "± 18063743",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 246843332,
            "range": "± 3072907",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3052d1042c22e5e9b8a041d47942c57ba7f47eb9",
          "message": "fix(deps): update rust crate thiserror to 1.0.48",
          "timestamp": "2023-09-02T22:49:30Z",
          "tree_id": "1d1225a2e1403afb5099d929981a053c169e1217",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/3052d1042c22e5e9b8a041d47942c57ba7f47eb9"
        },
        "date": 1693708195317,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 9449534,
            "range": "± 114478",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 173200564,
            "range": "± 7011407",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3302167985,
            "range": "± 46922427",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 267474790,
            "range": "± 2518940",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8f49a23590a5c6c3cbf8a5408e612c108412617",
          "message": "chore(deps): update actions/checkout action to v4 (#247)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2023-09-04T18:08:29+02:00",
          "tree_id": "de00f8fa92383133da920bb4ef3ae1f8e2fd3cb9",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/c8f49a23590a5c6c3cbf8a5408e612c108412617"
        },
        "date": 1693845617053,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 10984583,
            "range": "± 496328",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 201832779,
            "range": "± 3760490",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3654165340,
            "range": "± 77877914",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 317660669,
            "range": "± 5721936",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ef5d8df58f677912a08cc7c6297608cee66f5c4d",
          "message": "chore(deps): update taiki-e/install-action digest to 5692c40",
          "timestamp": "2023-09-04T16:08:45Z",
          "tree_id": "cce20300051f1be8309ca6843a97cb69250bfe31",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/ef5d8df58f677912a08cc7c6297608cee66f5c4d"
        },
        "date": 1693858674138,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 8501572,
            "range": "± 147254",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 156537862,
            "range": "± 7172194",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 2701251558,
            "range": "± 15652518",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 241525667,
            "range": "± 2533740",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "882413a6d3a3b598ece42171e9d86b82cfc4af6b",
          "message": "chore(deps): update taiki-e/install-action digest to 6cd53f7",
          "timestamp": "2023-09-05T14:31:48Z",
          "tree_id": "3215d42179413e54c234e69daa3899cb5db129f3",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/882413a6d3a3b598ece42171e9d86b82cfc4af6b"
        },
        "date": 1693928703826,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 12812976,
            "range": "± 878073",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 209489353,
            "range": "± 15557457",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3348848868,
            "range": "± 43888015",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 345047854,
            "range": "± 7508886",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d42d8b5ba67ec68b8a6ac5dc6dbb1c60cb25775",
          "message": "fix(deps): update rust crate walkdir to 2.4.0",
          "timestamp": "2023-09-05T15:11:56Z",
          "tree_id": "4731a8b87541e5f7ce26ef5192f3277fbe6c3f69",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/3d42d8b5ba67ec68b8a6ac5dc6dbb1c60cb25775"
        },
        "date": 1693939480681,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 9268220,
            "range": "± 266787",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 169195855,
            "range": "± 2063116",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3243635847,
            "range": "± 55265674",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 257851199,
            "range": "± 2115952",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f7bd25cab699217036b9aa7ac069a2f4ba12fc54",
          "message": "fix(deps): update rust crate sysinfo to 0.29.10",
          "timestamp": "2023-09-06T11:43:03Z",
          "tree_id": "ce67e19292747fd6a48121a6e064c46078badd12",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/f7bd25cab699217036b9aa7ac069a2f4ba12fc54"
        },
        "date": 1694008678215,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 13290079,
            "range": "± 1283885",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 212851051,
            "range": "± 4303357",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3242299671,
            "range": "± 111995684",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 333545258,
            "range": "± 6416134",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c35eab9fb5020f291bf67269849bbd67ce4ff45a",
          "message": "chore(deps): update actions/upload-artifact digest to a8a3f3a",
          "timestamp": "2023-09-06T20:12:40Z",
          "tree_id": "832c631fa4b0d128b3bd95cab9e6991281b3ec37",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/c35eab9fb5020f291bf67269849bbd67ce4ff45a"
        },
        "date": 1694043660470,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 13466825,
            "range": "± 1544666",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 234887704,
            "range": "± 18607643",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3755372367,
            "range": "± 97568262",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 331207142,
            "range": "± 10317902",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "659337926d38a3c3dbbaa49f8ea9dfac29a37ee4",
          "message": "chore(deps): update debian:bullseye-slim docker digest to 3bc5e94",
          "timestamp": "2023-09-07T03:15:13Z",
          "tree_id": "5021db0e5c5c323bc80d9b700246c997bff6df0d",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/659337926d38a3c3dbbaa49f8ea9dfac29a37ee4"
        },
        "date": 1694070451076,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 12137238,
            "range": "± 429681",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 202263881,
            "range": "± 2293016",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3265414759,
            "range": "± 39521516",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 325012645,
            "range": "± 4777266",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "049135cdef93f99885f377d14993f44bdd2db007",
          "message": "fix(deps): update rust crate bytes to 1.5.0",
          "timestamp": "2023-09-07T10:00:23Z",
          "tree_id": "a80f9337ab2505e1fce788dc6f55ca768950bd4d",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/049135cdef93f99885f377d14993f44bdd2db007"
        },
        "date": 1694097350558,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 9333353,
            "range": "± 273587",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 173865288,
            "range": "± 7228452",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3290647457,
            "range": "± 51129476",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 266485658,
            "range": "± 1949849",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad67d963678d41eaedde4ca799eda034ba647529",
          "message": "chore(deps): update taiki-e/install-action digest to a6b28c3",
          "timestamp": "2023-09-08T04:22:52Z",
          "tree_id": "cf6e346df13099a9d7eaa5caa2ded1730f3bc0ce",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/ad67d963678d41eaedde4ca799eda034ba647529"
        },
        "date": 1694156426820,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 9792912,
            "range": "± 322127",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 170678323,
            "range": "± 7905971",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3043468007,
            "range": "± 43247941",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 266204021,
            "range": "± 1667224",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ebd8a9d84049dd0f80691304a78768680330ede8",
          "message": "fix(deps): update rust crate toml to 0.7.7",
          "timestamp": "2023-09-08T06:30:21Z",
          "tree_id": "67a993eedb439432185e6795f022be7a4d79de8b",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/ebd8a9d84049dd0f80691304a78768680330ede8"
        },
        "date": 1694167687744,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 9292859,
            "range": "± 214673",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 167398255,
            "range": "± 8383900",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3033096207,
            "range": "± 30774876",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 263875797,
            "range": "± 2628231",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63d19081a415083dbe190e2e0ad3497b939d5e8a",
          "message": "chore(deps): update docker/build-push-action digest to 0a97817",
          "timestamp": "2023-09-08T14:30:36Z",
          "tree_id": "0d00a676ba6555ca8d8a4c86312e17f23c9c695d",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/63d19081a415083dbe190e2e0ad3497b939d5e8a"
        },
        "date": 1694195152538,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 8402459,
            "range": "± 9380100",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 157081256,
            "range": "± 2572254",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 2696300758,
            "range": "± 34907571",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 244442125,
            "range": "± 3646965",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "e3a69ee7b1fee3168109a9215a266de69ce66988",
          "message": "docs(CHANGELOG): add entry for eedf2935118541a97ab0b425ad0ad158c910787d",
          "timestamp": "2023-09-08T22:00:55+02:00",
          "tree_id": "2e98c72a8e2b723848c4364438c9cb3af5e4fbe3",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/e3a69ee7b1fee3168109a9215a266de69ce66988"
        },
        "date": 1694205251796,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 8445301,
            "range": "± 114520",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 158992470,
            "range": "± 11383021",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 2698432432,
            "range": "± 27280427",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 244958938,
            "range": "± 2436858",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4527b469d8ba1f3d29e9441c68ea0cf28e4b578b",
          "message": "chore(deps): update taiki-e/install-action digest to f3f0bc9",
          "timestamp": "2023-09-08T20:26:47Z",
          "tree_id": "e3dcd4d9b757bc8b8789a35933ac495bcce74394",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/4527b469d8ba1f3d29e9441c68ea0cf28e4b578b"
        },
        "date": 1694216802326,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 9245249,
            "range": "± 63202",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 169440233,
            "range": "± 1280941",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3034440462,
            "range": "± 47271108",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 262525797,
            "range": "± 2863774",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "072fda8bb08e625d14838f8a4ed172ff0f7bd517",
          "message": "fix(deps): update rust crate toml to 0.7.8",
          "timestamp": "2023-09-09T03:08:31Z",
          "tree_id": "0bf01b18b69b40a5dfd1de03cd16a697526f5b8b",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/072fda8bb08e625d14838f8a4ed172ff0f7bd517"
        },
        "date": 1694247961316,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 9814537,
            "range": "± 2822702",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 167365920,
            "range": "± 5234602",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 2999936261,
            "range": "± 43550311",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 259283972,
            "range": "± 3055836",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ca845c42230231b6e43882612bc39142a703cf9",
          "message": "chore(deps): update taiki-e/install-action digest to c2391e8",
          "timestamp": "2023-09-09T07:58:24Z",
          "tree_id": "262f71b09bc3443cf152cd5a2d1507444255faad",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/3ca845c42230231b6e43882612bc39142a703cf9"
        },
        "date": 1694252206366,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 13576192,
            "range": "± 671861",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 213355101,
            "range": "± 3600509",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3444269575,
            "range": "± 59685301",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 339279769,
            "range": "± 4628360",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a1844c6bfc31230edbcb91ad7307d7a7344826ea",
          "message": "chore(deps): update taiki-e/install-action digest to 230cf1a",
          "timestamp": "2023-09-09T12:47:33Z",
          "tree_id": "6284368d1ce9d89b506c6a2d7b38d8c858234716",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/a1844c6bfc31230edbcb91ad7307d7a7344826ea"
        },
        "date": 1694277260826,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 8292743,
            "range": "± 271656",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 156803222,
            "range": "± 5553258",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 2658600828,
            "range": "± 27837407",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 240526156,
            "range": "± 2696874",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1512447cdd801aeb3803424b078a3787d2d905bb",
          "message": "fix(deps): update rust crate serde_json to 1.0.106",
          "timestamp": "2023-09-09T22:25:38Z",
          "tree_id": "93ecb8ab71669ec710cccd6dfecace2598256eb0",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/1512447cdd801aeb3803424b078a3787d2d905bb"
        },
        "date": 1694309479291,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 11685456,
            "range": "± 733084",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 195239463,
            "range": "± 2113954",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 2955859230,
            "range": "± 63920585",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 301031640,
            "range": "± 7912852",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7c4c2f18209de1020539746e82ca7bf74764c120",
          "message": "chore(deps): update taiki-e/install-action digest to b89cfc4",
          "timestamp": "2023-09-10T07:47:35Z",
          "tree_id": "a7e0532a4a88ea007b51c806577e070d3a689edb",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/7c4c2f18209de1020539746e82ca7bf74764c120"
        },
        "date": 1694344332155,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 11058544,
            "range": "± 201315",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 206166164,
            "range": "± 3690373",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3592272190,
            "range": "± 60609569",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 316015498,
            "range": "± 4012934",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b440820a442d3427084096033221515d962697f9",
          "message": "fix(deps): update rust crate imagequant to 4.2.1",
          "timestamp": "2023-09-11T00:42:57Z",
          "tree_id": "86611e34fe3e257d897f0dfd8e0301161fb849ff",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/b440820a442d3427084096033221515d962697f9"
        },
        "date": 1694409911841,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 8609906,
            "range": "± 172701",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 157189436,
            "range": "± 1731857",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 2715858656,
            "range": "± 25631155",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 241245505,
            "range": "± 2996702",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff0981f135bbd537f714045f047e929997da95d1",
          "message": "chore(deps): update taiki-e/install-action digest to 9afdc87",
          "timestamp": "2023-09-11T13:05:01Z",
          "tree_id": "52b9c17c97aafe5936a359d41f1cc775772895d4",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/ff0981f135bbd537f714045f047e929997da95d1"
        },
        "date": 1694446905077,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 9232306,
            "range": "± 259945",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 170619215,
            "range": "± 14641542",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3262414945,
            "range": "± 52521710",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 261622229,
            "range": "± 2457583",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "committer": {
            "email": "me@alegon.dev",
            "name": "Alejandro González",
            "username": "AlexTMjugador"
          },
          "distinct": true,
          "id": "d3c3e13f6e8e5348f5409d9fa0f2d3b04215771e",
          "message": "refactor(properties_file): simplify, standarize on Windows-1252 encoding\n\nThe Java documentation specifies that .properties files should use the\nWindows-1252 (also imprecisely known as ISO-8859-1) encoding, but there\nwas code for supporting the Unicode BOM, which should not appear on the\nfirst place and does not help with incompatible misinterpretations of\nthe source encoding as UTF-8; it'd only help if a UTF-8 with BOM file\nonly uses ASCII characters, but break in other cases.\n\nIn the future, we might study and implement ways of handling several\nencodings, depending on the encoding expected by the mod using these\nfiles.",
          "timestamp": "2023-09-11T21:22:37+02:00",
          "tree_id": "5dfb46497166e6ee7e05831468cd1360605ab029",
          "url": "https://github.com/ComunidadAylas/PackSquash/commit/d3c3e13f6e8e5348f5409d9fa0f2d3b04215771e"
        },
        "date": 1694461927209,
        "tool": "cargo",
        "benches": [
          {
            "name": "tiny_benches_wall_time/empty_pack",
            "value": 9418391,
            "range": "± 179838",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aylas_khron_micro_pack",
            "value": 172061743,
            "range": "± 1654214",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/jilchu_chronos_micro_pack",
            "value": 3045057505,
            "range": "± 54966918",
            "unit": "ns/iter"
          },
          {
            "name": "small_benches_wall_time/aiamded_breadstick_micro_pack",
            "value": 265867836,
            "range": "± 3601289",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}