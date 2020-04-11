(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=558)})({558:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(559);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},559:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Giresun.1.02-22-2017 12:07:27
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Giresun",revision:1,standaloneInit:true,baseWidth:600,baseHeight:654,baseScaleFactor:10,entities:{"TR.GI.AL":{outlines:[[M,4432,3825,Q,4398,3822,4382,3817,4353,3809,4354,3768,4361,3723,4360,3702,4359,3666,4325,3666,4297,3666,4244,3714,4190,3760,4150,3760,4107,3760,4015,3698,3922,3636,3865,3636,3819,3635,3809,3594,3807,3586,3807,3520,3807,3484,3802,3441,3797,3402,3797,3375,3797,3372,3798,3370,3779,3350,3739,3332,3691,3312,3670,3303,3660,3298,3634,3294,3613,3292,3603,3283,3589,3269,3578,3260,3559,3245,3548,3243,3546,3296,3536,3328,3532,3340,3512,3354,3495,3366,3478,3372,3442,3385,3407,3385,3362,3385,3304,3312,3247,3238,3232,3238,3217,3238,3174,3283,3130,3328,3050,3328,3034,3327,3026,3327,3012,3326,3004,3329,2993,3332,2991,3351,2990,3362,2989,3380,2972,3407,2944,3431,2931,3442,2931,3477,2931,3494,2934,3518,2937,3542,2937,3558,2937,3587,2909,3607,2899,3616,2857,3637,2779,3675,2751,3682,2777,3713,2794,3714,2810,3715,2850,3711,2886,3712,2952,3725,2988,3728,3070,3728,3106,3728,3135,3746,3144,3752,3176,3778,L,3178,3780,Q,3193,3797,3217,3820,3236,3841,3244,3868,3249,3883,3269,3917,3289,3950,3293,3955,3296,3959,3312,4016,3327,4073,3326,4100,3324,4127,3328,4158,3331,4188,3331,4207,3331,4221,3324,4272,3315,4323,3315,4334,3315,4406,3320,4415,3332,4435,3407,4456,3454,4468,3469,4495,3483,4518,3483,4575,3483,4599,3473,4630,3465,4652,3458,4662,3454,4666,3450,4669,3440,4689,3421,4725,3397,4768,3377,4787,3356,4805,3342,4823,3328,4840,3315,4860,3302,4880,3287,4892,3255,4917,3253,4919,3244,4930,3165,5012,3092,5097,3092,5142,3092,5183,3111,5205,3130,5227,3132,5249,3134,5271,3132,5314,3130,5355,3136,5361,3142,5367,3173,5410,3195,5443,3213,5455,L,3261,5455,Q,3271,5456,3285,5449,3303,5440,3309,5440,3310,5440,3359,5440,3397,5440,3413,5435,3425,5431,3459,5413,3494,5397,3516,5396,3594,5392,3616,5395,3661,5399,3725,5369,3762,5352,3827,5313,3858,5295,3923,5270,3999,5240,4025,5240,4040,5240,4051,5243,4059,5245,4084,5254,4085,5254,4126,5263,4128,5264,4131,5265,4148,5277,4171,5298,4194,5315,4219,5315,4236,5315,4286,5314,4329,5319,4329,5361,4329,5382,4311,5391,4292,5403,4290,5439,4289,5445,4287,5459,4285,5472,4279,5479,4275,5484,4262,5497,4251,5507,4251,5516,4251,5524,4276,5552,4283,5561,4287,5574,4292,5589,4295,5595,4325,5647,4362,5681,4365,5679,4376,5674,4386,5668,4392,5660,4397,5652,4403,5648,4409,5644,4395,5614,4380,5582,4380,5571,4379,5560,4398,5509,4413,5466,4421,5448,4436,5415,4461,5390,4494,5362,4512,5346,4543,5318,4561,5302,4594,5272,4619,5259,4639,5248,4663,5221,4698,5179,4708,5169,4717,5159,4726,5127,4733,5095,4755,5069,4776,5043,4803,5016,4839,4981,4850,4968,4910,4896,4954,4843,4997,4789,5024,4774,5055,4749,5076,4707,5088,4683,5110,4635,5119,4620,5152,4614,5199,4607,5202,4605,5233,4593,5238,4580,5239,4575,5239,4531,5239,4469,5159,4323,5149,4306,5060,4160,5005,4070,4919,4e3,4825,3924,4752,3924,4750,3924,4748,3925,4723,3929,4697,3937,4682,3942,4648,3942,4610,3942,4590,3934,4563,3921,4531,3909,4503,3899,4475,3864,Q,4448,3829,4432,3825,Z]],label:"Alucra",shortLabel:"AL",labelPosition:[399.5,445.9],labelAlignment:[CEN,MID]},"TR.GI.BU":{outlines:[[M,1638,878,Q,1617,871,1544,866,1536,865,1529,864,1472,865,1433,871,1389,876,1346,876,1302,878,1279,878,1239,877,1215,867,1191,857,1157,831,1121,804,1098,794,1075,785,1014,772,L,1014,872,Q,1007,918,994,934,982,950,967,976,952,1001,915,1033,877,1065,877,1086,877,1106,879,1122,881,1138,888,1166,896,1192,890,1238,884,1282,884,1299,879,1319,878,1354,877,1391,874,1408,864,1463,819,1493,800,1504,765,1509,721,1514,710,1518,692,1524,670,1564,648,1608,641,1612,631,1617,616,1617,L,591,1617,Q,578,1619,566,1625,554,1631,546,1635,544,1636,516,1643,505,1646,499,1659,496,1664,491,1693,484,1718,481,1722,462,1746,427,1744,387,1743,375,1751,375,1756,375,1761,375,1809,340,1843,314,1868,253,1896,212,1915,162,1959,103,2010,90,2023,87,2026,87,2026,76,2042,64,2070,47,2105,47,2120,48,2128,43,2167,39,2209,39,2221,39,2250,53,2278,67,2307,67,2324,67,2355,65,2415,74,2463,132,2483,171,2497,194,2543,204,2562,225,2579,234,2587,263,2607,305,2636,331,2674,362,2717,365,2759,370,2797,365,2846,364,2863,376,2887,383,2900,396,2924,437,2950,495,2984,551,3018,551,3043,551,3066,543,3098,534,3130,534,3164,534,3221,544,3252,569,3327,581,3359,592,3391,630,3428,668,3466,696,3471,724,3475,795,3476,848,3479,865,3494,891,3470,911,3435,941,3387,955,3370,1013,3292,1014,3237,1015,3211,1033,3157,1055,3095,1059,3066,1063,3039,1071,3027,1090,2997,1094,2989,1096,2984,1095,2955,1092,2929,1105,2916,1133,2887,1187,2781,1234,2685,1286,2648,1309,2634,1322,2626,1343,2611,1354,2595,1355,2593,1356,2592,L,1356,2522,Q,1356,2494,1365,2439,1374,2384,1376,2364,1379,2342,1391,2336,1403,2328,1416,2275,1429,2221,1433,2183,1436,2152,1436,2089,1443,2061,1449,2037,1455,2012,1457,1992,1458,1971,1456,1939,1453,1906,1453,1876,1453,1839,1483,1758,1513,1677,1507,1649,1501,1622,1458,1581,1414,1539,1422,1492,1429,1444,1471,1372,1491,1335,1526,1278,1529,1274,1531,1271,1533,1269,1535,1267,1566,1246,1597,1217,1627,1188,1627,1161,1628,1132,1627,1089,1624,1045,1624,1018,1624,987,1656,962,1685,937,1717,934,Q,1679,892,1638,878,Z]],label:"Bulancak",shortLabel:"BU",labelPosition:[74.6,222.1],labelAlignment:[CEN,MID]},"TR.GI.CM":{outlines:[[M,4131,5265,Q,4128,5264,4126,5263,4085,5254,4084,5254,4059,5245,4051,5243,4040,5240,4025,5240,3999,5240,3923,5270,3858,5295,3827,5313,3762,5352,3725,5369,3661,5399,3616,5395,3594,5392,3516,5396,3494,5397,3459,5413,3425,5431,3413,5435,3397,5440,3359,5440,3310,5440,3309,5440,3303,5440,3285,5449,3271,5456,3261,5455,L,3212,5455,3212,5474,Q,3216,5482,3217,5485,3218,5486,3218,5493,3218,5512,3196,5531,3175,5549,3158,5550,3144,5549,3136,5549,3124,5550,3117,5553,3076,5570,3072,5570,L,2978,5570,Q,2956,5570,2944,5589,2938,5600,2925,5626,2918,5634,2906,5634,2889,5633,2882,5637,2873,5641,2869,5652,2863,5668,2855,5677,2850,5682,2848,5700,2845,5719,2843,5722,2837,5732,2825,5742,2811,5753,2805,5764,2799,5776,2780,5792,2761,5807,2739,5804,2715,5800,2696,5805,2671,5812,2664,5829,L,2664,5846,Q,2652,5873,2650,5888,2649,5893,2649,5896,2649,5897,2649,5898,2647,5952,2686,5992,2728,6038,2783,6029,2839,6021,2903,6042,2938,6053,3016,6089,3094,6125,3149,6170,3203,6215,3235,6223,3266,6229,3296,6238,3324,6246,3351,6248,3398,6253,3422,6262,3440,6268,3466,6268,3485,6268,3549,6261,3556,6261,3564,6249,3573,6232,3576,6226,3581,6217,3592,6214,3597,6213,3612,6213,3657,6213,3725,6245,3778,6269,3810,6295,3811,6296,3812,6297,3870,6345,3966,6379,4061,6414,4158,6422,4174,6424,4252,6425,4307,6426,4338,6433,4392,6446,4438,6478,4473,6502,4508,6502,4552,6502,4587,6471,4628,6435,4678,6425,4695,6380,4726,6347,4752,6324,4752,6323,4752,6304,4721,6268,4690,6232,4690,6218,4696,6189,4697,6172,4700,6141,4682,6132,4662,6130,4647,6130,4620,6128,4610,6120,4598,6110,4590,6092,4587,6087,4579,6062,4569,6031,4543,5995,4514,5957,4503,5940,4486,5913,4456,5884,4424,5854,4410,5839,4396,5828,4387,5820,4371,5805,4372,5788,4373,5775,4373,5755,L,4375,5727,Q,4375,5725,4375,5721,4375,5714,4373,5704,4368,5688,4362,5681,4325,5647,4295,5595,4292,5589,4287,5574,4283,5561,4276,5552,4251,5524,4251,5516,4251,5507,4262,5497,4275,5484,4279,5479,4285,5472,4287,5459,4289,5445,4290,5439,4292,5403,4311,5391,4329,5382,4329,5361,4329,5319,4286,5314,4236,5315,4219,5315,4194,5315,4171,5298,Q,4148,5277,4131,5265,Z]],label:"Çamoluk",shortLabel:"CM",labelPosition:[370.1,580.5],labelAlignment:[CEN,MID]},"TR.GI.CN":{outlines:[[M,5256,1048,Q,5233,1002,5231,998,5224,987,5222,974,5220,963,5215,954,L,5193,921,Q,5192,919,5191,915,5191,906,5190,903,5186,895,5174,890,5146,872,5139,865,5133,859,5120,852,5108,846,5105,840,5098,828,5093,825,5088,823,5077,823,5057,823,5043,827,5017,837,5006,840,4995,842,4939,872,L,4922,881,Q,4917,885,4915,897,4912,909,4900,929,4898,937,4898,998,4898,999,4897,1027,4896,1059,4899,1073,4900,1084,4898,1108,4899,1128,4916,1128,4953,1128,4963,1136,4967,1139,5005,1182,5026,1205,5027,1218,5027,1219,5029,1220,5030,1221,5040,1250,5050,1278,5074,1296,5099,1315,5112,1329,5118,1336,5130,1350,5136,1356,5140,1376,5144,1397,5162,1423,5180,1450,5229,1516,5277,1582,5280,1593,5282,1604,5279,1620,5306,1629,5362,1665,5419,1702,5444,1722,5453,1730,5499,1793,5551,1852,5592,1852,5605,1852,5605,1831,5605,1814,5601,1785,5597,1757,5597,1740,5597,1699,5591,1684,5585,1669,5585,1641,5585,1625,5588,1603,5591,1580,5588,1540,L,5588,1498,Q,5573,1495,5566,1494,5552,1491,5547,1483,5529,1459,5524,1446,5517,1429,5497,1405,5470,1374,5466,1369,5443,1343,5438,1332,5433,1318,5431,1311,5426,1299,5416,1293,5393,1275,5379,1267,5350,1252,5343,1243,5330,1233,5316,1208,5311,1193,5309,1189,5307,1183,5307,1169,5306,1145,5301,1123,5293,1100,5283,1089,Q,5270,1075,5256,1048,Z]],label:"Çanakçi",shortLabel:"CN",labelPosition:[525.1,133.7],labelAlignment:[CEN,MID]},"TR.GI.DE":{outlines:[[M,2284,1775,Q,2268,1792,2264,1802,2236,1862,2189,1914,2153,1952,2133,1973,2105,2003,2094,2020,2091,2023,2091,2026,2062,2059,1943,2200,1852,2309,1781,2356,1762,2370,1729,2398,1699,2423,1672,2440,1658,2448,1614,2467,1571,2486,1558,2495,1530,2512,1446,2576,1371,2634,1368,2634,1365,2634,1364,2633,1362,2631,1361,2631,1361,2622,1356,2613,1351,2606,1354,2595,1343,2611,1322,2626,1309,2634,1286,2648,1234,2685,1187,2781,1133,2887,1105,2916,1092,2929,1095,2955,1096,2984,1094,2989,1090,2997,1071,3027,1063,3039,1059,3066,1055,3095,1033,3157,1015,3211,1014,3237,1013,3292,955,3370,941,3387,911,3435,891,3470,865,3494,868,3496,870,3500,879,3514,899,3530,910,3540,917,3549,L,935,3548,Q,961,3559,1003,3560,1026,3560,1072,3562,1119,3563,1192,3610,1264,3657,1319,3670,1373,3683,1421,3684,1477,3685,1495,3688,1506,3690,1535,3701,1564,3714,1574,3715,1603,3721,1655,3741,1687,3752,1723,3751,1731,3750,1754,3757,1781,3764,1786,3765,1796,3766,1871,3770,1927,3773,1958,3777,1976,3780,1998,3790,2027,3803,2033,3805,2050,3810,2072,3818,2094,3825,2129,3825,2163,3823,2175,3814,2188,3805,2191,3791,2196,3769,2198,3765,2207,3748,2233,3719,2257,3693,2277,3676,2333,3627,2376,3605,2433,3574,2482,3581,2483,3581,2483,3581,2504,3588,2545,3600,2554,3602,2561,3606,L,2562,3586,Q,2589,3547,2607,3490,2624,3428,2632,3402,2639,3367,2647,3346,2661,3306,2681,3308,2743,3312,2784,3288,2837,3262,2865,3244,2916,3211,2935,3168,2942,3151,2941,3122,2937,3088,2937,3072,2937,3071,2958,3027,2971,3002,2971,2987,2971,2983,2971,2978,2961,2908,2937,2821,2893,2692,2893,2660,2893,2650,2909,2614,2925,2578,2927,2577,2942,2567,2941,2534,2938,2505,2938,2487,2937,2481,2937,2476,2933,2439,2956,2395,2932,2365,2933,2333,2935,2319,2934,2296,2933,2274,2933,2271,2933,2193,2941,2159,2947,2124,2947,2075,2947,2020,2914,2005,2826,1965,2819,1960,2770,1933,2744,1916,2707,1893,2699,1871,2682,1877,2678,1878,2671,1881,2661,1881,2628,1881,2605,1833,2587,1796,2587,1768,2587,1740,2594,1728,2599,1716,2599,1698,2599,1663,2559,1657,2558,1657,2485,1657,2448,1659,2418,1657,2408,1657,2381,1672,2355,1688,2351,1690,2324,1703,2306,1744,Q,2300,1756,2284,1775,Z]],label:"Dereli",shortLabel:"DE",labelPosition:[191.8,291.7],labelAlignment:[CEN,MID]},"TR.GI.DO":{outlines:[[M,4905,1435,Q,4854,1423,4829,1414,4787,1392,4771,1391,4734,1388,4702,1379,4694,1393,4655,1405,4616,1416,4573,1446,4530,1476,4523,1500,4516,1524,4510,1534,4503,1545,4504,1567,4505,1590,4483,1612,4461,1634,4443,1654,4425,1674,4445,1689,L,4441,1846,Q,4441,1847,4445,1913,4450,1986,4460,2016,4474,2060,4518,2118,4539,2147,4558,2168,L,4552,2191,Q,4553,2191,4554,2191,4559,2188,4574,2188,4588,2187,4624,2135,4666,2072,4668,2070,4726,2010,4782,1993,4803,1988,4843,1981,4887,1974,4912,1973,4968,1973,4987,1965,5016,1952,5016,1907,5011,1866,5011,1852,5011,1819,5026,1795,5031,1787,5073,1740,5093,1718,5132,1656,5124,1640,5112,1631,5106,1626,5084,1615,5080,1612,5057,1596,5040,1583,5027,1580,4998,1572,4979,1537,4970,1521,4953,1472,Q,4945,1447,4905,1435,Z]],label:"Dogankent",shortLabel:"DO",labelPosition:[471.7,169.7],labelAlignment:[CEN,MID]},"TR.GI.ES":{outlines:[[M,3906,745,Q,3862,697,3831,673,L,3831,673,Q,3829,674,3827,675,3755,708,3725,726,3686,749,3675,753,3657,760,3632,760,3538,760,3344,702,3340,700,3337,699,3335,726,3323,775,3309,835,3309,850,3309,884,3297,917,3282,960,3278,987,3279,1011,3270,1031,L,3333,1128,Q,3338,1137,3369,1156,3396,1173,3412,1203,3429,1233,3468,1306,3507,1378,3505,1400,3504,1422,3505,1428,3503,1515,3517,1531,3525,1542,3547,1551,3573,1563,3587,1578,3601,1592,3614,1620,3633,1660,3686,1701,3723,1730,3723,1781,3723,1833,3709,1923,3712,1938,3703,1960,3697,1973,3686,1997,3686,2046,3668,2065,3658,2075,3648,2103,3643,2118,3634,2142,3629,2156,3607,2166,3580,2174,3570,2179,3535,2195,3505,2225,3492,2239,3493,2261,3494,2273,3493,2281,3493,2286,3493,2290,3492,2291,3492,2292,3485,2316,3469,2355,3454,2393,3455,2420,3453,2440,3442,2495,3434,2538,3432,2568,3434,2604,3427,2645,3419,2700,3400,2723,3400,2779,3393,2901,3393,2942,3434,2961,3495,2990,3503,2998,3532,3026,3543,3064,3551,3092,3551,3134,3551,3163,3551,3166,3551,3171,3549,3196,3548,3201,3548,3206,3548,3225,3548,3243,3559,3245,3578,3260,3589,3269,3603,3283,3613,3292,3634,3294,3660,3298,3670,3303,3691,3312,3739,3332,3779,3350,3798,3370,3799,3366,3803,3365,3807,3364,3822,3365,L,3822,3340,Q,3816,3332,3816,3319,3816,3290,3853,3261,3892,3231,3907,3203,3908,3200,3909,3197,3930,3140,3974,3096,L,3972,2902,Q,3984,2888,4004,2834,4024,2779,4044,2756,4084,2711,4096,2653,4098,2636,4099,2619,4103,2587,4128,2550,4141,2529,4169,2486,4185,2455,4195,2410,4205,2362,4211,2341,4212,2338,4213,2336,4247,2297,4247,2262,4247,2229,4240,2197,4232,2162,4230,2097,4229,2055,4195,1964,4188,1944,4125,1840,4082,1770,4083,1714,4083,1712,4083,1709,4083,1707,4083,1707,4083,1674,4082,1656,4081,1620,4083,1597,4087,1570,4067,1543,4047,1514,4049,1488,4053,1467,4053,1459,4053,1439,4044,1421,4039,1412,4020,1403,4e3,1393,3991,1384,3969,1359,3963,1334,3959,1316,3959,1260,3959,1200,3986,1151,4011,1103,4011,1090,4011,1074,3984,1066,3957,1057,3957,1002,3957,995,3948,983,3938,969,3932,952,3931,952,3931,951,3929,950,3928,949,3918,944,3908,931,3902,924,3902,909,3902,895,3932,862,3961,830,3956,811,Q,3951,792,3906,745,Z]],label:"Espiye",shortLabel:"ES",labelPosition:[375.8,237.3],labelAlignment:[CEN,MID]},"TR.GI.EY":{outlines:[[M,5886,43,Q,5837,36,5817,36,5686,36,5649,80,5586,152,5468,196,5419,215,5371,238,5355,244,5324,247,5296,249,5279,261,5267,270,5251,272,5258,296,5291,344,5316,382,5316,425,5316,475,5233,574,5184,632,5175,646,5161,672,5161,716,5161,731,5163,736,5166,744,5182,755,5190,760,5204,769,5217,777,5223,790,5244,808,5287,839,5322,868,5341,886,5359,901,5361,934,5363,937,5364,953,5366,970,5373,978,5395,1006,5402,1014,5416,1035,5422,1055,5422,1055,5428,1072,5433,1084,5433,1101,5432,1118,5441,1136,5451,1153,5475,1191,5499,1229,5520,1233,5530,1234,5556,1231,5576,1229,5588,1244,5596,1253,5615,1275,5615,1255,5620,1228,5630,1169,5630,1162,5635,1130,5649,1088,5659,1053,5659,1031,5647,866,5647,823,5647,808,5657,765,5667,721,5667,695,L,5670,560,Q,5688,397,5751,275,5827,126,5958,61,Q,5945,51,5886,43,Z]],label:"Eynesil",shortLabel:"EY",labelPosition:[544.9,65.5],labelAlignment:[CEN,MID]},"TR.GI.GI":{outlines:[[M,2292,1048,Q,2254,1048,2226,1038,2197,1028,2176,1028,L,2001,1036,Q,1898,1041,1869,1026,1862,1021,1801,998,1754,981,1743,966,1730,948,1717,934,1685,937,1656,962,1624,987,1624,1018,1624,1045,1627,1089,1628,1132,1627,1161,1627,1188,1597,1217,1566,1246,1535,1267,1533,1269,1531,1271,1529,1274,1526,1278,1491,1335,1471,1372,1429,1444,1422,1492,1414,1539,1458,1581,1501,1622,1507,1649,1513,1677,1483,1758,1453,1839,1453,1876,1453,1906,1456,1939,1458,1971,1457,1992,1455,2012,1449,2037,1443,2061,1436,2089,1436,2152,1433,2183,1429,2221,1416,2275,1403,2328,1391,2336,1379,2342,1376,2364,1374,2384,1365,2439,1356,2494,1356,2522,L,1356,2592,Q,1355,2593,1354,2595,1351,2606,1356,2613,1361,2622,1361,2631,1362,2631,1364,2633,1365,2634,1368,2634,1371,2634,1446,2576,1530,2512,1558,2495,1571,2486,1614,2467,1658,2448,1672,2440,1699,2423,1729,2398,1762,2370,1781,2356,1852,2309,1943,2200,2062,2059,2091,2026,2091,2023,2094,2020,2105,2003,2133,1973,2153,1952,2189,1914,2236,1862,2264,1802,2268,1792,2284,1775,2300,1756,2306,1744,2324,1703,2351,1690,2355,1688,2381,1672,2408,1657,2418,1657,2448,1659,2485,1657,2558,1657,2559,1657,2599,1663,2599,1698,2599,1716,2594,1728,2587,1740,2587,1768,2587,1796,2605,1833,2628,1881,2661,1881,2671,1881,2678,1878,2682,1877,2699,1871,2696,1863,2696,1857,2696,1836,2710,1799,2724,1765,2721,1746,2718,1722,2718,1691,2719,1659,2719,1640,2718,1636,2718,1632,2717,1615,2721,1593,2726,1567,2726,1560,2726,1491,2688,1408,2649,1323,2599,1290,2565,1267,2551,1230,2539,1184,2525,1156,2503,1108,2493,1089,2477,1060,2449,1037,2425,1039,2392,1042,Q,2325,1048,2292,1048,Z]],label:"Giresun",shortLabel:"GI",labelPosition:[203.9,147.6],labelAlignment:[CEN,MID]},"TR.GI.GO":{outlines:[[M,5095,295,Q,4995,284,4962,281,4908,275,4858,275,4834,275,4769,283,4742,286,4722,289,4725,296,4740,319,4753,344,4747,365,4742,386,4754,410,4762,426,4763,437,4764,444,4762,449,4762,463,4762,475,4791,574,4768,673,4768,674,4768,676,4770,701,4813,751,4856,801,4853,887,4849,973,4822,989,4794,1006,4801,1073,4808,1139,4755,1190,4702,1239,4711,1268,4721,1298,4720,1323,4719,1348,4716,1356,4712,1369,4702,1379,4734,1388,4771,1391,4787,1392,4829,1414,4854,1423,4905,1435,4945,1447,4953,1472,4970,1521,4979,1537,4998,1572,5027,1580,5040,1583,5057,1596,5080,1612,5084,1615,5106,1626,5112,1631,5124,1640,5132,1656,5135,1650,5138,1645,5141,1645,5157,1652,5164,1652,5180,1635,5195,1618,5208,1620,5227,1622,5265,1618,5271,1618,5279,1620,5282,1604,5280,1593,5277,1582,5229,1516,5180,1450,5162,1423,5144,1397,5140,1376,5136,1356,5130,1350,5118,1336,5112,1329,5099,1315,5074,1296,5050,1278,5040,1250,5030,1221,5029,1220,5027,1219,5027,1218,5026,1205,5005,1182,4967,1139,4963,1136,4953,1128,4916,1128,4899,1128,4898,1108,4900,1084,4899,1073,4896,1059,4897,1027,4898,999,4898,998,4898,937,4900,929,4912,909,4915,897,4917,885,4922,881,L,4939,872,Q,4995,842,5006,840,5017,837,5043,827,5057,823,5077,823,5088,823,5093,825,5098,828,5105,840,5108,846,5120,852,5133,859,5139,865,5146,872,5174,890,5186,895,5190,903,5191,906,5191,915,5192,919,5193,921,L,5215,954,Q,5220,963,5222,974,5224,987,5231,998,5233,1002,5256,1048,5270,1075,5283,1089,5293,1100,5301,1123,5306,1145,5307,1169,5307,1183,5309,1189,5311,1193,5316,1208,5330,1233,5343,1243,5350,1252,5379,1267,5393,1275,5416,1293,5426,1299,5431,1311,5433,1318,5438,1332,5443,1343,5466,1369,5470,1374,5497,1405,5517,1429,5524,1446,5529,1459,5547,1483,5552,1491,5566,1494,5573,1495,5588,1498,L,5588,1478,Q,5610,1461,5610,1460,5620,1446,5617,1422,5615,1396,5615,1354,5616,1309,5615,1292,5614,1284,5615,1275,5596,1253,5588,1244,5576,1229,5556,1231,5530,1234,5520,1233,5499,1229,5475,1191,5451,1153,5441,1136,5432,1118,5433,1101,5433,1084,5428,1072,5422,1055,5422,1055,5416,1035,5402,1014,5395,1006,5373,978,5366,970,5364,953,5363,937,5361,934,5359,901,5341,886,5322,868,5287,839,5244,808,5223,790,5217,777,5204,769,5190,760,5182,755,5166,744,5163,736,5161,731,5161,716,5161,672,5175,646,5184,632,5233,574,5316,475,5316,425,5316,382,5291,344,5258,296,5251,272,5243,274,5233,274,5192,275,5190,275,Q,5140,290,5095,295,Z]],label:"Görele",shortLabel:"GO",labelPosition:[498.4,52.4],labelAlignment:[CEN,MID]},"TR.GI.GU":{outlines:[[M,4117,907,Q,4107,895,4091,886,4073,877,4058,877,4042,877,4039,883,4037,889,4030,899,4024,908,4011,913,3996,919,3991,923,3972,938,3962,944,3945,954,3932,952,3938,969,3948,983,3957,995,3957,1002,3957,1057,3984,1066,4011,1074,4011,1090,4011,1103,3986,1151,3959,1200,3959,1260,3959,1316,3963,1334,3969,1359,3991,1384,4e3,1393,4020,1403,4039,1412,4044,1421,4053,1439,4053,1459,4053,1467,4049,1488,4047,1514,4067,1543,4087,1570,4083,1597,4081,1620,4082,1656,4083,1674,4083,1707,4083,1707,4083,1709,4083,1712,4083,1714,4082,1770,4125,1840,4188,1944,4195,1964,4229,2055,4230,2097,4232,2162,4240,2197,4247,2229,4247,2262,4247,2297,4213,2336,4212,2338,4211,2341,4205,2362,4195,2410,4185,2455,4169,2486,4141,2529,4128,2550,4103,2587,4099,2619,4098,2636,4096,2653,L,4183,2655,Q,4194,2655,4199,2652,4204,2650,4226,2637,4236,2631,4242,2620,4246,2613,4255,2594,4273,2563,4286,2544,4291,2537,4291,2506,4285,2458,4285,2442,4285,2417,4304,2390,4322,2364,4322,2338,4322,2319,4334,2283,4344,2256,4343,2236,L,4339,2193,Q,4339,2181,4343,2165,4345,2150,4345,2138,4310,2026,4295,1989,4268,1943,4254,1916,4231,1874,4233,1846,L,4231,1779,Q,4230,1766,4219,1752,4208,1736,4204,1723,4195,1687,4192,1650,4190,1628,4190,1578,4190,1509,4193,1479,4193,1475,4193,1472,4193,1451,4194,1438,4195,1412,4210,1405,4216,1403,4240,1399,4262,1394,4262,1376,L,4259,1356,Q,4259,1331,4284,1297,4308,1263,4308,1254,4308,1238,4301,1223,4294,1208,4294,1183,4294,1161,4307,1137,4320,1115,4317,1102,4315,1088,4306,1080,4297,1073,4283,1071,4269,1069,4262,1073,4255,1075,4249,1075,4242,1075,4240,1071,4237,1062,4234,1058,4232,1052,4229,1017,4228,998,4213,995,4190,993,4173,994,4155,994,4148,983,4140,972,4133,945,Q,4126,918,4117,907,Z]],label:"Güce",shortLabel:"GU",labelPosition:[411.6,119.4],labelAlignment:[CEN,MID]},"TR.GI.KE":{outlines:[[M,3337,699,Q,3168,643,3154,643,3140,643,3138,646,3137,649,3137,655,3137,658,3137,663,3135,705,3117,747,3114,756,3112,789,3106,818,3084,822,3076,823,3044,823,3019,824,3002,830,2990,834,2976,855,2961,877,2935,890,2873,920,2841,936,2783,964,2752,983,2729,1001,2717,1009,2698,1022,2676,1026,2635,1032,2615,1039,2604,1043,2582,1043,2517,1035,2485,1035,2473,1035,2449,1037,2477,1060,2493,1089,2503,1108,2525,1156,2539,1184,2551,1230,2565,1267,2599,1290,2649,1323,2688,1408,2726,1491,2726,1560,2726,1567,2721,1593,2717,1615,2718,1632,2718,1636,2719,1640,2719,1659,2718,1691,2718,1722,2721,1746,2724,1765,2710,1799,2696,1836,2696,1857,2696,1863,2699,1871,2707,1893,2744,1916,2770,1933,2819,1960,2826,1965,2914,2005,2947,2020,2947,2075,2947,2124,2941,2159,2933,2193,2933,2271,2933,2274,2934,2296,2935,2319,2933,2333,2932,2365,2956,2395,2968,2371,2988,2346,3055,2258,3058,2229,3057,2213,3057,2199,3057,2171,3064,2160,3081,2135,3082,2099,3092,2061,3095,1966,3097,1870,3040,1758,2982,1646,2988,1641,2993,1636,3e3,1620,3008,1602,3042,1581,3106,1533,3077,1464,3082,1382,3082,1376,L,3077,1227,Q,3077,1185,3113,1161,3135,1147,3197,1108,3244,1068,3251,1060,3263,1046,3270,1031,3279,1011,3278,987,3282,960,3297,917,3309,884,3309,850,3309,835,3323,775,Q,3335,726,3337,699,Z]],label:"Kesap",shortLabel:"KE",labelPosition:[284.9,129.9],labelAlignment:[CEN,MID]},"TR.GI.PI":{outlines:[[M,834,737,Q,742,737,686,830,653,885,586,1026,565,1060,514,1080,452,1101,419,1118,379,1138,360,1197,351,1228,343,1290,342,1294,342,1298,337,1309,328,1326,317,1349,320,1361,315,1379,309,1403,303,1429,292,1446,282,1462,273,1501,276,1536,263,1562,259,1592,259,1607,259,1640,264,1643,314,1664,323,1669,355,1689,365,1708,373,1722,375,1751,387,1743,427,1744,462,1746,481,1722,484,1718,491,1693,496,1664,499,1659,505,1646,516,1643,544,1636,546,1635,554,1631,566,1625,578,1619,591,1617,L,616,1617,Q,631,1617,641,1612,648,1608,670,1564,692,1524,710,1518,721,1514,765,1509,800,1504,819,1493,864,1463,874,1408,877,1391,878,1354,879,1319,884,1299,884,1282,890,1238,896,1192,888,1166,881,1138,879,1122,877,1106,877,1086,877,1065,915,1033,952,1001,967,976,982,950,994,934,1007,918,1014,872,L,1014,772,Q,988,765,954,759,Q,851,737,834,737,Z]],label:"Piraziz",shortLabel:"PI",labelPosition:[57,128.8],labelAlignment:[CEN,MID]},"TR.GI.SE":{outlines:[[M,2376,3605,Q,2333,3627,2277,3676,2257,3693,2233,3719,2207,3748,2198,3765,2196,3769,2191,3791,2188,3805,2175,3814,2163,3823,2129,3825,2094,3825,2072,3818,2050,3810,2033,3805,2027,3803,1998,3790,1976,3780,1958,3777,1927,3773,1871,3770,1796,3766,1786,3765,1781,3764,1754,3757,1731,3750,1723,3751,1687,3752,1655,3741,1603,3721,1574,3715,1564,3714,1535,3701,1506,3690,1495,3688,1477,3685,1421,3684,1373,3683,1319,3670,1264,3657,1192,3610,1119,3563,1072,3562,1026,3560,1003,3560,961,3559,935,3548,L,917,3549,Q,921,3554,924,3559,929,3569,940,3599,949,3621,965,3640,1043,3792,1043,3861,1043,3931,1002,4004,960,4078,937,4160,930,4189,909,4252,893,4306,895,4332,879,4418,878,4423,873,4461,873,4502,873,4527,876,4544,880,4562,892,4585,897,4596,898,4631,898,4656,908,4672,910,4675,912,4677,914,4700,922,4722,935,4754,937,4770,937,4771,940,4811,942,4835,954,4852,969,4874,1001,4951,1033,5025,1033,5037,1033,5043,1028,5097,1029,5121,1035,5131,1041,5140,1041,5162,1041,5201,979,5239,917,5277,917,5319,917,5353,980,5378,1013,5392,1071,5415,1107,5440,1139,5452,1172,5464,1216,5473,1225,5472,1267,5473,1309,5473,1335,5470,1361,5467,1382,5469,1404,5469,1456,5478,1472,5482,1501,5512,1516,5529,1540,5557,1569,5584,1599,5599,1617,5608,1656,5622,1677,5630,1706,5670,1740,5717,1759,5732,1801,5768,1862,5788,1922,5807,1979,5803,2005,5802,2081,5860,2157,5918,2206,5918,2272,5918,2272,5868,2274,5824,2273,5801,2271,5761,2259,5737,L,2259,5724,2299,5724,Q,2397,5798,2459,5806,2521,5812,2555,5806,2587,5799,2618,5810,2649,5821,2664,5826,L,2664,5829,Q,2671,5812,2696,5805,2715,5800,2739,5804,2761,5807,2780,5792,2799,5776,2805,5764,2811,5753,2825,5742,2837,5732,2843,5722,2845,5719,2848,5700,2850,5682,2855,5677,2863,5668,2869,5652,2873,5641,2882,5637,2889,5633,2906,5634,2918,5634,2925,5626,2938,5600,2944,5589,2956,5570,2978,5570,L,3072,5570,Q,3076,5570,3117,5553,3124,5550,3136,5549,3144,5549,3158,5550,3175,5549,3196,5531,3218,5512,3218,5493,3218,5486,3217,5485,3216,5482,3212,5474,L,3212,5455,3213,5455,Q,3195,5443,3173,5410,3142,5367,3136,5361,3130,5355,3132,5314,3134,5271,3132,5249,3130,5227,3111,5205,3092,5183,3092,5142,3092,5097,3165,5012,3244,4930,3253,4919,3255,4917,3287,4892,3302,4880,3315,4860,3328,4840,3342,4823,3356,4805,3377,4787,3397,4768,3421,4725,3440,4689,3450,4669,3454,4666,3458,4662,3465,4652,3473,4630,3483,4599,3483,4575,3483,4518,3469,4495,3454,4468,3407,4456,3332,4435,3320,4415,3315,4406,3315,4334,3315,4323,3324,4272,3331,4221,3331,4207,3331,4188,3328,4158,3324,4127,3326,4100,3327,4073,3312,4016,3296,3959,3293,3955,3289,3950,3269,3917,3249,3883,3244,3868,3236,3841,3217,3820,3193,3797,3178,3780,L,3176,3778,Q,3144,3752,3135,3746,3106,3728,3070,3728,2988,3728,2952,3725,2886,3712,2850,3711,2810,3715,2794,3714,2777,3713,2751,3682,2744,3684,2740,3684,2721,3684,2710,3674,2707,3670,2700,3661,2695,3653,2686,3650,2678,3647,2651,3641,2627,3636,2616,3630,2591,3616,2561,3606,2554,3602,2545,3600,2504,3588,2483,3581,2483,3581,2482,3581,Q,2433,3574,2376,3605,Z]],label:"Sebinkarahisar",shortLabel:"SE",labelPosition:[217.8,473.3],labelAlignment:[CEN,MID]},"TR.GI.TI":{outlines:[[M,4722,289,Q,4689,291,4673,292,4615,292,4573,302,4561,305,4521,326,4484,344,4476,344,4453,337,4437,337,4315,337,4215,390,4152,423,4021,528,3957,582,3926,607,3873,649,3831,673,3862,697,3906,745,3951,792,3956,811,3961,830,3932,862,3902,895,3902,909,3902,924,3908,931,3918,944,3928,949,3929,950,3931,951,3931,952,3932,952,3945,954,3962,944,3972,938,3991,923,3996,919,4011,913,4024,908,4030,899,4037,889,4039,883,4042,877,4058,877,4073,877,4091,886,4107,895,4117,907,4126,918,4133,945,4140,972,4148,983,4155,994,4173,994,4190,993,4213,995,4228,998,4229,1017,4232,1052,4234,1058,4237,1062,4240,1071,4242,1075,4249,1075,4255,1075,4262,1073,4269,1069,4283,1071,4297,1073,4306,1080,4315,1088,4317,1102,4320,1115,4307,1137,4294,1161,4294,1183,4294,1208,4301,1223,4308,1238,4308,1254,4308,1263,4284,1297,4259,1331,4259,1356,L,4262,1376,Q,4262,1394,4240,1399,4216,1403,4210,1405,4195,1412,4194,1438,4193,1451,4193,1472,4193,1475,4193,1479,4190,1509,4190,1578,4190,1628,4192,1650,4195,1687,4204,1723,4208,1736,4219,1752,4230,1766,4231,1779,L,4233,1846,Q,4231,1874,4254,1916,4268,1943,4295,1989,4310,2026,4345,2138,4345,2150,4343,2165,4339,2181,4339,2193,L,4343,2236,Q,4344,2256,4334,2283,4322,2319,4322,2338,4322,2364,4304,2390,4285,2417,4285,2442,4285,2458,4291,2506,4291,2537,4286,2544,4273,2563,4255,2594,4246,2613,4242,2620,4236,2631,4226,2637,4204,2650,4199,2652,4194,2655,4183,2655,L,4096,2653,Q,4084,2711,4044,2756,4024,2779,4004,2834,3984,2888,3972,2902,L,3974,3096,Q,3979,3092,3984,3088,4006,3067,4038,3036,L,4136,2935,Q,4138,2933,4141,2930,4184,2883,4248,2779,4323,2700,4349,2700,4373,2700,4382,2699,4391,2698,4459,2718,4527,2737,4563,2743,4564,2743,4648,2772,4731,2800,4750,2800,4764,2800,4765,2788,4765,2773,4765,2770,4760,2724,4760,2712,4760,2709,4767,2669,4774,2629,4774,2603,4774,2516,4705,2483,4700,2481,4657,2465,4635,2457,4635,2447,4635,2442,4632,2427,4629,2411,4615,2395,4602,2379,4546,2346,4489,2312,4489,2296,4489,2281,4506,2258,4515,2247,4526,2232,4545,2198,4552,2191,L,4558,2168,Q,4539,2147,4518,2118,4474,2060,4460,2016,4450,1986,4445,1913,4441,1847,4441,1846,L,4445,1689,Q,4425,1674,4443,1654,4461,1634,4483,1612,4505,1590,4504,1567,4503,1545,4510,1534,4516,1524,4523,1500,4530,1476,4573,1446,4616,1416,4655,1405,4694,1393,4702,1379,4712,1369,4716,1356,4719,1348,4720,1323,4721,1298,4711,1268,4702,1239,4755,1190,4808,1139,4801,1073,4794,1006,4822,989,4849,973,4853,887,4856,801,4813,751,4770,701,4768,676,4768,674,4768,673,4791,574,4762,475,4762,463,4762,449,4764,444,4763,437,4762,426,4754,410,4742,386,4747,365,4753,344,4740,319,Q,4725,296,4722,289,Z]],label:"Tirebolu",shortLabel:"TI",labelPosition:[434.2,68],labelAlignment:[CEN,MID]},"TR.GI.YA":{outlines:[[M,3333,1128,L,3270,1031,Q,3263,1046,3251,1060,3244,1068,3197,1108,3135,1147,3113,1161,3077,1185,3077,1227,L,3082,1376,Q,3082,1382,3077,1464,3106,1533,3042,1581,3008,1602,3e3,1620,2993,1636,2988,1641,2982,1646,3040,1758,3097,1870,3095,1966,3092,2061,3082,2099,3081,2135,3064,2160,3057,2171,3057,2199,3057,2213,3058,2229,3055,2258,2988,2346,2968,2371,2956,2395,2933,2439,2937,2476,2937,2481,2938,2487,2938,2505,2941,2534,2942,2567,2927,2577,2925,2578,2909,2614,2893,2650,2893,2660,2893,2692,2937,2821,2961,2908,2971,2978,2971,2983,2971,2987,2971,3002,2958,3027,2937,3071,2937,3072,2937,3088,2941,3122,2942,3151,2935,3168,2916,3211,2865,3244,2837,3262,2784,3288,2743,3312,2681,3308,2661,3306,2647,3346,2639,3367,2632,3402,2624,3428,2607,3490,2589,3547,2562,3586,L,2561,3606,Q,2591,3616,2616,3630,2627,3636,2651,3641,2678,3647,2686,3650,2695,3653,2700,3661,2707,3670,2710,3674,2721,3684,2740,3684,2744,3684,2751,3682,2779,3675,2857,3637,2899,3616,2909,3607,2937,3587,2937,3558,2937,3542,2934,3518,2931,3494,2931,3477,2931,3442,2944,3431,2972,3407,2989,3380,2990,3362,2991,3351,2993,3332,3004,3329,3012,3326,3026,3327,3034,3327,3050,3328,3130,3328,3174,3283,3217,3238,3232,3238,3247,3238,3304,3312,3362,3385,3407,3385,3442,3385,3478,3372,3495,3366,3512,3354,3532,3340,3536,3328,3546,3296,3548,3243,3548,3225,3548,3206,3548,3201,3549,3196,3551,3171,3551,3166,3551,3163,3551,3134,3551,3092,3543,3064,3532,3026,3503,2998,3495,2990,3434,2961,3393,2942,3393,2901,3400,2779,3400,2723,3419,2700,3427,2645,3434,2604,3432,2568,3434,2538,3442,2495,3453,2440,3455,2420,3454,2393,3469,2355,3485,2316,3492,2292,3492,2291,3493,2290,3493,2286,3493,2281,3494,2273,3493,2261,3492,2239,3505,2225,3535,2195,3570,2179,3580,2174,3607,2166,3629,2156,3634,2142,3643,2118,3648,2103,3658,2075,3668,2065,3686,2046,3686,1997,3697,1973,3703,1960,3712,1938,3709,1923,3723,1833,3723,1781,3723,1730,3686,1701,3633,1660,3614,1620,3601,1592,3587,1578,3573,1563,3547,1551,3525,1542,3517,1531,3503,1515,3505,1428,3504,1422,3505,1400,3507,1378,3468,1306,3429,1233,3412,1203,3396,1173,3369,1156,Q,3338,1137,3333,1128,Z]],label:"Yaglidere",shortLabel:"YA",labelPosition:[316.4,244.5],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"giresun",type:"maps"}}})});