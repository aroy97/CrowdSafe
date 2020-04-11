(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=28)})({28:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(29);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},29:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Thimphu.1.06-18-2019 10:22:07
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Thimphu",revision:1,creditLabel:false,standaloneInit:false,baseWidth:336,baseHeight:600,baseScaleFactor:10,firstEntity:"BT.TM.CH",entities:{"BT.TM.CH":{outlines:[[M,2943,3340,Q,2933,3349,2933,3370,2933,3381,2932,3400,2930,3410,2914,3460,L,2915,3467,Q,2914,3469,2914,3470,2912,3489,2908,3500,2904,3510,2904,3518,2904,3529,2895,3538,2890,3544,2876,3551,2869,3554,2864,3569,2858,3588,2857,3589,2840,3608,2833,3623,2823,3642,2800,3644,2769,3647,2759,3654,2745,3662,2660,3662,2650,3662,2642,3656,2634,3649,2602,3649,2589,3649,2587,3649,2581,3647,2576,3641,2571,3635,2561,3633,2552,3631,2552,3634,2553,3634,2554,3634,2552,3634,2552,3635,L,2552,3634,Q,2539,3635,2531,3638,2522,3643,2509,3643,2493,3643,2488,3632,2484,3621,2481,3621,2458,3621,2453,3636,2448,3650,2418,3648,2408,3648,2379,3655,2352,3662,2321,3658,2289,3653,2273,3665,2246,3686,2240,3688,2233,3690,2219,3690,2212,3690,2210,3694,2208,3696,2204,3700,2198,3705,2188,3704,2173,3704,2171,3704,2171,3705,2171,3706,2171,3711,2170,3713,2168,3716,2164,3718,2150,3724,2149,3727,2145,3732,2144,3744,2141,3749,2137,3752,2134,3754,2134,3760,2134,3771,2135,3772,2136,3776,2145,3780,2152,3782,2154,3787,2159,3797,2160,3799,2163,3802,2168,3809,2171,3813,2178,3816,2191,3826,2201,3828,2203,3828,2210,3829,2215,3830,2219,3833,2225,3837,2234,3838,2243,3839,2246,3841,2276,3855,2279,3858,2284,3860,2294,3869,2305,3878,2310,3880,2324,3886,2339,3904,2352,3917,2361,3935,2380,3971,2381,3973,2383,3975,2385,3991,2386,4007,2388,4010,2391,4014,2395,4025,2400,4034,2409,4032,L,2424,4032,Q,2429,4032,2433,4036,2435,4038,2439,4043,2461,4061,2470,4066,2480,4071,2483,4079,L,2487,4095,Q,2489,4102,2500,4108,2514,4118,2516,4118,2531,4133,2544,4143,2559,4154,2561,4155,2569,4162,2569,4169,2570,4183,2588,4196,2607,4210,2610,4219,2610,4242,2611,4246,2614,4252,2621,4262,2628,4272,2629,4276,2633,4288,2633,4289,L,2642,4302,Q,2648,4311,2653,4315,2655,4318,2655,4329,2655,4330,2653,4344,2644,4349,2645,4354,2646,4361,2645,4380,2645,4383,2645,4397,2645,4410,2648,4412,2667,4421,2675,4424,2680,4419,2690,4409,2701,4399,2712,4394,L,2829,4394,Q,2835,4394,2834,4386,2834,4378,2834,4376,2847,4367,2852,4360,2866,4349,2869,4344,2870,4337,2873,4332,2877,4328,2877,4325,2877,4320,2873,4315,2870,4310,2868,4303,2865,4297,2858,4286,2848,4270,2847,4269,2846,4267,2845,4261,2844,4253,2843,4249,2834,4234,2834,4230,2833,4212,2831,4207,L,2818,4189,Q,2804,4173,2803,4171,2802,4170,2802,4155,2802,4140,2806,4135,2811,4125,2810,4117,2812,4111,2819,4097,2823,4088,2824,4082,L,2823,4039,Q,2821,4028,2821,4020,2822,4003,2830,3998,2831,3998,2835,3991,2837,3987,2845,3987,L,2878,3986,Q,2882,3986,2885,3990,2887,3992,2890,3997,2892,3999,2897,4e3,2901,4e3,2907,4e3,2922,4e3,2924,4001,2925,4001,2929,4006,2934,4010,2940,4011,2946,4012,2964,4010,2980,4010,2982,4014,2986,4021,2987,4022,2990,4025,2995,4026,3e3,4027,3015,4029,3018,4029,3026,4039,3036,4049,3042,4051,3051,4054,3053,4055,3055,4056,3060,4060,3066,4065,3076,4067,3082,4068,3091,4074,3098,4078,3117,4078,3154,4077,3161,4074,3164,4068,3169,4068,L,3182,4064,Q,3186,4059,3187,4056,3187,4049,3192,4045,3200,4039,3214,4029,3228,4014,3234,4012,3230,3998,3230,3975,3236,3957,3242,3938,3254,3900,3253,3880,3252,3861,3258,3832,3263,3805,3265,3795,3265,3793,3265,3791,3265,3780,3263,3775,3262,3771,3262,3762,3262,3750,3264,3746,3265,3743,3273,3736,3275,3732,3293,3732,3302,3732,3312,3733,L,3312,3724,Q,3312,3711,3305,3702,3295,3693,3291,3686,3280,3670,3279,3668,3275,3655,3271,3650,3262,3639,3260,3628,3258,3616,3257,3609,3257,3590,3257,3584,3257,3574,3228,3568,L,3204,3557,3200,3546,Q,3197,3537,3186,3532,3174,3528,3168,3523,3165,3521,3152,3510,3148,3506,3148,3502,3150,3492,3151,3482,3151,3474,3147,3471,3144,3469,3136,3467,3118,3460,3115,3449,3114,3435,3111,3425,3085,3427,3067,3403,3050,3392,3043,3387,3038,3383,3026,3370,3017,3360,3011,3349,3006,3342,2993,3332,2968,3314,2959,3299,2958,3304,2957,3309,Q,2953,3330,2943,3340,Z]],label:"Chang Gewog",shortLabel:"CH",labelPosition:[272.3,386.1],labelAlignment:[CEN,MID],nextId:"BT.TM.DG"},"BT.TM.DG":{outlines:[[M,3234,4012,Q,3228,4014,3214,4029,3200,4039,3192,4045,3187,4049,3187,4056,3186,4059,3182,4064,L,3169,4068,Q,3164,4068,3161,4074,3154,4077,3117,4078,3098,4078,3091,4074,3082,4068,3076,4067,3066,4065,3060,4060,3055,4056,3053,4055,3051,4054,3042,4051,3036,4049,3026,4039,3018,4029,3015,4029,3e3,4027,2995,4026,2990,4025,2987,4022,2986,4021,2982,4014,2980,4010,2964,4010,2946,4012,2940,4011,2934,4010,2929,4006,2925,4001,2924,4001,2922,4e3,2907,4e3,2901,4e3,2897,4e3,2892,3999,2890,3997,2887,3992,2885,3990,2882,3986,2878,3986,L,2845,3987,Q,2837,3987,2835,3991,2831,3998,2830,3998,2822,4003,2821,4020,2821,4028,2823,4039,L,2824,4082,Q,2823,4088,2819,4097,2812,4111,2810,4117,2811,4125,2806,4135,2802,4140,2802,4155,2802,4170,2803,4171,2804,4173,2818,4189,L,2831,4207,Q,2833,4212,2834,4230,2834,4234,2843,4249,2844,4253,2845,4261,2846,4267,2847,4269,2848,4270,2858,4286,2865,4297,2868,4303,2870,4310,2873,4315,2877,4320,2877,4325,2877,4328,2873,4332,2870,4337,2869,4344,2866,4349,2852,4360,2847,4367,2834,4376,2834,4378,2834,4386,2835,4394,2829,4394,L,2712,4394,Q,2701,4399,2690,4409,2680,4419,2675,4424,2672,4425,2671,4427,2665,4431,2665,4449,2665,4465,2662,4472,2661,4473,2660,4474,2657,4479,2650,4485,2637,4493,2634,4498,2632,4500,2632,4515,2632,4524,2626,4529,L,2712,4530,Q,2731,4530,2736,4534,2744,4541,2758,4545,2763,4547,2770,4553,2776,4559,2779,4560,2784,4562,2791,4568,2799,4573,2801,4577,2808,4586,2818,4598,2824,4607,2824,4624,2824,4639,2820,4642,2812,4647,2808,4655,2804,4662,2793,4663,2779,4662,2773,4662,2764,4662,2753,4666,2741,4672,2734,4672,2725,4673,2714,4681,2706,4687,2700,4688,2698,4688,2697,4688,2692,4688,2689,4689,2682,4690,2676,4694,2662,4702,2644,4699,2621,4695,2608,4709,2600,4717,2588,4735,2571,4754,2566,4755,2558,4754,2554,4755,2549,4755,2541,4761,2534,4767,2518,4780,2504,4790,2491,4787,2487,4795,2476,4811,2473,4815,2457,4835,2445,4852,2438,4861,2436,4863,2436,4883,2436,4899,2438,4929,2438,4931,2439,4933,2438,4938,2438,4949,2438,4965,2442,4972,2444,4975,2462,4994,2466,4998,2470,5007,2474,5016,2480,5022,2485,5027,2486,5041,2486,5049,2484,5058,2484,5080,2483,5085,2479,5099,2464,5113,2446,5127,2441,5132,2438,5136,2429,5144,2421,5152,2419,5158,2447,5183,2452,5201,2453,5202,2453,5204,2453,5207,2453,5211,2454,5217,2452,5222,2451,5224,2444,5233,2439,5239,2440,5243,2435,5247,2426,5260,2417,5275,2413,5278,2395,5294,2377,5308,2365,5314,2359,5320,2346,5331,2340,5333,2319,5331,2308,5338,2304,5340,2293,5342,2291,5343,2277,5354,2267,5360,2240,5384,2234,5390,2226,5400,2222,5406,2214,5420,2202,5436,2201,5453,2199,5465,2200,5499,2199,5514,2193,5540,2190,5549,2183,5558,2179,5562,2171,5571,2170,5571,2168,5573,2164,5576,2154,5583,2145,5589,2138,5599,2133,5606,2129,5619,2125,5624,2124,5627,2124,5629,2123,5636,L,2123,5646,2154,5646,Q,2156,5646,2159,5649,2162,5653,2165,5655,2168,5657,2175,5658,2179,5659,2185,5659,2190,5660,2190,5668,L,2191,5694,Q,2190,5714,2196,5723,2198,5727,2199,5736,2199,5745,2203,5750,2214,5764,2242,5789,2247,5793,2256,5798,2265,5804,2270,5808,2275,5812,2286,5819,2296,5825,2301,5830,L,2324,5854,Q,2326,5857,2327,5862,2328,5865,2328,5872,2328,5880,2335,5889,L,2363,5916,Q,2367,5922,2375,5925,2379,5928,2391,5932,2393,5933,2399,5938,2403,5941,2406,5941,2413,5942,2426,5941,2433,5941,2440,5947,2447,5953,2459,5953,2468,5953,2470,5952,2474,5949,2479,5944,2481,5942,2486,5942,2491,5941,2495,5937,2504,5926,2546,5861,2548,5851,2552,5843,2557,5834,2560,5825,L,2561,5792,Q,2561,5767,2551,5747,2540,5726,2540,5690,2540,5666,2554,5646,2574,5624,2585,5607,2595,5592,2597,5560,2597,5536,2598,5523,2597,5522,2598,5521,2597,5518,2597,5517,2597,5505,2597,5498,2596,5481,2599,5473,2602,5462,2610,5454,2620,5445,2627,5438,2680,5380,2703,5382,2726,5383,2755,5379,2771,5377,2799,5371,2808,5369,2843,5343,2862,5329,2864,5327,2867,5323,2867,5307,L,2864,5279,Q,2864,5247,2889,5236,2930,5217,2933,5212,2945,5186,2954,5177,2959,5172,2959,5157,2959,5142,2963,5137,2968,5124,2972,5115,2978,5099,2989,5100,2996,5101,3008,5095,3020,5090,3033,5092,3052,5093,3057,5093,3072,5091,3071,5078,L,3071,5032,Q,3073,4934,3073,4931,3073,4925,3072,4920,3070,4916,3070,4910,3070,4910,3063,4852,3061,4831,3061,4800,L,3063,4743,Q,3063,4732,3060,4727,3054,4718,3050,4703,3048,4697,3048,4687,3049,4677,3049,4672,L,3049,4670,Q,3049,4654,3051,4642,3052,4637,3060,4629,3069,4621,3070,4618,3072,4608,3083,4591,L,3083,4564,Q,3083,4547,3081,4541,3076,4532,3057,4520,3044,4511,3035,4502,3022,4489,3017,4485,2941,4419,2941,4402,2941,4401,2955,4393,2969,4385,2976,4379,2983,4372,2998,4357,3012,4341,3025,4329,3038,4316,3059,4303,3073,4295,3108,4270,3139,4247,3152,4240,3189,4214,3222,4188,3288,4137,3288,4116,3288,4098,3282,4092,3281,4090,3280,4090,3265,4057,3241,4029,Q,3236,4022,3234,4012,Z]],label:"Dagala Gewog",shortLabel:"DG",labelPosition:[270.5,496.9],labelAlignment:[CEN,MID],nextId:"BT.TM.GN"},"BT.TM.GN":{outlines:[[M,2559,4576,Q,2552,4577,2525,4572,2505,4572,2471,4609,2466,4615,2459,4617,2451,4619,2447,4621,2437,4625,2422,4642,2409,4655,2391,4659,2390,4659,2357,4662,2348,4664,2328,4669,2312,4674,2296,4674,2276,4674,2273,4674,2268,4671,2260,4654,2256,4644,2243,4641,2237,4640,2213,4640,2212,4640,2211,4640,2203,4639,2193,4639,2171,4639,2162,4644,2151,4649,2143,4659,2140,4662,2125,4662,2116,4662,2112,4657,2109,4653,2098,4655,2085,4656,2082,4652,2079,4644,2075,4639,2074,4638,2069,4625,2066,4618,2058,4619,2049,4620,2045,4620,2038,4620,2033,4617,L,2023,4617,Q,2021,4619,2021,4620,L,2022,4744,Q,2020,4747,2017,4747,2014,4748,2013,4749,2013,4750,1999,4764,1994,4769,1989,4783,L,1989,4787,2020,4787,Q,2024,4787,2030,4793,2032,4795,2036,4796,2039,4796,2043,4797,2048,4798,2054,4809,2058,4814,2062,4822,2064,4825,2067,4835,2076,4844,2077,4848,2078,4849,2080,4863,2082,4873,2085,4878,2095,4891,2103,4907,2108,4917,2111,4936,2112,4938,2119,4952,2122,4958,2123,4963,2124,4965,2124,4967,2127,4987,2130,5003,2133,5022,2138,5049,L,2143,5069,Q,2144,5073,2144,5079,2144,5085,2147,5092,2150,5098,2153,5110,2155,5120,2158,5139,L,2169,5139,Q,2184,5132,2190,5129,2196,5127,2201,5124,2204,5122,2212,5116,2214,5114,2223,5114,2232,5115,2236,5112,2244,5106,2246,5106,2248,5104,2256,5104,L,2269,5106,Q,2269,5107,2272,5111,2274,5115,2279,5118,L,2302,5134,Q,2319,5147,2326,5149,2334,5151,2355,5150,2364,5150,2387,5149,2409,5149,2418,5157,2418,5158,2419,5158,2421,5152,2429,5144,2438,5136,2441,5132,2446,5127,2464,5113,2479,5099,2483,5085,2484,5080,2484,5058,2486,5049,2486,5041,2485,5027,2480,5022,2474,5016,2470,5007,2466,4998,2462,4994,2444,4975,2442,4972,2438,4965,2438,4949,2438,4938,2439,4933,2438,4931,2438,4929,2436,4899,2436,4883,2436,4863,2438,4861,2445,4852,2457,4835,2473,4815,2476,4811,2487,4795,2491,4787,2504,4790,2518,4780,2534,4767,2541,4761,2549,4755,2554,4755,2558,4754,2566,4755,2571,4754,2588,4735,2600,4717,2608,4709,2621,4695,2644,4699,2662,4702,2676,4694,2682,4690,2689,4689,2692,4688,2697,4688,2698,4688,2700,4688,2706,4687,2714,4681,2725,4673,2734,4672,2741,4672,2753,4666,2764,4662,2773,4662,2779,4662,2793,4663,2804,4662,2808,4655,2812,4647,2820,4642,2824,4639,2824,4624,2824,4607,2818,4598,2808,4586,2801,4577,2799,4573,2791,4568,2784,4562,2779,4560,2776,4559,2770,4553,2763,4547,2758,4545,2744,4541,2736,4534,2731,4530,2712,4530,L,2626,4529,Q,2624,4531,2622,4532,2599,4542,2592,4561,2587,4574,2562,4575,Q,2562,4576,2559,4576,Z]],label:"Genyekha Gewog",shortLabel:"GN",labelPosition:[226.9,484.4],labelAlignment:[CEN,MID],nextId:"BT.TM.KW"},"BT.TM.KW":{outlines:[[M,2541,2342,Q,2539,2340,2528,2340,2511,2340,2505,2353,2497,2370,2480,2379,2470,2383,2440,2383,2420,2382,2413,2401,2409,2412,2405,2416,2401,2421,2392,2421,2386,2420,2374,2425,2365,2430,2360,2434,2356,2437,2336,2465,2322,2485,2302,2485,2287,2485,2284,2484,2276,2482,2274,2476,L,2147,2476,Q,2149,2497,2137,2511,2134,2515,2112,2534,2098,2546,2080,2546,2061,2544,2050,2546,2037,2547,2021,2564,2e3,2586,1992,2591,1990,2592,1979,2594,1970,2595,1961,2605,1949,2617,1947,2627,1945,2630,1945,2633,L,1945,2666,Q,1946,2672,1951,2681,1956,2690,1956,2696,1956,2708,1948,2713,1938,2719,1934,2736,1932,2744,1923,2754,1919,2758,1917,2768,1914,2774,1908,2775,1877,2776,1858,2794,1839,2819,1823,2833,1810,2845,1809,2859,1807,2883,1807,2884,1808,2898,1794,2914,1782,2929,1786,2947,1777,2957,1776,2974,1776,2983,1778,2998,1775,3030,1770,3050,L,1770,3050,Q,1777,3051,1779,3047,1781,3041,1787,3041,1794,3041,1799,3047,1805,3053,1808,3053,L,1821,3050,Q,1835,3048,1835,3050,1845,3051,1853,3056,1871,3068,1879,3072,1883,3073,1889,3078,1897,3084,1897,3086,L,1897,3112,Q,1897,3118,1897,3128,1899,3137,1899,3137,1903,3142,1908,3157,1909,3160,1914,3163,1923,3167,1927,3170,1931,3173,1931,3178,1932,3181,1931,3190,1931,3204,1927,3214,1922,3223,1921,3239,1921,3241,1921,3243,1921,3254,1919,3286,1919,3322,1926,3330,1944,3351,1944,3362,1943,3379,1943,3383,1944,3396,1952,3404,1953,3407,1957,3409,1962,3412,1972,3414,1975,3417,1985,3426,L,1992,3431,Q,1998,3435,1998,3436,L,1998,3524,Q,2009,3524,2033,3525,2057,3525,2074,3524,2085,3523,2090,3529,2092,3533,2099,3548,2103,3553,2109,3559,2114,3566,2114,3579,L,2114,3628,Q,2114,3635,2115,3637,2116,3640,2121,3649,2124,3653,2131,3656,2136,3658,2142,3660,2146,3661,2147,3674,2148,3676,2159,3684,2169,3694,2170,3695,2171,3695,2171,3704,2173,3704,2188,3704,2198,3705,2204,3700,2208,3696,2210,3694,2212,3690,2219,3690,2233,3690,2240,3688,2246,3686,2273,3665,2289,3653,2321,3658,2352,3662,2379,3655,2408,3648,2418,3648,2448,3650,2453,3636,2458,3621,2481,3621,2484,3621,2488,3632,2493,3643,2509,3643,2522,3643,2531,3638,2539,3635,2552,3634,2552,3631,2561,3633,2571,3635,2576,3641,2581,3647,2587,3649,2589,3649,2602,3649,2634,3649,2642,3656,2650,3662,2660,3662,2745,3662,2759,3654,2769,3647,2800,3644,2823,3642,2833,3623,2840,3608,2857,3589,2858,3588,2864,3569,2869,3554,2876,3551,2890,3544,2895,3538,2904,3529,2904,3518,2904,3510,2908,3500,2912,3489,2914,3470,2914,3469,2915,3467,L,2914,3460,Q,2930,3410,2932,3400,2933,3381,2933,3370,2933,3349,2943,3340,2953,3330,2957,3309,2958,3304,2959,3299,2961,3285,2963,3277,2964,3269,2967,3244,2969,3220,2969,3217,2969,3214,2959,3190,2949,3168,2945,3161,2929,3134,2919,3108,2919,3106,2919,3105,2915,3093,2908,3080,2900,3064,2894,3054,2888,3043,2871,3040,2850,3036,2843,3032,2827,3022,2819,3016,2803,3006,2800,2994,2798,2986,2794,2965,2790,2945,2788,2940,2772,2900,2764,2883,2752,2852,2747,2826,2744,2812,2733,2800,2720,2788,2715,2783,2701,2769,2693,2761,2683,2751,2678,2743,2675,2740,2674,2737,2646,2694,2630,2668,2598,2615,2598,2589,2598,2570,2626,2523,2652,2475,2653,2432,2653,2397,2654,2374,2645,2375,2640,2375,2630,2373,2626,2367,2621,2359,2612,2359,2601,2360,2595,2360,2584,2360,2574,2357,2565,2352,2561,2351,Q,2547,2346,2541,2342,Z]],label:"Kawang Gewog",shortLabel:"KW",labelPosition:[236.9,302.2],labelAlignment:[CEN,MID],nextId:"BT.TM.LZ"},"BT.TM.LZ":{outlines:[[M,1897,281,Q,1897,280,1888,260,1887,253,1880,239,1877,231,1873,229,1869,226,1861,227,1856,227,1849,222,1842,217,1839,216,L,1730,216,Q,1725,213,1714,209,1702,206,1698,205,1695,198,1687,192,1680,187,1679,185,L,1677,176,Q,1674,171,1672,156,1669,141,1665,134,1660,124,1657,118,1651,108,1646,103,1622,83,1621,82,1615,79,1602,79,1587,80,1580,80,1539,80,1537,80,1518,79,1502,76,1501,76,1499,76,1476,75,1457,64,1444,56,1436,45,L,1426,45,Q,1426,47,1425,128,1425,178,1426,209,1427,240,1396,288,1363,340,1360,363,1354,408,1315,427,1310,429,1234,450,1191,462,1180,514,1163,592,1157,605,1116,633,1100,671,1090,697,1068,757,1056,779,1050,808,1043,836,1039,844,1033,857,1005,868,976,881,966,896,948,921,936,949,930,964,921,984,913,998,888,998,858,996,845,998,814,1004,797,1019,780,1038,764,1048,746,1060,728,1081,728,1082,728,1082,728,1108,755,1124,782,1141,782,1163,782,1175,781,1200,785,1219,810,1221,825,1222,828,1223,835,1224,845,1231,847,1232,853,1238,857,1242,863,1243,881,1247,886,1251,889,1255,898,1268,902,1275,910,1288,916,1296,939,1323,940,1325,945,1329,951,1335,952,1335,956,1336,964,1338,969,1340,969,1347,968,1356,970,1379,970,1382,971,1385,L,971,1388,Q,996,1390,1043,1390,1064,1390,1077,1401,1085,1408,1095,1421,1101,1428,1122,1438,1142,1446,1149,1454,1160,1468,1173,1474,1187,1481,1209,1482,L,1209,1536,Q,1194,1536,1193,1536,1185,1537,1181,1542,1198,1544,1196,1575,1196,1580,1199,1584,1201,1586,1205,1590,1208,1594,1209,1608,1209,1618,1209,1638,1209,1655,1205,1664,1202,1672,1188,1683,1173,1694,1171,1700,L,1171,1706,Q,1250,1706,1279,1708,L,1279,1722,Q,1270,1728,1266,1730,1261,1734,1257,1741,1257,1742,1253,1755,1250,1761,1243,1761,1233,1761,1227,1770,1219,1780,1213,1780,1209,1780,1200,1786,1192,1792,1187,1800,L,1188,1820,Q,1188,1828,1187,1829,1181,1833,1177,1840,L,1177,1867,1177,1871,Q,1177,1876,1177,1885,1177,1896,1175,1900,1175,1901,1167,1917,1160,1929,1160,1934,1160,1940,1156,1951,1151,1962,1151,1968,1148,1975,1142,1984,1138,1989,1138,2e3,1138,2010,1141,2013,1151,2021,1159,2032,1161,2035,1177,2052,1183,2059,1183,2069,1183,2074,1180,2077,1178,2080,1175,2086,L,1175,2087,Q,1175,2088,1175,2090,1174,2094,1173,2101,1172,2104,1168,2108,1165,2112,1165,2117,1164,2126,1159,2131,1155,2135,1155,2141,1155,2143,1183,2169,1191,2178,1198,2189,1206,2201,1209,2206,1215,2214,1218,2227,1222,2244,1222,2244,1224,2250,1228,2256,1231,2259,1231,2264,L,1231,2287,Q,1231,2294,1231,2299,1241,2300,1251,2296,1263,2290,1267,2290,L,1289,2291,Q,1296,2291,1297,2293,1299,2294,1305,2299,1310,2303,1348,2303,1350,2303,1385,2303,1388,2303,1390,2299,1393,2294,1394,2293,1397,2291,1405,2289,1410,2287,1415,2280,1418,2276,1421,2270,1423,2266,1428,2262,1432,2257,1432,2250,1432,2233,1427,2215,1422,2198,1422,2188,1422,2178,1423,2176,1424,2171,1430,2169,1435,2166,1436,2158,1437,2148,1438,2146,1441,2141,1444,2127,1446,2116,1452,2110,1455,2106,1462,2104,1466,2102,1471,2102,1485,2093,1486,2093,1491,2092,1529,2092,1530,2092,1532,2091,1537,2088,1545,2084,1553,2080,1558,2079,1573,2076,1569,2056,1563,2023,1572,2007,1584,1992,1586,1983,1587,1979,1594,1969,1602,1959,1603,1957,L,1603,1920,Q,1603,1912,1611,1892,1613,1885,1614,1872,1613,1858,1613,1853,1613,1839,1618,1828,1624,1815,1627,1806,1628,1789,1628,1746,L,1629,1699,Q,1633,1686,1639,1677,1647,1663,1651,1654,1654,1648,1669,1642,1688,1635,1690,1633,1699,1627,1710,1626,1717,1625,1731,1624,1731,1624,1731,1624,1728,1619,1729,1613,1729,1611,1722,1602,1721,1601,1720,1597,1720,1594,1716,1592,L,1716,1580,Q,1734,1581,1742,1580,1743,1580,1747,1577,1750,1574,1753,1574,L,1765,1572,Q,1766,1571,1775,1569,1779,1567,1784,1559,L,1795,1547,Q,1796,1546,1796,1537,1796,1530,1795,1529,1794,1528,1786,1524,1782,1522,1782,1515,1783,1513,1783,1510,1783,1507,1783,1506,1783,1497,1782,1488,1780,1475,1780,1469,1780,1460,1781,1458,1781,1453,1786,1448,1786,1427,1786,1425,1787,1418,1797,1406,L,1807,1387,Q,1808,1382,1810,1373,1812,1366,1816,1362,1826,1347,1831,1341,1838,1333,1840,1319,1840,1313,1840,1294,1840,1264,1839,1261,1832,1252,1821,1226,1820,1225,1819,1224,1800,1190,1776,1171,L,1776,1151,Q,1783,1151,1803,1150,1808,1150,1814,1146,1820,1142,1821,1142,1837,1137,1838,1135,1850,1130,1852,1121,1852,1102,1852,1093,1852,1079,1854,1074,1865,1051,1880,1033,1887,1025,1905,995,1918,974,1928,967,1941,958,1962,944,1974,935,1982,923,1984,920,1985,918,1989,914,1998,909,2002,905,2013,896,L,2035,868,Q,2045,855,2052,828,2054,820,2069,793,2083,766,2097,765,L,2118,765,Q,2119,765,2140,757,2152,757,2193,757,2221,757,2238,753,2240,740,2240,727,2240,704,2234,699,2218,692,2200,675,2193,669,2184,668,2172,668,2166,668,2159,668,2147,662,2136,657,2129,658,2088,654,2072,654,2064,655,2058,654,2047,653,2042,650,2027,640,2021,638,1983,622,1968,617,1961,614,1943,612,1923,609,1918,608,1918,606,1918,591,1918,582,1914,577,1910,572,1908,559,1908,555,1904,552,1900,548,1900,544,1899,532,1898,527,1897,518,1895,513,1889,500,1889,484,1889,473,1893,463,1896,452,1896,433,1910,401,1910,386,1910,372,1908,367,1908,350,1904,324,1904,322,1901,316,1898,310,1897,303,Z]],label:"Lingzhi Gewog",shortLabel:"LZ",labelPosition:[148.4,88],labelAlignment:[CEN,MID],nextId:"BT.TM.MW"},"BT.TM.MW":{outlines:[[M,2171,3706,Q,2171,3705,2171,3704,2171,3695,2170,3695,2169,3694,2159,3684,2148,3676,2147,3674,2146,3661,2142,3660,2136,3658,2131,3656,2124,3653,2121,3649,2116,3640,2115,3637,2114,3635,2114,3628,L,2114,3579,Q,2114,3566,2109,3559,2103,3553,2099,3548,2092,3533,2090,3529,2085,3523,2074,3524,2057,3525,2033,3525,2009,3524,1998,3524,L,1998,3436,Q,1998,3435,1992,3431,L,1985,3426,Q,1975,3417,1972,3414,1962,3412,1957,3409,1953,3407,1952,3404,1944,3396,1943,3383,1943,3379,1944,3362,1944,3351,1926,3330,1919,3322,1919,3286,1921,3254,1921,3243,1921,3241,1921,3239,1922,3223,1927,3214,1931,3204,1931,3190,1932,3181,1931,3178,1931,3173,1927,3170,1923,3167,1914,3163,1909,3160,1908,3157,1903,3142,1899,3137,1899,3137,1897,3128,1897,3118,1897,3112,L,1897,3086,Q,1897,3084,1889,3078,1883,3073,1879,3072,1871,3068,1853,3056,1845,3051,1835,3050,1835,3048,1821,3050,L,1808,3053,Q,1805,3053,1799,3047,1794,3041,1787,3041,1781,3041,1779,3047,1777,3051,1770,3050,1770,3054,1773,3062,1774,3063,1774,3068,1775,3072,1778,3073,1784,3074,1784,3101,1784,3112,1782,3116,1777,3120,1775,3126,1774,3129,1773,3133,1772,3137,1769,3139,1765,3141,1760,3141,1752,3141,1751,3141,L,1751,3152,Q,1751,3159,1749,3163,1747,3167,1743,3168,1737,3168,1735,3169,1724,3175,1720,3178,1709,3192,1708,3193,1695,3203,1690,3223,1689,3225,1683,3258,L,1683,3519,Q,1681,3525,1666,3540,1654,3552,1658,3565,L,1657,3637,Q,1656,3647,1657,3656,1656,3662,1652,3670,1646,3680,1643,3695,1643,3695,1643,3698,1643,3705,1643,3725,1643,3743,1637,3750,1627,3762,1627,3774,L,1627,3807,Q,1627,3854,1631,3863,1639,3881,1640,3908,L,1639,3939,Q,1639,3946,1643,3956,1649,3970,1650,3972,1651,3973,1656,3978,1660,3983,1661,3986,1664,3999,1673,3999,1677,3999,1687,4007,1690,4008,1707,4009,1712,4010,1724,4016,1733,4021,1739,4020,1743,4020,1753,4025,1756,4027,1772,4030,1780,4035,1784,4043,1790,4056,1792,4059,1797,4065,1797,4078,1796,4086,1805,4096,1812,4111,1830,4134,1832,4138,1836,4153,1839,4170,1844,4175,1852,4184,1852,4215,1852,4229,1849,4233,1843,4242,1839,4252,1839,4266,1838,4272,1836,4276,1829,4288,1826,4293,1814,4298,1802,4303,1799,4310,1795,4316,1788,4328,1784,4336,1784,4344,L,1783,4380,Q,1783,4390,1784,4392,1786,4393,1798,4402,1804,4406,1816,4422,1819,4427,1828,4430,1836,4433,1838,4437,1843,4445,1863,4458,1878,4468,1915,4491,1943,4507,1962,4524,1966,4526,1984,4539,1998,4548,2006,4551,2031,4560,2031,4592,2031,4600,2028,4606,2024,4613,2023,4617,L,2033,4617,Q,2038,4620,2045,4620,2049,4620,2058,4619,2066,4618,2069,4625,2074,4638,2075,4639,2079,4644,2082,4652,2085,4656,2098,4655,2109,4653,2112,4657,2116,4662,2125,4662,2140,4662,2143,4659,2151,4649,2162,4644,2171,4639,2193,4639,2203,4639,2211,4640,2212,4640,2213,4640,2237,4640,2243,4641,2256,4644,2260,4654,2268,4671,2273,4674,2276,4674,2296,4674,2312,4674,2328,4669,2348,4664,2357,4662,2390,4659,2391,4659,2409,4655,2422,4642,2437,4625,2447,4621,2451,4619,2459,4617,2466,4615,2471,4609,2505,4572,2525,4572,2552,4577,2559,4576,2562,4576,2562,4575,2587,4574,2592,4561,2599,4542,2622,4532,2624,4531,2626,4529,2632,4524,2632,4515,2632,4500,2634,4498,2637,4493,2650,4485,2657,4479,2660,4474,2661,4473,2662,4472,2665,4465,2665,4449,2665,4431,2671,4427,2672,4425,2675,4424,2667,4421,2648,4412,2645,4410,2645,4397,2645,4383,2645,4380,2646,4361,2645,4354,2644,4349,2653,4344,2655,4330,2655,4329,2655,4318,2653,4315,2648,4311,2642,4302,L,2633,4289,Q,2633,4288,2629,4276,2628,4272,2621,4262,2614,4252,2611,4246,2610,4242,2610,4219,2607,4210,2588,4196,2570,4183,2569,4169,2569,4162,2561,4155,2559,4154,2544,4143,2531,4133,2516,4118,2514,4118,2500,4108,2489,4102,2487,4095,L,2483,4079,Q,2480,4071,2470,4066,2461,4061,2439,4043,2435,4038,2433,4036,2429,4032,2424,4032,L,2409,4032,Q,2400,4034,2395,4025,2391,4014,2388,4010,2386,4007,2385,3991,2383,3975,2381,3973,2380,3971,2361,3935,2352,3917,2339,3904,2324,3886,2310,3880,2305,3878,2294,3869,2284,3860,2279,3858,2276,3855,2246,3841,2243,3839,2234,3838,2225,3837,2219,3833,2215,3830,2210,3829,2203,3828,2201,3828,2191,3826,2178,3816,2171,3813,2168,3809,2163,3802,2160,3799,2159,3797,2154,3787,2152,3782,2145,3780,2136,3776,2135,3772,2134,3771,2134,3760,2134,3754,2137,3752,2141,3749,2144,3744,2145,3732,2149,3727,2150,3724,2164,3718,2168,3716,2170,3713,Q,2171,3711,2171,3706,Z]],label:"Mewang Gewog",shortLabel:"MW",labelPosition:[215.1,425],labelAlignment:[CEN,MID],nextId:"BT.TM.NR"},"BT.TM.NR":{outlines:[[M,2029,1559,Q,2028,1562,2011,1571,1997,1580,1996,1584,L,1994,1598,Q,1994,1599,1991,1602,1987,1604,1986,1607,1983,1612,1982,1614,1980,1617,1974,1617,L,1940,1617,1940,1637,Q,1941,1641,1937,1645,1934,1649,1933,1654,1932,1658,1933,1677,1933,1695,1931,1704,1928,1716,1894,1728,1893,1730,1881,1730,1867,1730,1866,1730,1850,1733,1842,1733,L,1842,1733,Q,1841,1734,1832,1733,1823,1731,1817,1728,L,1807,1721,Q,1804,1720,1802,1716,1799,1711,1798,1710,1793,1706,1777,1693,1762,1682,1760,1679,1753,1671,1749,1658,1744,1644,1737,1632,1733,1627,1731,1624,1717,1625,1710,1626,1699,1627,1690,1633,1688,1635,1669,1642,1654,1648,1651,1654,1647,1663,1639,1677,1633,1686,1629,1699,L,1628,1746,Q,1628,1789,1627,1806,1624,1815,1618,1828,1613,1839,1613,1853,1613,1858,1614,1872,1613,1885,1611,1892,1603,1912,1603,1920,L,1603,1957,Q,1602,1959,1594,1969,1587,1979,1586,1983,1584,1992,1572,2007,1563,2023,1569,2056,1573,2076,1558,2079,1553,2080,1545,2084,1537,2088,1532,2091,1530,2092,1529,2092,1491,2092,1486,2093,1485,2093,1471,2102,1466,2102,1462,2104,1455,2106,1452,2110,1446,2116,1444,2127,1441,2141,1438,2146,1437,2148,1436,2158,1435,2166,1430,2169,1424,2171,1423,2176,1422,2178,1422,2188,1422,2198,1427,2215,1432,2233,1432,2250,1432,2257,1428,2262,1423,2266,1421,2270,1418,2276,1415,2280,1410,2287,1405,2289,1397,2291,1394,2293,1393,2294,1390,2299,1388,2303,1385,2303,1350,2303,1348,2303,1310,2303,1305,2299,1299,2294,1297,2293,1296,2291,1289,2291,L,1267,2290,Q,1263,2290,1251,2296,1241,2300,1231,2299,1231,2313,1230,2317,1226,2325,1211,2337,1210,2338,1209,2340,1201,2347,1191,2352,1172,2362,1170,2364,1168,2364,1165,2365,1161,2365,1158,2366,1154,2367,1152,2370,1150,2372,1149,2372,L,1134,2372,Q,1130,2372,1128,2375,1127,2377,1124,2382,1104,2408,1095,2427,1093,2429,1090,2437,1087,2442,1083,2447,1079,2451,1073,2455,L,1073,2468,Q,1073,2487,1082,2490,1083,2490,1087,2494,1090,2498,1093,2498,L,1107,2498,1107,2498,1108,2498,Q,1108,2498,1114,2499,1123,2499,1128,2496,1130,2494,1138,2491,1145,2488,1147,2485,1148,2484,1160,2469,1164,2464,1169,2463,1176,2463,1179,2459,L,1245,2459,1244,2504,Q,1244,2513,1256,2527,1265,2537,1276,2544,1282,2547,1299,2563,1304,2566,1310,2570,1316,2573,1322,2580,1342,2596,1383,2625,1418,2651,1436,2676,1447,2691,1478,2740,1508,2788,1523,2808,L,1547,2839,Q,1549,2842,1560,2854,1566,2861,1569,2869,1574,2883,1574,2909,1574,2924,1572,2958,1571,2972,1576,2980,1577,2983,1587,2994,1589,2995,1594,2999,1598,3002,1604,3009,1612,3019,1627,3025,1645,3030,1647,3030,1651,3029,1656,3032,1662,3036,1665,3037,1677,3039,1702,3038,1705,3038,1711,3038,1712,3038,1744,3038,1749,3039,1759,3038,1767,3039,1769,3049,1769,3049,1770,3050,1775,3030,1778,2998,1776,2983,1776,2974,1777,2957,1786,2947,1782,2929,1794,2914,1808,2898,1807,2884,1807,2883,1809,2859,1810,2845,1823,2833,1839,2819,1858,2794,1877,2776,1908,2775,1914,2774,1917,2768,1919,2758,1923,2754,1932,2744,1934,2736,1938,2719,1948,2713,1956,2708,1956,2696,1956,2690,1951,2681,1946,2672,1945,2666,L,1945,2633,Q,1945,2630,1947,2627,1949,2617,1961,2605,1970,2595,1979,2594,1990,2592,1992,2591,2e3,2586,2021,2564,2037,2547,2050,2546,2061,2544,2080,2546,2098,2546,2112,2534,2134,2515,2137,2511,2149,2497,2147,2476,L,2274,2476,Q,2276,2482,2284,2484,2287,2485,2302,2485,2322,2485,2336,2465,2356,2437,2360,2434,2365,2430,2374,2425,2386,2420,2392,2421,2401,2421,2405,2416,2409,2412,2413,2401,2420,2382,2440,2383,2470,2383,2480,2379,2497,2370,2505,2353,2511,2340,2528,2340,2539,2340,2541,2342,2547,2346,2561,2351,2565,2352,2574,2357,2584,2360,2595,2360,2601,2360,2612,2359,2621,2359,2626,2367,2630,2373,2640,2375,2645,2375,2654,2374,2654,2369,2654,2364,2655,2338,2655,2336,2654,2331,2654,2320,2653,2307,2656,2304,2663,2294,2664,2291,2665,2288,2665,2275,2665,2253,2661,2226,2655,2209,2655,2204,2656,2197,2654,2193,2653,2187,2652,2182,2649,2175,2646,2161,2643,2147,2637,2144,2632,2142,2619,2128,2606,2114,2603,2114,2587,2116,2580,2116,L,2539,2116,Q,2527,2115,2527,2102,2528,2089,2527,2084,2526,2078,2527,2075,2528,2072,2527,2071,2527,2066,2523,2058,2518,2048,2518,2047,2516,2030,2518,2012,2519,2006,2515,1999,2510,1992,2508,1988,2505,1982,2503,1979,2499,1975,2490,1970,L,2466,1959,Q,2457,1955,2445,1947,2430,1935,2421,1929,2405,1917,2398,1917,L,2338,1917,Q,2321,1917,2308,1916,2296,1913,2287,1900,2284,1896,2276,1892,2267,1886,2264,1885,2258,1879,2256,1876,2254,1869,2250,1861,2249,1859,2249,1832,2246,1816,2246,1810,2246,1805,2251,1799,2255,1793,2255,1790,2255,1784,2248,1762,2245,1751,2236,1740,2219,1720,2217,1719,2192,1692,2185,1674,L,2168,1642,Q,2165,1624,2166,1610,2166,1603,2162,1585,2158,1568,2159,1559,L,2145,1559,Q,2134,1562,2126,1562,2118,1562,2112,1559,2104,1555,2096,1551,2090,1548,2067,1548,2050,1548,2046,1549,Q,2036,1551,2029,1559,Z]],label:"Naro Gewog",shortLabel:"NR",labelPosition:[199.1,212.7],labelAlignment:[CEN,MID],nextId:"BT.TM.SO"},"BT.TM.SO":{outlines:[[M,898,1268,Q,889,1255,886,1251,881,1247,863,1243,857,1242,853,1238,847,1232,845,1231,835,1224,828,1223,825,1222,810,1221,785,1219,781,1200,782,1175,782,1163,782,1141,755,1124,728,1108,728,1082,719,1091,693,1091,667,1091,639,1085,611,1079,578,1079,523,1079,488,1106,447,1145,413,1172,365,1209,350,1231,328,1262,332,1300,333,1305,334,1311,334,1357,331,1360,325,1369,312,1379,296,1390,291,1395,274,1414,234,1421,221,1423,165,1428,137,1430,137,1465,137,1506,124,1515,115,1521,68,1539,53,1544,53,1578,53,1607,78,1634,108,1667,116,1688,121,1695,137,1716,153,1737,164,1756,168,1764,172,1775,176,1787,178,1792,L,181,1802,Q,184,1807,186,1811,L,197,1828,Q,201,1838,212,1842,229,1847,230,1848,237,1853,252,1854,271,1854,273,1855,287,1858,310,1872,335,1887,350,1902,352,1905,358,1914,363,1922,368,1926,371,1929,378,1937,386,1944,396,1943,410,1941,416,1945,418,1947,421,1950,425,1953,429,1954,433,1955,445,1954,457,1954,462,1959,465,1961,473,1970,480,1978,488,1981,495,1983,501,1991,508,1999,513,2001,522,2005,536,2004,552,2002,556,2003,557,2003,560,2005,563,2008,569,2009,586,2009,591,2009,591,2009,591,2009,592,2008,592,2009,597,2009,603,2010,607,2010,611,2007,617,2002,619,2001,623,1999,628,2e3,633,2e3,645,1995,657,1988,657,1985,655,1959,655,1943,L,654,1926,Q,654,1924,660,1917,666,1910,667,1908,668,1898,680,1889,690,1878,700,1878,710,1879,714,1874,723,1867,723,1866,728,1863,734,1863,745,1864,748,1864,750,1863,753,1860,755,1856,756,1855,758,1853,764,1853,768,1853,773,1854,L,797,1854,Q,800,1854,803,1847,807,1841,811,1841,814,1841,819,1851,820,1853,828,1860,833,1865,843,1886,853,1905,863,1909,867,1910,895,1910,933,1910,936,1907,938,1904,944,1894,946,1892,951,1888,955,1885,957,1882,L,965,1867,Q,971,1855,972,1851,972,1841,982,1837,986,1835,1e3,1832,1009,1830,1021,1823,1032,1816,1036,1815,1038,1814,1043,1808,1050,1803,1051,1802,1059,1798,1066,1795,1088,1781,1096,1778,L,1110,1771,Q,1116,1763,1117,1763,1118,1761,1124,1761,1130,1761,1132,1763,1133,1764,1139,1772,1141,1774,1147,1776,1153,1777,1155,1778,1158,1782,1172,1788,1174,1790,1178,1795,1181,1799,1186,1798,L,1187,1800,Q,1192,1792,1200,1786,1209,1780,1213,1780,1219,1780,1227,1770,1233,1761,1243,1761,1250,1761,1253,1755,1257,1742,1257,1741,1261,1734,1266,1730,1270,1728,1279,1722,L,1279,1708,Q,1250,1706,1171,1706,L,1171,1700,Q,1173,1694,1188,1683,1202,1672,1205,1664,1209,1655,1209,1638,1209,1618,1209,1608,1208,1594,1205,1590,1201,1586,1199,1584,1196,1580,1196,1575,1198,1544,1181,1542,1185,1537,1193,1536,1194,1536,1209,1536,L,1209,1482,Q,1187,1481,1173,1474,1160,1468,1149,1454,1142,1446,1122,1438,1101,1428,1095,1421,1085,1408,1077,1401,1064,1390,1043,1390,996,1390,971,1388,L,971,1385,Q,970,1382,970,1379,968,1356,969,1347,969,1340,964,1338,956,1336,952,1335,951,1335,945,1329,940,1325,939,1323,916,1296,910,1288,Q,902,1275,898,1268,Z]],label:"Soe Gewog",shortLabel:"SO",labelPosition:[66.6,154.4],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"thimphu",type:"maps"}}})});