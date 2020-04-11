(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=20)})({20:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(21);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},21:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Punakha.1.06-18-2019 09:36:33
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Punakha",revision:1,creditLabel:false,standaloneInit:false,baseWidth:575,baseHeight:600,baseScaleFactor:10,firstEntity:"BT.PN.BP",entities:{"BT.PN.BP":{outlines:[[M,3224,5127,Q,3191,5127,3158,5122,L,3131,5118,3027,5118,Q,3007,5100,2995,5092,2986,5086,2981,5083,2966,5075,2947,5078,2922,5082,2905,5071,2880,5054,2866,5050,L,2608,5050,2608,5071,Q,2613,5087,2620,5095,2625,5100,2635,5110,2642,5118,2651,5136,2659,5157,2666,5165,2706,5228,2728,5278,2740,5309,2775,5318,2794,5323,2826,5324,2834,5324,2846,5339,2857,5352,2871,5352,2932,5350,2932,5371,2932,5385,2914,5395,2891,5406,2884,5420,2882,5425,2879,5433,2877,5442,2863,5447,2836,5454,2824,5454,2812,5453,2803,5474,2791,5503,2786,5509,L,2721,5578,Q,2685,5614,2621,5692,2559,5762,2495,5795,2539,5813,2567,5813,2576,5813,2586,5821,2599,5832,2612,5838,2627,5846,2659,5844,L,2704,5842,Q,2712,5841,2717,5840,2727,5836,2753,5825,2786,5810,2791,5771,2796,5725,2818,5703,2861,5648,2867,5648,2879,5648,2903,5658,2925,5666,2944,5666,L,3052,5666,Q,3052,5663,3098,5664,3175,5666,3179,5666,3205,5666,3212,5647,3217,5617,3221,5598,3248,5596,3293,5593,3295,5593,3299,5593,3327,5592,3361,5583,3410,5571,3410,5551,3410,5545,3383,5471,3362,5418,3351,5390,3331,5347,3310,5260,L,3304,5228,3282,5228,3283,5210,Q,3284,5204,3284,5194,3284,5177,3278,5168,3273,5161,3261,5157,3243,5149,3239,5145,Q,3232,5127,3224,5127,Z]],label:"Barp Gewog",shortLabel:"BP",labelPosition:[313.2,539.3],labelAlignment:[CEN,MID],nextId:"BT.PN.CH"},"BT.PN.CH":{outlines:[[M,3248,2534,Q,3239,2530,3237,2522,3235,2517,3235,2505,3235,2492,3233,2487,3227,2474,3223,2468,3217,2457,3210,2453,3203,2451,3189,2449,3178,2448,3170,2439,3162,2431,3127,2430,3094,2431,3085,2431,3076,2431,3049,2427,3023,2424,3015,2424,2991,2426,2979,2427,2957,2428,2944,2421,2926,2410,2904,2405,2883,2401,2867,2390,2855,2382,2835,2374,2809,2365,2792,2357,2783,2354,2767,2354,2750,2352,2749,2347,2749,2342,2745,2325,2742,2308,2742,2272,2742,2236,2743,2214,2743,2190,2731,2164,2718,2137,2718,2132,L,2720,2042,Q,2720,2022,2711,2004,2707,1994,2688,1961,2675,1941,2657,1920,2656,1919,2656,1911,L,2588,1913,Q,2583,1913,2567,1932,2560,1940,2549,1945,2537,1951,2533,1953,2480,1988,2479,1989,2454,2008,2447,2031,L,2447,2083,Q,2448,2090,2459,2108,2472,2128,2474,2137,2476,2147,2475,2169,2473,2190,2473,2198,2473,2204,2483,2227,2481,2243,2478,2252,2474,2259,2474,2336,2474,2414,2478,2431,2481,2448,2491,2465,2500,2482,2500,2517,2500,2528,2486,2543,2472,2556,2472,2572,2472,2587,2457,2621,2457,2626,2459,2633,2459,2645,2445,2646,2438,2646,2433,2646,2425,2646,2419,2649,2403,2664,2402,2665,2373,2672,2356,2679,L,2317,2695,Q,2305,2732,2253,2745,2248,2746,2201,2745,2163,2744,2150,2754,2103,2788,2060,2791,2006,2789,1966,2794,1905,2800,1889,2842,1883,2861,1883,2936,1883,2997,1896,3024,1908,3050,1908,3079,1908,3091,1902,3100,1892,3115,1889,3121,1881,3137,1881,3164,1886,3204,1887,3220,1887,3223,1888,3227,1889,3243,1901,3271,1913,3299,1907,3331,1920,3336,1947,3340,1971,3344,1982,3360,1989,3371,2055,3423,2095,3456,2135,3470,2169,3481,2212,3481,2225,3481,2254,3493,2285,3505,2300,3505,2314,3505,2336,3522,2365,3545,2367,3546,2378,3552,2408,3563,2433,3575,2445,3590,2449,3596,2463,3621,2475,3642,2485,3650,2512,3675,2576,3665,2591,3662,2602,3664,2635,3665,2645,3686,2666,3731,2667,3766,2668,3784,2688,3796,2699,3802,2722,3812,2737,3818,2794,3863,2853,3897,2862,3918,2885,3974,2889,3998,2891,4015,2906,4021,2927,4030,2937,4035,2941,4036,2943,4037,2958,4047,2985,4065,3012,4086,3014,4111,3017,4141,3038,4167,3060,4193,3061,4215,3068,4322,3095,4353,3104,4362,3111,4383,3117,4407,3122,4413,3135,4432,3140,4463,3144,4464,3169,4469,3196,4475,3213,4474,3213,4400,3216,4382,3218,4339,3224,4312,3229,4289,3229,4257,3229,4230,3224,4211,3219,4193,3218,4149,L,3218,4049,Q,3217,4047,3217,4044,3173,3926,3173,3904,3174,3891,3175,3879,3178,3826,3178,3805,3178,3766,3176,3755,3173,3731,3167,3694,3165,3689,3168,3666,3169,3653,3159,3638,3147,3629,3144,3617,3140,3597,3140,3590,3140,3580,3146,3573,3154,3563,3158,3554,3159,3551,3159,3525,3159,3522,3162,3520,3167,3510,3184,3492,3197,3480,3200,3475,3201,3464,3206,3454,3210,3441,3232,3417,3235,3379,3233,3363,3224,3313,3266,3293,3289,3282,3337,3263,3406,3202,3509,3160,3521,3154,3552,3130,3575,3111,3591,3112,3605,3114,3609,3083,3610,3072,3610,3035,L,3609,2982,Q,3611,2949,3606,2937,3604,2929,3598,2927,3590,2927,3585,2924,L,3566,2913,Q,3539,2899,3525,2891,3525,2890,3524,2890,3505,2883,3493,2868,3481,2848,3471,2835,L,3446,2804,Q,3438,2782,3429,2771,3417,2756,3404,2729,3389,2701,3384,2692,3375,2679,3353,2651,3332,2627,3326,2611,3321,2599,3314,2591,3305,2579,3302,2572,3295,2561,3287,2556,3276,2550,3267,2544,Q,3262,2540,3248,2534,Z]],label:"Chhubu Gewog",shortLabel:"CH",labelPosition:[274.5,304.9],labelAlignment:[CEN,MID],nextId:"BT.PN.DZ"},"BT.PN.DZ":{outlines:[[M,3643,3920,Q,3589,3918,3589,3922,3555,3922,3545,3918,3534,3911,3525,3906,3510,3897,3503,3897,L,3450,3897,Q,3443,3897,3429,3886,3416,3874,3404,3874,3392,3875,3386,3874,3377,3872,3368,3863,3357,3850,3347,3849,3334,3849,3325,3849,3307,3849,3300,3860,3294,3872,3262,3875,3203,3879,3175,3879,3174,3891,3173,3904,3173,3926,3217,4044,3217,4047,3218,4049,L,3218,4149,Q,3219,4193,3224,4211,3229,4230,3229,4257,3229,4289,3224,4312,3218,4339,3216,4382,3213,4400,3213,4474,3213,4483,3213,4493,3217,4596,3229,4689,3234,4736,3235,4739,3240,4765,3255,4780,3273,4798,3282,4822,3284,4830,3288,4846,3288,4849,3295,4856,3303,4863,3303,4867,3303,4874,3299,4882,3363,4879,3520,4879,3542,4878,3606,4833,3676,4782,3676,4750,L,3670,4703,Q,3670,4699,3687,4683,3703,4667,3703,4663,3703,4647,3691,4630,3683,4620,3679,4617,3677,4615,3677,4614,3675,4602,3675,4591,L,3677,4571,Q,3680,4545,3680,4532,3680,4521,3672,4511,3660,4495,3659,4493,3641,4462,3639,4452,3628,4396,3629,4362,3631,4349,3631,4343,3631,4332,3627,4322,3605,4289,3601,4283,3574,4246,3569,4238,3563,4229,3563,4206,3563,4199,3598,4157,3622,4128,3636,4113,3637,4107,3647,4086,3656,4064,3660,4051,L,3660,3995,Q,3659,3962,3660,3947,3660,3942,3654,3933,3648,3923,3644,3918,Q,3644,3919,3643,3920,Z]],label:"Dzomo Gewog",shortLabel:"DZ",labelPosition:[340.2,436.5],labelAlignment:[CEN,MID],nextId:"BT.PN.GS"},"BT.PN.GS":{outlines:[[M,2293,1469,Q,2276,1451,2260,1446,2244,1441,2214,1445,2210,1449,2206,1453,2185,1479,2160,1496,L,2068,1554,Q,1969,1612,1968,1612,1860,1549,1816,1527,1742,1485,1732,1480,1731,1480,1666,1480,1584,1480,1569,1493,1558,1500,1489,1609,1489,1611,1457,1668,1443,1697,1418,1711,1391,1719,1366,1729,1316,1749,1316,1767,1373,1857,1373,1870,1373,1886,1274,1961,1252,1967,1218,1991,1180,2020,1163,2032,1131,2033,1117,2034,1094,2034,1080,2026,1072,2020,1053,2016,1037,2011,1032,2012,1021,2008,1012,1995,1002,1985,993,1985,991,1985,915,2038,873,2066,845,2078,845,2088,849,2102,L,849,2130,Q,851,2136,868,2153,888,2171,889,2173,889,2174,903,2194,913,2207,915,2221,915,2244,919,2250,924,2257,949,2258,L,975,2255,Q,981,2255,998,2265,1016,2275,1020,2281,1026,2296,1036,2304,1042,2311,1058,2323,1066,2329,1069,2349,1072,2360,1074,2377,1075,2388,1089,2394,1097,2398,1117,2406,L,1164,2432,Q,1171,2436,1188,2453,L,1215,2476,Q,1237,2495,1251,2518,1268,2546,1289,2554,1307,2566,1358,2570,1419,2573,1427,2576,1436,2586,1436,2621,1467,2614,1463,2663,1458,2718,1503,2722,1555,2726,1573,2742,1591,2759,1591,2809,1591,2853,1579,2868,1567,2883,1567,2926,1567,2954,1568,2959,1574,2971,1598,2972,1628,2974,1633,2993,1637,3004,1634,3023,1638,3099,1638,3187,L,1688,3191,Q,1702,3191,1708,3185,1711,3181,1726,3164,L,1881,3164,Q,1881,3137,1889,3121,1892,3115,1902,3100,1908,3091,1908,3079,1908,3050,1896,3024,1883,2997,1883,2936,1883,2861,1889,2842,1905,2800,1966,2794,2006,2789,2060,2791,2103,2788,2150,2754,2163,2744,2201,2745,2248,2746,2253,2745,2305,2732,2317,2695,L,2356,2679,Q,2373,2672,2402,2665,2403,2664,2419,2649,2425,2646,2433,2646,2438,2646,2445,2646,2459,2645,2459,2633,2457,2626,2457,2621,2472,2587,2472,2572,2472,2556,2486,2543,2500,2528,2500,2517,2500,2482,2491,2465,2481,2448,2478,2431,2474,2414,2474,2336,2474,2259,2478,2252,2481,2243,2483,2227,2473,2204,2473,2198,2473,2190,2475,2169,2476,2147,2474,2137,2472,2128,2459,2108,2448,2090,2447,2083,L,2447,2031,Q,2454,2008,2479,1989,2480,1988,2533,1953,2537,1951,2549,1945,2560,1940,2567,1932,2583,1913,2588,1913,L,2656,1911,Q,2654,1904,2654,1892,2654,1854,2683,1785,2693,1758,2715,1736,2716,1735,2734,1719,2747,1708,2747,1698,2747,1686,2733,1678,2721,1671,2720,1656,2717,1631,2695,1614,2680,1602,2677,1598,2672,1595,2653,1589,2632,1581,2624,1573,2620,1569,2607,1569,2589,1569,2582,1581,2576,1592,2571,1592,2554,1592,2551,1587,2545,1568,2540,1568,2528,1566,2501,1569,2495,1565,2480,1565,2464,1565,2459,1564,2436,1547,2427,1542,2405,1538,2398,1532,L,2362,1509,Q,2360,1507,2330,1496,Q,2313,1489,2293,1469,Z]],label:"Goenshari Gewog",shortLabel:"GS",labelPosition:[183.2,220.9],labelAlignment:[CEN,MID],nextId:"BT.PN.GU"},"BT.PN.GU":{outlines:[[M,2667,3766,Q,2666,3731,2645,3686,2635,3665,2602,3664,2604,3701,2594,3710,2578,3721,2570,3729,2556,3740,2555,3751,2550,3774,2518,3775,2485,3778,2475,3802,2467,3822,2469,3859,2472,3879,2474,3919,2474,3930,2475,3955,2475,3974,2469,3981,2454,3993,2425,3998,2421,3998,2417,3998,2375,4004,2338,4e3,2319,3998,2301,4011,2284,4025,2274,4025,2189,4017,2158,4031,2134,4051,2115,4060,2112,4062,2091,4081,2074,4096,2056,4097,2038,4098,2027,4106,2010,4118,1995,4123,1972,4122,1962,4123,1956,4123,1952,4130,1947,4141,1942,4145,1936,4149,1932,4159,1929,4167,1930,4172,L,1930,4235,Q,1931,4264,1937,4272,1939,4274,1950,4278,1961,4281,1963,4285,1968,4294,1968,4311,1978,4310,1988,4311,1999,4323,2014,4342,2025,4356,2026,4371,2026,4392,2031,4402,2034,4410,2058,4426,2070,4436,2093,4452,2113,4467,2124,4482,2163,4533,2201,4539,2211,4540,2216,4547,2220,4543,2230,4542,2236,4542,2246,4542,2252,4539,2269,4515,2308,4483,2329,4470,2336,4466,2373,4468,2409,4470,2419,4464,2424,4456,2426,4450,2431,4440,2445,4440,L,2497,4440,Q,2512,4437,2538,4425,2551,4418,2575,4405,2584,4399,2615,4392,2646,4383,2662,4375,2673,4369,2710,4366,2739,4365,2758,4366,2772,4367,2799,4356,2826,4345,2842,4345,L,2869,4348,Q,2871,4353,2879,4388,2887,4420,2887,4436,2952,4440,2946,4566,2944,4591,2959,4601,2968,4607,2988,4618,2998,4628,3015,4642,3027,4657,3027,4676,3027,4687,2997,4739,2968,4804,2968,4876,2968,4898,2977,4937,2988,4979,2988,4995,2988,5030,2995,5092,3007,5100,3027,5118,L,3131,5118,3140,5081,Q,3143,5057,3155,5038,3174,5005,3203,4997,3207,4997,3211,4996,3214,4992,3218,4986,3221,4980,3227,4968,3233,4957,3248,4926,3250,4922,3277,4904,3292,4893,3299,4882,3303,4874,3303,4867,3303,4863,3295,4856,3288,4849,3288,4846,3284,4830,3282,4822,3273,4798,3255,4780,3240,4765,3235,4739,3234,4736,3229,4689,3217,4596,3213,4493,3213,4483,3213,4474,3196,4475,3169,4469,3144,4464,3140,4463,3135,4432,3122,4413,3117,4407,3111,4383,3104,4362,3095,4353,3068,4322,3061,4215,3060,4193,3038,4167,3017,4141,3014,4111,3012,4086,2985,4065,2958,4047,2943,4037,2941,4036,2937,4035,2927,4030,2906,4021,2891,4015,2889,3998,2885,3974,2862,3918,2853,3897,2794,3863,2737,3818,2722,3812,2699,3802,2688,3796,Q,2668,3784,2667,3766,Z]],label:"Guma Gewog",shortLabel:"GU",labelPosition:[261.6,415.7],labelAlignment:[CEN,MID],nextId:"BT.PN.KA"},"BT.PN.KA":{outlines:[[M,1289,2554,Q,1268,2546,1251,2518,1237,2495,1215,2476,L,1188,2453,Q,1171,2436,1164,2432,L,1117,2406,Q,1097,2398,1089,2394,1075,2388,1074,2377,1072,2360,1069,2349,1066,2329,1058,2323,1042,2311,1036,2304,1026,2296,1020,2281,1016,2275,998,2265,981,2255,975,2255,L,949,2258,Q,924,2257,919,2250,915,2244,915,2221,913,2207,903,2194,889,2174,889,2173,888,2171,868,2153,851,2136,849,2130,L,849,2102,Q,845,2088,845,2078,820,2090,805,2090,748,2090,658,2016,L,624,1985,Q,619,1981,604,1983,589,1984,581,1978,565,1965,552,1962,541,1959,514,1958,481,1953,464,1956,423,1962,396,1981,390,1985,274,1985,216,1985,120,1978,120,2007,104,2029,80,2064,77,2071,73,2078,76,2113,77,2146,61,2160,45,2172,54,2211,60,2249,61,2261,62,2272,62,2275,61,2284,61,2296,61,2308,72,2329,84,2355,88,2368,92,2384,91,2409,L,88,2451,Q,110,2457,152,2458,193,2459,222,2455,258,2451,282,2478,297,2492,317,2521,329,2532,331,2549,334,2559,334,2575,335,2584,358,2630,373,2681,385,2702,390,2710,390,2746,390,2813,372,2855,355,2894,356,3003,356,3008,356,3014,356,3040,357,3126,357,3191,352,3234,351,3243,342,3262,335,3279,336,3287,336,3308,335,3313,332,3322,320,3341,291,3380,288,3384,264,3425,260,3435,259,3435,259,3437,253,3456,253,3484,253,3569,275,3602,282,3613,307,3661,329,3705,342,3723,420,3822,429,3833,485,3898,529,3930,534,3936,544,3947,552,3958,554,3969,556,3995,568,4021,576,4036,582,4073,588,4105,603,4125,609,4134,624,4184,626,4190,636,4241,638,4257,654,4300,657,4305,669,4327,676,4339,680,4348,680,4350,681,4353,686,4384,698,4404,718,4435,763,4441,771,4442,793,4453,815,4464,821,4466,838,4468,859,4469,874,4473,881,4491,884,4499,902,4550,917,4591,928,4615,L,960,4679,Q,971,4695,998,4733,1002,4739,1012,4765,1020,4785,1021,4800,L,1024,4835,Q,1068,4835,1118,4814,1156,4797,1181,4777,1253,4718,1310,4648,1315,4642,1327,4607,1336,4583,1352,4583,1368,4583,1396,4570,1411,4563,1427,4553,1457,4533,1514,4536,1544,4537,1558,4526,1571,4515,1591,4515,1623,4515,1649,4542,1673,4569,1677,4569,1702,4569,1714,4554,1726,4539,1731,4505,1736,4483,1756,4464,1781,4445,1794,4432,1856,4365,1883,4343,1921,4312,1968,4311,1968,4294,1963,4285,1961,4281,1950,4278,1939,4274,1937,4272,1931,4264,1930,4235,L,1930,4172,Q,1929,4167,1932,4159,1936,4149,1942,4145,1947,4141,1952,4130,1956,4123,1962,4123,1972,4122,1995,4123,2010,4118,2027,4106,2038,4098,2056,4097,2074,4096,2091,4081,2112,4062,2115,4060,2134,4051,2158,4031,2189,4017,2274,4025,2284,4025,2301,4011,2319,3998,2338,4e3,2375,4004,2417,3998,2421,3998,2425,3998,2454,3993,2469,3981,2475,3974,2475,3955,2474,3930,2474,3919,2472,3879,2469,3859,2467,3822,2475,3802,2485,3778,2518,3775,2550,3774,2555,3751,2556,3740,2570,3729,2578,3721,2594,3710,2604,3701,2602,3664,2591,3662,2576,3665,2512,3675,2485,3650,2475,3642,2463,3621,2449,3596,2445,3590,2433,3575,2408,3563,2378,3552,2367,3546,2365,3545,2336,3522,2314,3505,2300,3505,2285,3505,2254,3493,2225,3481,2212,3481,2169,3481,2135,3470,2095,3456,2055,3423,1989,3371,1982,3360,1971,3344,1947,3340,1920,3336,1907,3331,1913,3299,1901,3271,1889,3243,1888,3227,1887,3223,1887,3220,1886,3204,1881,3164,L,1726,3164,Q,1711,3181,1708,3185,1702,3191,1688,3191,L,1638,3187,Q,1638,3099,1634,3023,1637,3004,1633,2993,1628,2974,1598,2972,1574,2971,1568,2959,1567,2954,1567,2926,1567,2883,1579,2868,1591,2853,1591,2809,1591,2759,1573,2742,1555,2726,1503,2722,1458,2718,1463,2663,1467,2614,1436,2621,1436,2586,1427,2576,1419,2573,1358,2570,Q,1307,2566,1289,2554,Z]],label:"Kabjisa Gewog",shortLabel:"KA",labelPosition:[125.4,368.3],labelAlignment:[CEN,MID],nextId:"BT.PN.LI"},"BT.PN.LI":{outlines:[[M,4240,4443,Q,4169,4391,4157,4391,4151,4391,4106,4414,4058,4437,4038,4440,4014,4441,3982,4463,3941,4491,3917,4506,3879,4534,3864,4545,3838,4563,3806,4561,3765,4559,3728,4575,3717,4580,3707,4583,L,3675,4591,Q,3675,4602,3677,4614,3677,4615,3679,4617,3683,4620,3691,4630,3703,4647,3703,4663,3703,4667,3687,4683,3670,4699,3670,4703,L,3676,4750,Q,3676,4782,3606,4833,3542,4878,3520,4879,3363,4879,3299,4882,3292,4893,3277,4904,3250,4922,3248,4926,3233,4957,3227,4968,3221,4980,3218,4986,3214,4992,3211,4996,3207,4997,3203,4997,3174,5005,3155,5038,3143,5057,3140,5081,L,3131,5118,3158,5122,Q,3191,5127,3224,5127,3232,5127,3239,5145,3243,5149,3261,5157,3273,5161,3278,5168,3284,5177,3284,5194,3284,5204,3283,5210,L,3282,5228,3443,5226,Q,3453,5244,3488,5248,3542,5251,3558,5258,3595,5271,3616,5282,3631,5291,3658,5312,3671,5323,3712,5321,3755,5321,3762,5324,3776,5330,3803,5351,3831,5369,3854,5369,3869,5369,3887,5357,3906,5344,3916,5342,3929,5340,3947,5337,3962,5332,3974,5318,3987,5301,4035,5256,4046,5245,4046,5194,4046,5143,4009,5077,3971,5012,3971,4990,3971,4959,3986,4947,4005,4931,4015,4877,4027,4860,4046,4829,4064,4802,4101,4784,4126,4771,4162,4758,4189,4743,4200,4707,4209,4677,4209,4585,4210,4501,4225,4466,Q,4230,4454,4240,4443,Z]],label:"Lingmukha Gewog",shortLabel:"LI",labelPosition:[368.5,504.2],labelAlignment:[CEN,MID],nextId:"BT.PN.SH"},"BT.PN.SH":{outlines:[[M,4557,3509,Q,4549,3505,4504,3505,4468,3505,4460,3509,4445,3514,4441,3520,4431,3536,4424,3540,L,4380,3553,Q,4370,3558,4366,3570,4365,3579,4349,3579,4343,3579,4322,3559,4300,3536,4299,3536,4283,3525,4278,3514,4272,3505,4264,3503,L,4248,3499,Q,4234,3495,4216,3482,4197,3466,4186,3457,4167,3443,4101,3443,4081,3443,3993,3480,3974,3478,3966,3478,3954,3480,3951,3499,3947,3518,3946,3542,3945,3567,3927,3591,3907,3615,3907,3624,3903,3649,3895,3660,3874,3681,3874,3696,3874,3709,3880,3744,3880,3767,3865,3782,3849,3795,3847,3799,3842,3806,3841,3818,3837,3850,3774,3877,3767,3880,3751,3880,3733,3879,3726,3880,3682,3893,3677,3893,3665,3892,3659,3898,3653,3903,3644,3918,3648,3923,3654,3933,3660,3942,3660,3947,3659,3962,3660,3995,L,3660,4051,Q,3656,4064,3647,4086,3637,4107,3636,4113,3622,4128,3598,4157,3563,4199,3563,4206,3563,4229,3569,4238,3574,4246,3601,4283,3605,4289,3627,4322,3631,4332,3631,4343,3631,4349,3629,4362,3628,4396,3639,4452,3641,4462,3659,4493,3660,4495,3672,4511,3680,4521,3680,4532,3680,4545,3677,4571,L,3675,4591,3707,4583,Q,3717,4580,3728,4575,3765,4559,3806,4561,3838,4563,3864,4545,3879,4534,3917,4506,3941,4491,3982,4463,4014,4441,4038,4440,4058,4437,4106,4414,4151,4391,4157,4391,4169,4391,4240,4443,4266,4415,4326,4392,4376,4371,4442,4329,4464,4317,4466,4224,4467,4139,4515,4125,4516,4125,4517,4125,4585,4105,4684,4084,4767,4060,4845,3987,4868,3963,4888,3912,4905,3865,4909,3831,4924,3764,5015,3708,5021,3704,5053,3688,5076,3675,5083,3667,L,5083,3595,Q,5082,3570,5098,3558,L,4720,3558,4698,3552,Q,4682,3538,4672,3534,4662,3527,4647,3529,4628,3530,4611,3530,4595,3529,4579,3521,Q,4564,3513,4557,3509,Z]],label:"Shenga Bjime Gewog",shortLabel:"SH",labelPosition:[418.7,394.5],labelAlignment:[CEN,MID],nextId:"BT.PN.TA"},"BT.PN.TA":{outlines:[[M,2842,4345,Q,2826,4345,2799,4356,2772,4367,2758,4366,2739,4365,2710,4366,2673,4369,2662,4375,2646,4383,2615,4392,2584,4399,2575,4405,2551,4418,2538,4425,2512,4437,2497,4440,L,2445,4440,Q,2431,4440,2426,4450,2424,4456,2419,4464,2409,4470,2373,4468,2336,4466,2329,4470,2308,4483,2269,4515,2252,4539,2246,4542,2236,4542,2230,4542,2220,4543,2216,4547,2216,4548,2217,4550,2219,4555,2221,4570,2223,4576,2233,4586,2242,4596,2242,4602,2244,4617,2248,4644,2252,4667,2252,4688,2249,4747,2279,4773,2309,4800,2309,4823,2309,4831,2303,4854,2297,4876,2297,4890,2297,4894,2308,4916,2323,4942,2334,4947,2356,4957,2381,4969,2398,4976,2419,4976,2441,4976,2469,4971,2496,4967,2512,4967,2533,4967,2564,5001,2581,5019,2608,5054,L,2608,5050,2866,5050,Q,2880,5054,2905,5071,2922,5082,2947,5078,2966,5075,2981,5083,2986,5086,2995,5092,2988,5030,2988,4995,2988,4979,2977,4937,2968,4898,2968,4876,2968,4804,2997,4739,3027,4687,3027,4676,3027,4657,3015,4642,2998,4628,2988,4618,2968,4607,2959,4601,2944,4591,2946,4566,2952,4440,2887,4436,2887,4420,2879,4388,2871,4353,2869,4348,Z]],label:"Talo Gewog",shortLabel:"TA",labelPosition:[262.1,471.8],labelAlignment:[CEN,MID],nextId:"BT.PN.TP"},"BT.PN.TP":{outlines:[[M,1988,4311,Q,1978,4310,1968,4311,1921,4312,1883,4343,1856,4365,1794,4432,1781,4445,1756,4464,1736,4483,1731,4505,1726,4539,1714,4554,1702,4569,1677,4569,1673,4569,1649,4542,1623,4515,1591,4515,1571,4515,1558,4526,1544,4537,1514,4536,1457,4533,1427,4553,1411,4563,1396,4570,1368,4583,1352,4583,1336,4583,1327,4607,1315,4642,1310,4648,1253,4718,1181,4777,1156,4797,1118,4814,1068,4835,1024,4835,L,1024,4839,Q,1024,4841,1029,4846,1035,4851,1036,4856,L,1037,4874,Q,1037,4889,1032,4894,1025,4903,1021,4919,1016,4935,1020,4965,1020,5001,1023,5010,1026,5027,1051,5062,1057,5071,1074,5100,1094,5129,1118,5142,1139,5170,1167,5199,1209,5240,1236,5244,1241,5245,1252,5245,1263,5246,1271,5254,L,1301,5289,Q,1306,5294,1344,5299,1373,5304,1371,5324,1369,5355,1413,5399,1435,5421,1438,5441,1439,5466,1452,5480,1460,5487,1466,5502,1471,5515,1476,5518,1481,5520,1494,5520,1505,5520,1510,5526,1513,5529,1514,5546,1516,5563,1521,5571,1533,5590,1552,5594,L,1575,5594,Q,1583,5594,1587,5599,1591,5603,1596,5609,1610,5622,1648,5622,1666,5620,1666,5671,L,1666,5730,Q,1666,5749,1689,5783,1692,5787,1699,5792,1705,5795,1709,5803,1711,5809,1713,5816,1713,5821,1713,5830,1715,5849,1737,5879,1741,5891,1757,5902,1774,5914,1786,5912,L,1786,5928,1784,5929,1784,5962,1904,5962,Q,1913,5948,1941,5944,1974,5940,1982,5937,2021,5912,2022,5911,L,2037,5896,Q,2043,5890,2055,5892,2061,5894,2074,5887,2087,5883,2091,5875,2097,5864,2107,5857,2118,5849,2122,5844,2125,5841,2130,5827,2134,5816,2139,5814,2146,5803,2149,5800,2157,5790,2173,5790,2192,5790,2194,5792,2198,5794,2212,5808,2215,5810,2228,5815,2239,5820,2243,5825,2254,5840,2308,5841,2312,5841,2316,5842,2329,5841,2345,5831,2368,5815,2382,5811,2395,5808,2404,5798,2413,5789,2420,5788,L,2454,5788,Q,2454,5779,2490,5793,2492,5794,2495,5795,2559,5762,2621,5692,2685,5614,2721,5578,L,2786,5509,Q,2791,5503,2803,5474,2812,5453,2824,5454,2836,5454,2863,5447,2877,5442,2879,5433,2882,5425,2884,5420,2891,5406,2914,5395,2932,5385,2932,5371,2932,5350,2871,5352,2857,5352,2846,5339,2834,5324,2826,5324,2794,5323,2775,5318,2740,5309,2728,5278,2706,5228,2666,5165,2659,5157,2651,5136,2642,5118,2635,5110,2625,5100,2620,5095,2613,5087,2608,5071,L,2608,5054,Q,2581,5019,2564,5001,2533,4967,2512,4967,2496,4967,2469,4971,2441,4976,2419,4976,2398,4976,2381,4969,2356,4957,2334,4947,2323,4942,2308,4916,2297,4894,2297,4890,2297,4876,2303,4854,2309,4831,2309,4823,2309,4800,2279,4773,2249,4747,2252,4688,2252,4667,2248,4644,2244,4617,2242,4602,2242,4596,2233,4586,2223,4576,2221,4570,2219,4555,2217,4550,2216,4548,2216,4547,2211,4540,2201,4539,2163,4533,2124,4482,2113,4467,2093,4452,2070,4436,2058,4426,2034,4410,2031,4402,2026,4392,2026,4371,2025,4356,2014,4342,Q,1999,4323,1988,4311,Z]],label:"Toepisa Gewog",shortLabel:"TP",labelPosition:[188.5,520.8],labelAlignment:[CEN,MID],nextId:"BT.PN.TO"},"BT.PN.TO":{outlines:[[M,3858,108,Q,3843,97,3815,67,3794,44,3776,44,3771,44,3642,116,3510,190,3499,192,3449,202,3423,207,3378,214,3346,213,3320,212,3266,221,3195,233,3186,234,3135,239,3044,302,3e3,329,2977,345,2938,372,2925,396,2861,496,2833,542,2786,621,2769,685,2743,728,2720,781,2705,811,2699,838,2696,849,2694,867,2691,879,2679,884,2672,886,2656,897,2642,907,2632,907,2591,907,2581,911,2566,914,2533,930,2492,950,2492,961,L,2496,1016,Q,2497,1024,2490,1043,2483,1064,2481,1074,2479,1089,2483,1139,2479,1182,2433,1177,2400,1173,2360,1182,2301,1196,2297,1196,2278,1197,2275,1213,2273,1221,2271,1237,2270,1250,2258,1274,2253,1285,2253,1299,2253,1302,2254,1306,2255,1333,2243,1361,2228,1397,2227,1408,2231,1422,2214,1445,2244,1441,2260,1446,2276,1451,2293,1469,2313,1489,2330,1496,2360,1507,2362,1509,L,2398,1532,Q,2405,1538,2427,1542,2436,1547,2459,1564,2464,1565,2480,1565,2495,1565,2501,1569,2528,1566,2540,1568,2545,1568,2551,1587,2554,1592,2571,1592,2576,1592,2582,1581,2589,1569,2607,1569,2620,1569,2624,1573,2632,1581,2653,1589,2672,1595,2677,1598,2680,1602,2695,1614,2717,1631,2720,1656,2721,1671,2733,1678,2747,1686,2747,1698,2747,1708,2734,1719,2716,1735,2715,1736,2693,1758,2683,1785,2654,1854,2654,1892,2654,1904,2656,1911,2656,1919,2657,1920,2675,1941,2688,1961,2707,1994,2711,2004,2720,2022,2720,2042,L,2718,2132,Q,2718,2137,2731,2164,2743,2190,2743,2214,2742,2236,2742,2272,2742,2308,2745,2325,2749,2342,2749,2347,2750,2352,2767,2354,2783,2354,2792,2357,2809,2365,2835,2374,2855,2382,2867,2390,2883,2401,2904,2405,2926,2410,2944,2421,2957,2428,2979,2427,2991,2426,3015,2424,3023,2424,3049,2427,3076,2431,3085,2431,3094,2431,3127,2430,3162,2431,3170,2439,3178,2448,3189,2449,3203,2451,3210,2453,3217,2457,3223,2468,3227,2474,3233,2487,3235,2492,3235,2505,3235,2517,3237,2522,3239,2530,3248,2534,3262,2540,3267,2544,3276,2550,3287,2556,3295,2561,3302,2572,3305,2579,3314,2591,3321,2599,3326,2611,3332,2627,3353,2651,3375,2679,3384,2692,3389,2701,3404,2729,3417,2756,3429,2771,3438,2782,3446,2804,L,3471,2835,Q,3481,2848,3493,2868,3505,2883,3524,2890,3525,2890,3525,2891,3539,2899,3566,2913,L,3585,2924,Q,3590,2927,3598,2927,3604,2929,3606,2937,3611,2949,3609,2982,L,3610,3035,Q,3610,3072,3609,3083,3605,3114,3591,3112,3575,3111,3552,3130,3521,3154,3509,3160,3406,3202,3337,3263,3289,3282,3266,3293,3224,3313,3233,3363,3235,3379,3232,3417,3210,3441,3206,3454,3201,3464,3200,3475,3197,3480,3184,3492,3167,3510,3162,3520,3159,3522,3159,3525,3159,3551,3158,3554,3154,3563,3146,3573,3140,3580,3140,3590,3140,3597,3144,3617,3147,3629,3159,3638,3169,3653,3168,3666,3165,3689,3167,3694,3173,3731,3176,3755,3178,3766,3178,3805,3178,3826,3175,3879,3203,3879,3262,3875,3294,3872,3300,3860,3307,3849,3325,3849,3334,3849,3347,3849,3357,3850,3368,3863,3377,3872,3386,3874,3392,3875,3404,3874,3416,3874,3429,3886,3443,3897,3450,3897,L,3503,3897,Q,3510,3897,3525,3906,3534,3911,3545,3918,3555,3922,3589,3922,3589,3918,3643,3920,3644,3919,3644,3918,3653,3903,3659,3898,3665,3892,3677,3893,3682,3893,3726,3880,3733,3879,3751,3880,3767,3880,3774,3877,3837,3850,3841,3818,3842,3806,3847,3799,3849,3795,3865,3782,3880,3767,3880,3744,3874,3709,3874,3696,3874,3681,3895,3660,3903,3649,3907,3624,3907,3615,3927,3591,3945,3567,3946,3542,3947,3518,3951,3499,3954,3480,3966,3478,3974,3478,3993,3480,4081,3443,4101,3443,4167,3443,4186,3457,4197,3466,4216,3482,4234,3495,4248,3499,L,4264,3503,Q,4272,3505,4278,3514,4283,3525,4299,3536,4300,3536,4322,3559,4343,3579,4349,3579,4365,3579,4366,3570,4370,3558,4380,3553,L,4424,3540,Q,4431,3536,4441,3520,4445,3514,4460,3509,4468,3505,4504,3505,4549,3505,4557,3509,4564,3513,4579,3521,4595,3529,4611,3530,4628,3530,4647,3529,4662,3527,4672,3534,4682,3538,4698,3552,L,4720,3558,5098,3558,Q,5112,3548,5136,3546,5167,3543,5215,3550,5232,3550,5292,3542,5342,3535,5368,3537,5420,3541,5448,3507,5464,3487,5495,3439,5502,3411,5536,3373,5555,3351,5582,3321,5608,3290,5653,3246,5697,3201,5701,3160,5703,3119,5590,3009,5477,2900,5442,2851,5406,2802,5374,2751,5322,2678,5304,2656,5280,2622,5211,2622,5169,2622,5147,2630,5092,2647,5062,2654,5037,2669,5028,2672,5002,2673,4991,2675,4983,2676,4973,2686,4963,2697,4953,2699,L,4919,2699,Q,4879,2699,4835,2668,4781,2625,4742,2600,4741,2599,4697,2575,4673,2561,4661,2545,4647,2527,4650,2497,4656,2460,4656,2441,4656,2266,4666,2190,4684,2062,4739,1983,4813,1920,4932,1850,4935,1849,4954,1841,4970,1835,4978,1827,4983,1794,4980,1779,4976,1758,4986,1729,5001,1683,5003,1670,5015,1666,5062,1639,5107,1613,5126,1600,5147,1584,5199,1560,5237,1543,5245,1527,5247,1525,5249,1504,5252,1487,5263,1477,5277,1462,5279,1445,5276,1424,5277,1412,5279,1402,5293,1352,5303,1317,5299,1296,5298,1293,5298,1289,5295,1248,5285,1165,5274,1086,5274,1030,5274,1015,5263,976,5250,935,5250,918,L,5249,806,5013,805,Q,5010,806,5006,806,5005,806,5002,806,4974,806,4961,795,4947,783,4934,745,4897,671,4893,661,4882,631,4837,609,4778,587,4749,574,4739,571,4676,536,4635,515,4582,501,4560,494,4488,459,4425,428,4407,428,4392,428,4358,434,4326,439,4300,439,L,4294,439,Q,4285,437,4266,437,4248,426,4215,402,4150,354,4072,286,Q,3938,167,3858,108,Z]],label:"Toewang Gewog",shortLabel:"TO",labelPosition:[385.1,148.6],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"punakha",type:"maps"}}})});