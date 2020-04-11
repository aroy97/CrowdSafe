(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=26)})({26:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(27);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},27:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Sarpang.1.06-18-2019 10:22:07
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Sarpang",revision:1,creditLabel:false,standaloneInit:false,baseWidth:700,baseHeight:410,baseScaleFactor:10,firstEntity:"BT.GE.CZ",entities:{"BT.GE.CZ":{outlines:[[M,3769,2659,Q,3765,2647,3765,2646,3737,2599,3727,2567,3722,2548,3714,2539,3706,2531,3692,2529,3687,2527,3676,2521,3664,2514,3658,2512,3653,2509,3645,2510,3637,2510,3633,2510,L,3633,2554,Q,3633,2581,3631,2590,3629,2614,3628,2617,3627,2626,3622,2637,3622,2639,3620,2641,3620,2650,3621,2663,3621,2680,3619,2690,3618,2695,3607,2714,3599,2731,3599,2742,3600,2763,3597,2809,3593,2852,3595,2876,3596,2891,3583,2924,3579,2931,3579,2948,3579,2957,3580,2973,L,3580,3084,Q,3592,3095,3607,3107,3625,3122,3642,3137,L,3643,3137,3648,3137,Q,3669,3117,3677,3112,3685,3106,3721,3093,3725,3090,3733,3086,3738,3083,3747,3080,3759,3074,3769,3073,3775,3071,3791,3069,3803,3065,3803,3054,3803,3050,3797,3046,3792,3042,3791,3034,3788,3012,3788,3005,3788,2990,3805,2980,3809,2978,3828,2954,3837,2943,3845,2940,3854,2937,3882,2935,3888,2934,3894,2927,3901,2920,3903,2920,3926,2920,3929,2920,3935,2918,3951,2905,3956,2901,3960,2899,3958,2897,3937,2879,3922,2867,3916,2849,3895,2790,3891,2782,3877,2750,3860,2728,3856,2722,3845,2721,3832,2720,3828,2717,3820,2712,3804,2697,3787,2682,3777,2674,Q,3771,2669,3769,2659,Z]],label:"Chhuzagang Gewog",shortLabel:"CZ",labelPosition:[371.5,282.3],labelAlignment:[CEN,MID],nextId:"BT.GE.CD"},"BT.GE.CD":{outlines:[[M,2290,602,Q,2282,602,2203,641,2125,680,2115,687,2095,701,2077,721,2057,743,2050,763,2041,784,2040,786,2035,797,2026,804,2019,809,2019,855,L,1972,855,Q,1950,854,1938,853,1917,852,1911,857,1909,859,1907,869,1904,880,1902,884,1893,895,1889,906,1882,924,1873,936,1869,941,1869,956,1869,969,1877,984,1888,1e3,1893,1022,1893,1025,1894,1027,1898,1062,1888,1096,1871,1130,1858,1146,1843,1163,1835,1174,1827,1186,1818,1192,1809,1197,1809,1217,1809,1228,1810,1248,1810,1250,1811,1319,1811,1368,1799,1386,1796,1390,1795,1398,1794,1406,1791,1410,1786,1418,1784,1420,1779,1425,1770,1426,1745,1425,1737,1426,1727,1427,1718,1434,1718,1435,1717,1435,1716,1436,1714,1437,1705,1445,1688,1464,1662,1492,1662,1504,1662,1506,1681,1544,1701,1582,1701,1607,1701,1617,1698,1661,1694,1701,1696,1721,1697,1743,1690,1771,1688,1782,1684,1799,L,1690,1799,Q,1693,1801,1702,1803,1706,1803,1715,1798,1724,1793,1734,1792,1748,1790,1756,1785,1763,1780,1771,1780,1777,1780,1787,1787,1798,1795,1807,1797,1812,1797,1824,1803,1837,1810,1843,1815,1845,1817,1864,1844,1877,1861,1887,1862,L,1888,1862,Q,1914,1861,1939,1838,1945,1832,1952,1831,1956,1831,1962,1832,1963,1832,1969,1825,1975,1819,1977,1819,1980,1819,1984,1827,1989,1836,2003,1843,2006,1844,2013,1852,2020,1859,2023,1859,2030,1859,2043,1847,2057,1835,2067,1835,L,2109,1838,Q,2111,1838,2122,1849,2127,1853,2137,1856,2145,1858,2149,1866,2155,1878,2158,1881,L,2168,1897,Q,2173,1901,2182,1905,2194,1914,2205,1929,2218,1944,2226,1951,2233,1957,2252,1961,2266,1965,2272,1976,2275,1984,2281,1984,L,2288,1984,2288,1984,2294,1922,Q,2295,1913,2316,1903,2333,1895,2341,1895,2359,1893,2397,1875,2450,1850,2456,1848,2460,1846,2469,1846,2478,1846,2483,1844,2505,1835,2509,1835,2526,1835,2544,1835,2557,1833,2574,1822,2601,1805,2628,1781,2649,1767,2673,1767,2706,1767,2722,1784,2749,1812,2764,1820,2769,1823,2777,1822,2784,1822,2788,1827,2790,1831,2790,1839,2790,1848,2792,1850,2793,1853,2801,1875,2805,1890,2811,1900,2831,1933,2873,1995,2875,2e3,2875,2016,2876,2032,2891,2039,L,2892,2039,Q,2899,2043,2914,2046,2922,2048,2938,2052,L,3022,2052,Q,3039,2069,3045,2073,3046,2075,3056,2076,3066,2079,3065,2088,3063,2103,3074,2115,3075,2116,3081,2125,3086,2131,3089,2133,3090,2133,3092,2133,3095,2133,3116,2110,3139,2084,3144,2080,3152,2075,3170,2056,3171,2054,3177,2054,3182,2054,3185,2054,3189,2054,3194,2052,3198,2050,3203,2046,3206,2045,3220,2039,3233,2032,3235,2026,3234,2016,3235,2012,3235,2003,3248,1999,L,3280,1976,Q,3284,1975,3293,1969,3303,1965,3311,1963,3279,1926,3262,1895,3256,1884,3228,1886,3194,1889,3182,1885,3173,1881,3165,1873,3156,1863,3149,1858,3143,1855,3140,1847,3137,1841,3136,1837,3135,1834,3135,1832,3131,1809,3130,1800,3128,1785,3129,1766,L,3114,1766,Q,3100,1771,3094,1779,3090,1784,3077,1784,3050,1784,3039,1781,3026,1778,3009,1763,3003,1758,2982,1731,2967,1711,2952,1710,2930,1708,2901,1661,2874,1616,2874,1596,2874,1592,2882,1580,2885,1573,2890,1565,2892,1534,2897,1520,2907,1488,2911,1466,2916,1399,2943,1367,2969,1346,2969,1336,2966,1320,2965,1312,2965,1309,2965,1307,2959,1176,2955,1126,2954,1118,2950,1105,2945,1092,2944,1083,2941,1063,2940,1058,2939,1052,2933,1037,2928,1017,2922,998,2909,960,2894,960,2889,960,2882,975,2874,991,2865,995,2856,998,2858,1014,2859,1029,2849,1029,2841,1029,2833,1018,2824,1005,2822,1004,2809,999,2799,992,2793,988,2782,988,L,2782,988,Q,2773,987,2760,986,2736,986,2720,997,2711,1003,2694,1005,2672,1005,2656,1005,2642,1006,2632,1015,2623,1024,2611,1023,2592,1022,2585,1027,2578,1033,2564,1033,L,2544,1033,Q,2536,1033,2525,1027,2518,1024,2512,1012,2507,1001,2505,999,2471,960,2467,941,2466,935,2444,873,2424,816,2424,806,2424,799,2425,792,2425,790,2425,788,2424,771,2416,758,2413,753,2414,748,2415,743,2413,741,2409,731,2390,715,2371,698,2371,690,2371,681,2371,659,L,2367,646,Q,2365,646,2362,646,2347,639,2344,637,2343,636,2340,625,2338,615,2336,614,2332,611,2324,610,2316,610,2313,608,2311,606,2301,604,Q,2292,602,2290,602,Z]],label:"Chhudzom Gewog",shortLabel:"CD",labelPosition:[226.2,136.7],labelAlignment:[CEN,MID],nextId:"BT.GE.DK"},"BT.GE.DK":{outlines:[[M,2544,1835,Q,2526,1835,2509,1835,2505,1835,2483,1844,2478,1846,2469,1846,2460,1846,2456,1848,2450,1850,2397,1875,2359,1893,2341,1895,2333,1895,2316,1903,2295,1913,2294,1922,L,2288,1984,Q,2291,2004,2291,2039,2291,2049,2296,2072,2302,2095,2302,2104,2302,2123,2297,2133,2294,2139,2280,2166,2277,2173,2277,2193,2275,2213,2258,2222,2231,2236,2218,2269,2206,2297,2207,2327,2207,2328,2207,2330,L,2206,2401,Q,2206,2444,2213,2454,2220,2465,2220,2499,2220,2539,2201,2547,2186,2552,2123,2577,2116,2581,2096,2595,2096,2616,2092,2637,2092,2644,2094,2659,2097,2672,2097,2684,2097,2698,2103,2705,2107,2710,2120,2724,2124,2731,2129,2748,2134,2762,2138,2765,2179,2787,2186,2795,2188,2799,2196,2812,2205,2826,2209,2832,2233,2861,2248,2875,2257,2883,2290,2906,2296,2912,2310,2929,2319,2940,2331,2945,2345,2937,2381,2922,2413,2907,2422,2890,2437,2860,2475,2765,2482,2747,2484,2739,2488,2725,2500,2712,2502,2710,2507,2688,2511,2666,2515,2661,2524,2652,2565,2646,2600,2640,2636,2640,2681,2640,2781,2637,2882,2633,2913,2633,2938,2633,2958,2636,2955,2629,2937,2594,2924,2569,2911,2556,2897,2544,2881,2524,2862,2501,2859,2489,2856,2480,2849,2471,2839,2461,2835,2456,2822,2442,2806,2417,2792,2396,2789,2374,2788,2364,2788,2334,2789,2314,2790,2308,2793,2293,2793,2284,2793,2281,2793,2279,2793,2257,2793,2247,2794,2229,2803,2210,2806,2204,2807,2190,2807,2176,2808,2173,2816,2159,2816,2156,2816,2146,2818,2142,2821,2131,2833,2112,2843,2095,2847,2084,2850,2072,2871,2058,2890,2046,2891,2039,2876,2032,2875,2016,2875,2e3,2873,1995,2831,1933,2811,1900,2805,1890,2801,1875,2793,1853,2792,1850,2790,1848,2790,1839,2790,1831,2788,1827,2784,1822,2777,1822,2769,1823,2764,1820,2749,1812,2722,1784,2706,1767,2673,1767,2649,1767,2628,1781,2601,1805,2574,1822,Q,2557,1833,2544,1835,Z]],label:"Dekiling Gewog",shortLabel:"DK",labelPosition:[252.5,235.6],labelAlignment:[CEN,MID],nextId:"BT.GE.GL"},"BT.GE.GL":{outlines:[[M,2137,1856,Q,2127,1853,2122,1849,2111,1838,2109,1838,L,2067,1835,Q,2057,1835,2043,1847,2030,1859,2023,1859,2020,1859,2013,1852,2006,1844,2003,1843,1989,1836,1984,1827,1980,1819,1977,1819,1975,1819,1969,1825,1963,1832,1962,1832,1956,1831,1952,1831,1945,1832,1939,1838,1914,1861,1888,1862,L,1887,1862,Q,1877,1861,1864,1844,1845,1817,1843,1815,1837,1810,1824,1803,1812,1797,1807,1797,1798,1795,1787,1787,1777,1780,1771,1780,1763,1780,1756,1785,1748,1790,1734,1792,1724,1793,1715,1798,1706,1803,1702,1803,1693,1801,1690,1799,L,1684,1799,Q,1681,1810,1678,1822,1677,1823,1677,1825,1639,1883,1612,1914,1597,1929,1596,1935,1593,1944,1578,1944,L,1520,1944,Q,1519,1946,1516,1974,1513,1994,1502,2002,1502,2005,1503,2016,1503,2028,1501,2032,1498,2035,1488,2043,1479,2049,1476,2054,1473,2059,1454,2077,1433,2097,1427,2103,1414,2118,1401,2137,1391,2150,1386,2155,1384,2157,1384,2158,L,1375,2172,Q,1373,2176,1368,2178,1364,2181,1364,2187,L,1360,2206,Q,1359,2210,1359,2229,1359,2242,1359,2250,1359,2251,1369,2269,1371,2272,1376,2275,1381,2277,1382,2282,1384,2289,1384,2305,1384,2311,1381,2313,1381,2315,1375,2319,1372,2335,1366,2341,1362,2346,1356,2356,1352,2362,1346,2364,1356,2377,1381,2401,1403,2424,1403,2445,L,1403,2541,Q,1402,2544,1402,2547,1401,2554,1401,2563,1401,2579,1407,2586,1413,2595,1416,2613,1418,2622,1429,2635,1430,2635,1451,2656,1458,2664,1507,2698,1528,2713,1528,2746,1528,2766,1519,2783,1509,2801,1509,2802,1509,2830,1526,2844,1568,2876,1582,2893,1588,2900,1601,2915,1611,2928,1619,2935,1626,2942,1639,2950,1649,2959,1655,2974,1676,2970,1696,2970,1739,2970,1806,2995,1824,2982,1838,2948,1856,2907,1860,2903,1865,2895,1867,2876,1869,2853,1871,2850,1876,2831,1879,2822,1884,2804,1889,2796,1907,2765,1908,2749,1909,2734,1917,2724,1918,2724,1932,2712,1936,2707,1950,2705,1958,2705,1964,2705,1976,2702,1983,2696,1988,2690,1992,2688,2007,2679,2012,2673,2020,2666,2017,2653,2026,2632,2032,2623,2040,2609,2054,2610,2071,2612,2093,2597,2094,2597,2096,2595,2116,2581,2123,2577,2186,2552,2201,2547,2220,2539,2220,2499,2220,2465,2213,2454,2206,2444,2206,2401,L,2207,2330,Q,2207,2328,2207,2327,2206,2297,2218,2269,2231,2236,2258,2222,2275,2213,2277,2193,2277,2173,2280,2166,2294,2139,2297,2133,2302,2123,2302,2104,2302,2095,2296,2072,2291,2049,2291,2039,2291,2004,2288,1984,L,2288,1984,2281,1984,Q,2275,1984,2272,1976,2266,1965,2252,1961,2233,1957,2226,1951,2218,1944,2205,1929,2194,1914,2182,1905,2173,1901,2168,1897,L,2158,1881,Q,2155,1878,2149,1866,Q,2145,1858,2137,1856,Z]],label:"Gakiling Gewog",shortLabel:"GL",labelPosition:[182.4,227.9],labelAlignment:[CEN,MID],nextId:"BT.GE.GG"},"BT.GE.GG":{outlines:[[M,3543,2179,Q,3522,2165,3514,2164,3500,2162,3481,2155,3459,2148,3450,2140,3439,2132,3436,2110,3433,2084,3424,2075,3416,2067,3396,2048,3372,2028,3366,2022,3334,1990,3311,1963,3303,1965,3293,1969,3284,1975,3280,1976,L,3248,1999,Q,3235,2003,3235,2012,3234,2016,3235,2026,3233,2032,3220,2039,3206,2045,3203,2046,3198,2050,3194,2052,3189,2054,3185,2054,3182,2054,3177,2054,3171,2054,3170,2056,3152,2075,3144,2080,3139,2084,3116,2110,3095,2133,3092,2133,3090,2133,3089,2133,3087,2154,3099,2169,3105,2178,3105,2210,L,3105,2295,Q,3116,2295,3136,2301,L,3153,2301,Q,3156,2301,3167,2307,3175,2310,3184,2313,3191,2315,3205,2314,3220,2314,3224,2315,3228,2317,3235,2327,3238,2331,3260,2358,3260,2360,3272,2369,3284,2379,3286,2382,3288,2385,3309,2401,3324,2413,3324,2426,L,3324,2531,Q,3324,2539,3330,2553,3337,2569,3337,2574,3339,2592,3337,2630,L,3337,2684,Q,3326,2706,3326,2707,3326,2710,3326,2730,3326,2755,3331,2761,3338,2770,3344,2815,3345,2829,3345,2853,3344,2894,3344,2897,3367,2916,3419,2961,3471,3006,3524,3041,3545,3054,3580,3084,L,3580,2973,Q,3579,2957,3579,2948,3579,2931,3583,2924,3596,2891,3595,2876,3593,2852,3597,2809,3600,2763,3599,2742,3599,2731,3607,2714,3618,2695,3619,2690,3621,2680,3621,2663,3620,2650,3620,2641,3622,2639,3622,2637,3627,2626,3628,2617,3629,2614,3631,2590,3633,2581,3633,2554,L,3633,2482,Q,3632,2474,3626,2463,3620,2449,3618,2446,3616,2439,3605,2424,3597,2414,3598,2401,3598,2395,3596,2385,3594,2374,3594,2369,3594,2330,3589,2282,3589,2281,3580,2199,Q,3565,2193,3543,2179,Z]],label:"Gelephu Gewog",shortLabel:"GG",labelPosition:[343.3,234.3],labelAlignment:[CEN,MID],nextId:"BT.GE.JM"},"BT.GE.JM":{outlines:[[M,3653,665,Q,3635,654,3599,635,3561,616,3557,616,3535,616,3524,640,3513,664,3502,665,L,3488,665,Q,3481,671,3477,678,3477,680,3471,680,L,3444,678,Q,3447,667,3434,646,3421,625,3410,623,3403,622,3390,622,3375,623,3370,622,3365,622,3356,617,3345,612,3340,610,3316,604,3303,572,3302,571,3295,542,3292,528,3279,523,3270,519,3245,516,3222,512,3212,506,3175,490,3161,480,3142,465,3124,433,3105,400,3107,382,3105,377,3097,363,3094,358,3082,348,3076,343,3065,341,3055,339,3050,331,3026,298,3020,290,3003,268,2990,261,2979,255,2946,257,2914,259,2901,250,2894,246,2871,219,2855,201,2835,199,2816,197,2801,184,2788,173,2772,148,L,2768,131,Q,2766,120,2752,118,2722,111,2710,106,2708,105,2671,94,2641,86,2627,76,2593,50,2590,49,2570,37,2549,37,2486,31,2466,39,2445,46,2428,61,2409,81,2394,92,2343,131,2322,148,2288,177,2267,202,2265,203,2264,204,2262,212,2256,223,2249,234,2249,241,2249,248,2259,280,2269,314,2271,321,2273,337,2290,359,2307,380,2324,393,2327,395,2343,403,2358,412,2358,419,2358,454,2360,460,2364,467,2375,478,2389,492,2390,494,2394,499,2394,535,2394,559,2387,584,2387,595,2386,597,2384,606,2376,614,2373,616,2373,633,2373,643,2367,646,L,2371,659,Q,2371,681,2371,690,2371,698,2390,715,2409,731,2413,741,2415,743,2414,748,2413,753,2416,758,2424,771,2425,788,2425,790,2425,792,2424,799,2424,806,2424,816,2444,873,2466,935,2467,941,2471,960,2505,999,2507,1001,2512,1012,2518,1024,2525,1027,2536,1033,2544,1033,L,2564,1033,Q,2578,1033,2585,1027,2592,1022,2611,1023,2623,1024,2632,1015,2642,1006,2656,1005,2672,1005,2694,1005,2711,1003,2720,997,2736,986,2760,986,2773,987,2782,988,L,2782,988,Q,2793,988,2799,992,2809,999,2822,1004,2824,1005,2833,1018,2841,1029,2849,1029,2859,1029,2858,1014,2856,998,2865,995,2874,991,2882,975,2889,960,2894,960,2909,960,2922,998,2928,1017,2933,1037,2939,1052,2940,1058,2941,1063,2944,1083,2945,1092,2950,1105,2954,1118,2955,1126,2959,1176,2965,1307,2965,1309,2965,1312,2966,1320,2969,1336,2969,1346,2943,1367,2916,1399,2911,1466,2907,1488,2897,1520,2892,1534,2890,1565,2885,1573,2882,1580,2874,1592,2874,1596,2874,1616,2901,1661,2930,1708,2952,1710,2967,1711,2982,1731,3003,1758,3009,1763,3026,1778,3039,1781,3050,1784,3077,1784,3090,1784,3094,1779,3100,1771,3114,1766,L,3129,1766,Q,3128,1785,3130,1800,3131,1809,3135,1832,3135,1834,3136,1837,3137,1841,3140,1847,3143,1855,3149,1858,3156,1863,3165,1873,3173,1881,3182,1885,3194,1889,3228,1886,3256,1884,3262,1895,3279,1926,3311,1963,3334,1990,3366,2022,3372,2028,3396,2048,3416,2067,3424,2075,3433,2084,3436,2110,3439,2132,3450,2140,3459,2148,3481,2155,3500,2162,3514,2164,3522,2165,3543,2179,3565,2193,3580,2199,3581,2199,3582,2199,L,3590,2199,Q,3597,2203,3608,2218,3616,2228,3626,2230,3643,2233,3651,2237,3656,2240,3669,2240,3686,2240,3696,2231,3702,2225,3718,2206,3721,2203,3747,2188,3773,2172,3776,2172,L,3809,2193,Q,3841,2214,3856,2214,3863,2214,3914,2187,3964,2161,3984,2146,4005,2130,4028,2103,4030,2101,4043,2091,4054,2082,4058,2076,4060,2071,4063,2061,4067,2054,4080,2054,4082,2054,4099,2061,4119,2069,4129,2077,4144,2088,4150,2100,4152,2105,4169,2105,4182,2105,4191,2103,L,4203,2098,Q,4211,2094,4216,2094,L,4299,2092,Q,4305,2094,4316,2101,4321,2105,4333,2103,4343,2102,4363,2106,4371,2106,4390,2097,4404,2090,4411,2086,4421,2078,4437,2078,4447,2078,4473,2078,4482,2078,4507,2080,4524,2082,4533,2079,4533,2078,4533,2078,4546,2073,4556,2061,4562,2053,4573,2039,4588,2024,4611,2003,4654,1965,4655,1964,4684,1937,4707,1931,4717,1928,4758,1928,4797,1928,4802,1929,4818,1934,4824,1956,4826,1965,4833,1977,4840,1989,4845,1994,4848,1997,4859,1997,4873,1996,4879,1997,4881,1984,4880,1973,4877,1957,4884,1946,4885,1943,4897,1926,4907,1908,4929,1880,4931,1878,4937,1872,4942,1867,4943,1862,L,4943,1839,Q,4941,1827,4934,1812,4932,1807,4923,1798,4916,1789,4915,1787,L,4915,1589,Q,4904,1580,4886,1570,4862,1558,4856,1554,L,4826,1531,Q,4815,1524,4811,1520,4803,1512,4807,1501,L,4805,1389,Q,4805,1381,4811,1375,4816,1369,4818,1358,4829,1333,4829,1327,4817,1307,4816,1297,4816,1288,4809,1279,4801,1269,4798,1264,4771,1227,4760,1210,4756,1209,4748,1209,4741,1209,4736,1208,4726,1207,4724,1207,4720,1205,4718,1203,L,4716,1200,Q,4709,1196,4703,1195,4696,1196,4690,1196,4685,1195,4677,1191,4669,1188,4667,1186,4657,1177,4626,1159,4611,1149,4603,1145,4599,1143,4594,1135,4591,1129,4584,1129,4582,1129,4577,1135,4571,1141,4565,1141,4541,1141,4539,1145,4538,1146,4535,1151,4533,1154,4529,1154,4520,1152,4514,1154,4501,1156,4485,1173,4469,1189,4463,1193,4453,1197,4447,1200,4437,1205,4435,1209,4432,1218,4431,1221,4429,1226,4424,1226,4420,1226,4419,1228,4414,1236,4412,1237,4407,1241,4405,1241,4401,1239,4395,1239,4395,1241,4390,1241,4383,1241,4374,1237,4363,1226,4358,1226,4350,1226,4340,1220,4329,1214,4324,1211,4320,1208,4311,1205,4302,1202,4298,1200,4294,1198,4286,1189,4280,1182,4272,1182,4263,1182,4255,1194,4249,1203,4248,1211,L,4243,1211,Q,4221,1212,4222,1193,4220,1167,4220,1160,4221,1142,4211,1137,4203,1133,4180,1133,4165,1131,4162,1135,4154,1142,4145,1143,4132,1151,4129,1152,L,4109,1153,4094,1152,Q,4087,1152,4084,1149,4083,1146,4082,1145,4073,1133,4073,1110,4073,1098,4067,1092,4058,1087,4052,1082,4049,1080,4029,1060,L,4027,1060,Q,4018,1057,4002,1045,3992,1037,3990,1036,3982,1031,3969,1033,3956,1034,3932,1033,3899,1032,3892,1032,L,3892,1021,Q,3894,984,3894,967,3894,931,3892,897,3877,897,3865,890,3858,886,3842,871,3824,853,3817,852,3807,851,3801,848,3794,843,3787,840,3759,824,3758,789,3762,750,3758,736,L,3727,733,Q,3713,733,3686,702,Q,3654,665,3653,665,Z]],label:"Jigmechhoeling Gewog",shortLabel:"JM",labelPosition:[359.6,152.9],labelAlignment:[CEN,MID],nextId:"BT.GE.ST"},"BT.GE.ST":{outlines:[[M,3205,2314,Q,3191,2315,3184,2313,3175,2310,3167,2307,3156,2301,3153,2301,L,3136,2301,Q,3116,2295,3105,2295,L,3105,2210,Q,3105,2178,3099,2169,3087,2154,3089,2133,3086,2131,3081,2125,3075,2116,3074,2115,3063,2103,3065,2088,3066,2079,3056,2076,3046,2075,3045,2073,3039,2069,3022,2052,L,2938,2052,Q,2922,2048,2914,2046,2899,2043,2892,2039,L,2891,2039,Q,2890,2046,2871,2058,2850,2072,2847,2084,2843,2095,2833,2112,2821,2131,2818,2142,2816,2146,2816,2156,2816,2159,2808,2173,2807,2176,2807,2190,2806,2204,2803,2210,2794,2229,2793,2247,2793,2257,2793,2279,2793,2281,2793,2284,2793,2293,2790,2308,2789,2314,2788,2334,2788,2364,2789,2374,2792,2396,2806,2417,2822,2442,2835,2456,2839,2461,2849,2471,2856,2480,2859,2489,2862,2501,2881,2524,2897,2544,2911,2556,2924,2569,2937,2594,2955,2629,2958,2636,2994,2642,3016,2660,3097,2725,3105,2729,3143,2752,3227,2812,3290,2856,3331,2887,3336,2890,3344,2897,3344,2894,3345,2853,3345,2829,3344,2815,3338,2770,3331,2761,3326,2755,3326,2730,3326,2710,3326,2707,3326,2706,3337,2684,L,3337,2630,Q,3339,2592,3337,2574,3337,2569,3330,2553,3324,2539,3324,2531,L,3324,2426,Q,3324,2413,3309,2401,3288,2385,3286,2382,3284,2379,3272,2369,3260,2360,3260,2358,3238,2331,3235,2327,3228,2317,3224,2315,Q,3220,2314,3205,2314,Z]],label:"Samtenling Gewog",shortLabel:"ST",labelPosition:[310.2,246.8],labelAlignment:[CEN,MID],nextId:"BT.GE.SG"},"BT.GE.SG":{outlines:[[M,1162,2473,Q,1161,2478,1160,2487,L,1160,2526,Q,1160,2539,1157,2541,L,1149,2543,Q,1144,2544,1140,2546,1128,2554,1125,2555,1118,2555,1116,2556,1112,2556,1108,2559,1103,2561,1094,2569,1088,2574,1079,2583,1049,2606,1026,2640,1017,2653,1007,2674,998,2686,995,2688,990,2692,986,2695,984,2697,984,2703,984,2711,997,2728,1e3,2732,1e3,2739,1e3,2743,999,2755,L,1001,2766,Q,1002,2779,995,2785,992,2788,979,2793,975,2794,973,2797,971,2799,969,2801,960,2811,948,2832,946,2835,932,2848,928,2852,928,2867,928,2879,930,2884,932,2888,940,2902,945,2912,945,2939,947,2959,954,2977,958,2988,958,3020,958,3022,958,3051,958,3059,951,3061,939,3064,938,3065,915,3077,879,3073,865,3071,856,3080,850,3085,839,3104,828,3120,818,3125,809,3128,788,3128,L,770,3127,Q,765,3127,759,3122,L,753,3118,Q,727,3112,722,3110,703,3097,694,3096,666,3084,663,3084,658,3084,656,3087,654,3092,647,3096,L,630,3105,Q,628,3106,607,3120,598,3125,592,3127,590,3127,588,3127,581,3129,572,3133,566,3137,552,3147,536,3158,535,3159,L,535,3250,Q,535,3263,530,3270,520,3284,520,3285,519,3287,513,3301,509,3312,505,3317,498,3325,490,3328,478,3333,475,3335,473,3336,469,3342,466,3346,460,3345,435,3343,433,3345,L,405,3345,Q,396,3344,389,3340,383,3336,381,3335,369,3325,362,3320,354,3312,340,3308,329,3303,319,3293,308,3282,302,3278,281,3272,277,3271,263,3262,258,3261,L,248,3261,248,3314,Q,250,3318,262,3333,269,3340,272,3349,277,3356,291,3374,294,3378,294,3387,294,3392,294,3401,L,294,3471,Q,294,3482,304,3501,318,3526,320,3532,323,3542,323,3561,323,3571,322,3597,322,3614,320,3716,320,3718,320,3720,L,320,3767,Q,314,3777,305,3780,300,3780,283,3780,282,3780,281,3780,L,281,3780,Q,270,3780,264,3780,252,3780,248,3776,245,3772,231,3763,220,3755,216,3750,L,207,3738,Q,196,3729,194,3723,190,3713,182,3711,179,3710,158,3710,134,3710,132,3712,129,3713,126,3731,125,3735,124,3755,124,3771,120,3778,114,3787,113,3797,113,3803,113,3821,112,3833,113,3850,113,3863,101,3869,95,3871,90,3878,88,3881,83,3886,81,3888,75,3893,71,3896,71,3903,70,3909,68,3925,66,3940,60,3950,58,3954,57,3963,56,3974,54,3977,53,3980,47,3987,43,3994,43,3999,41,4009,41,4042,41,4052,44,4056,95,4059,217,4059,315,4059,358,4051,399,4044,454,4017,508,3991,553,3978,598,3965,630,3955,698,3933,754,3912,852,3884,955,3846,1014,3824,1130,3779,1231,3744,1298,3708,1313,3700,1314,3660,1313,3617,1313,3608,1313,3601,1315,3566,1318,3538,1316,3522,1305,3435,1329,3349,1352,3266,1409,3174,1439,3122,1457,3096,1488,3050,1520,3031,1574,3001,1601,2990,1628,2979,1655,2974,1649,2959,1639,2950,1626,2942,1619,2935,1611,2928,1601,2915,1588,2900,1582,2893,1568,2876,1526,2844,1509,2830,1509,2802,1509,2801,1519,2783,1528,2766,1528,2746,1528,2713,1507,2698,1458,2664,1451,2656,1430,2635,1429,2635,1418,2622,1416,2613,1413,2595,1407,2586,1401,2579,1401,2563,1401,2554,1402,2547,1402,2544,1403,2541,L,1403,2445,Q,1403,2424,1381,2401,1356,2377,1346,2364,1343,2365,1341,2365,L,1298,2365,Q,1292,2365,1283,2373,1271,2384,1267,2386,1247,2397,1199,2429,1196,2431,1183,2439,1171,2446,1169,2451,Q,1164,2463,1162,2473,Z]],label:"Senghe Gewog",shortLabel:"SG",labelPosition:[77.6,349.9],labelAlignment:[CEN,MID],nextId:"BT.GE.SS"},"BT.GE.SS":{outlines:[[M,4299,2092,L,4216,2094,Q,4211,2094,4203,2098,L,4191,2103,Q,4182,2105,4169,2105,4152,2105,4150,2100,4144,2088,4129,2077,4119,2069,4099,2061,4082,2054,4080,2054,4067,2054,4063,2061,4060,2071,4058,2076,4054,2082,4043,2091,4030,2101,4028,2103,4005,2130,3984,2146,3964,2161,3914,2187,3863,2214,3856,2214,3841,2214,3809,2193,L,3776,2172,Q,3773,2172,3747,2188,3721,2203,3718,2206,3702,2225,3696,2231,3686,2240,3669,2240,3656,2240,3651,2237,3643,2233,3626,2230,3616,2228,3608,2218,3597,2203,3590,2199,L,3582,2199,Q,3581,2199,3580,2199,3589,2281,3589,2282,3594,2330,3594,2369,3594,2374,3596,2385,3598,2395,3598,2401,3597,2414,3605,2424,3616,2439,3618,2446,3620,2449,3626,2463,3632,2474,3633,2482,L,3633,2510,Q,3637,2510,3645,2510,3653,2509,3658,2512,3664,2514,3676,2521,3687,2527,3692,2529,3706,2531,3714,2539,3722,2548,3727,2567,3737,2599,3765,2646,3765,2647,3769,2659,3771,2669,3777,2674,3787,2682,3804,2697,3820,2712,3828,2717,3832,2720,3845,2721,3856,2722,3860,2728,3877,2750,3891,2782,3895,2790,3916,2849,3922,2867,3937,2879,3958,2897,3960,2899,3964,2897,3967,2897,3969,2897,3970,2897,3982,2895,3992,2883,3997,2875,4014,2862,4019,2858,4020,2848,4022,2835,4023,2835,4026,2827,4037,2810,4041,2803,4042,2783,4044,2766,4053,2756,4066,2742,4073,2737,L,4099,2722,Q,4102,2720,4122,2712,4137,2705,4142,2695,4146,2684,4149,2678,4153,2670,4160,2664,4163,2662,4169,2654,4176,2646,4183,2641,4193,2632,4225,2591,4228,2586,4238,2580,4246,2573,4248,2569,4250,2565,4250,2554,4252,2546,4254,2544,4286,2506,4286,2482,4286,2464,4283,2459,4274,2449,4263,2437,4251,2427,4247,2420,4243,2413,4235,2409,4231,2407,4231,2400,4231,2378,4239,2362,4247,2346,4271,2319,4273,2316,4273,2303,4272,2295,4279,2284,4286,2273,4287,2264,4288,2261,4288,2249,4289,2246,4290,2244,4292,2237,4297,2229,4303,2218,4307,2212,4308,2211,4319,2193,4322,2187,4333,2187,4341,2187,4343,2191,4349,2201,4358,2210,4363,2214,4369,2216,4373,2218,4376,2223,4381,2231,4392,2231,4401,2231,4406,2224,4409,2222,4414,2214,4418,2210,4439,2201,4458,2189,4464,2182,4467,2179,4467,2172,4467,2165,4469,2162,4483,2139,4508,2120,4511,2118,4516,2110,4522,2103,4526,2100,4532,2095,4532,2090,4532,2083,4533,2079,4524,2082,4507,2080,4482,2078,4473,2078,4447,2078,4437,2078,4421,2078,4411,2086,4404,2090,4390,2097,4371,2106,4363,2106,4343,2102,4333,2103,4321,2105,4316,2101,Q,4305,2094,4299,2092,Z]],label:"Serzhong Gewog",shortLabel:"SS",labelPosition:[391.2,244],labelAlignment:[CEN,MID],nextId:"BT.GE.SM"},"BT.GE.SM":{outlines:[[M,2093,2597,Q,2071,2612,2054,2610,2040,2609,2032,2623,2026,2632,2017,2653,2020,2666,2012,2673,2007,2679,1992,2688,1988,2690,1983,2696,1976,2702,1964,2705,1958,2705,1950,2705,1936,2707,1932,2712,1918,2724,1917,2724,1909,2734,1908,2749,1907,2765,1889,2796,1884,2804,1879,2822,1876,2831,1871,2850,1869,2853,1867,2876,1865,2895,1860,2903,1856,2907,1838,2948,1824,2982,1806,2995,1809,2996,1813,2997,1880,3023,1906,3028,1911,3029,1915,3029,1934,3035,1991,3054,2061,3078,2105,3078,2166,3078,2227,3031,2292,2971,2325,2948,2327,2947,2331,2945,2319,2940,2310,2929,2296,2912,2290,2906,2257,2883,2248,2875,2233,2861,2209,2832,2205,2826,2196,2812,2188,2799,2186,2795,2179,2787,2138,2765,2134,2762,2129,2748,2124,2731,2120,2724,2107,2710,2103,2705,2097,2698,2097,2684,2097,2672,2094,2659,2092,2644,2092,2637,2096,2616,2096,2595,Q,2094,2597,2093,2597,Z]],label:"Shompangkha Gewog",shortLabel:"SM",labelPosition:[203.2,287.2],labelAlignment:[CEN,MID],nextId:"BT.GE.TY"},"BT.GE.TY":{outlines:[[M,5458,3260,L,5454,3260,5445,3261,Q,5439,3278,5426,3282,5412,3286,5407,3290,5403,3293,5397,3297,5387,3305,5373,3308,5369,3309,5363,3314,5357,3320,5352,3320,L,5326,3320,Q,5323,3320,5316,3325,5309,3330,5307,3330,L,5277,3330,Q,5268,3329,5265,3329,5259,3329,5254,3332,L,5241,3341,Q,5231,3342,5225,3342,5220,3342,5203,3345,5199,3346,5195,3352,5191,3357,5183,3356,5169,3354,5157,3357,5154,3358,5148,3364,5141,3371,5137,3372,5120,3371,5111,3372,5108,3372,5101,3376,5095,3380,5092,3380,5085,3380,5071,3367,5059,3356,5056,3350,5053,3344,5039,3330,5036,3327,5035,3320,5033,3311,5032,3308,5026,3300,5024,3297,5022,3291,5023,3283,5024,3276,5021,3272,5016,3267,5013,3263,5011,3260,5011,3252,5011,3245,5009,3243,L,4997,3226,Q,4973,3197,4964,3194,4947,3183,4942,3182,4926,3178,4917,3172,4900,3161,4871,3152,4839,3140,4838,3137,4836,3133,4835,3131,4833,3129,4830,3127,4790,3124,4730,3124,4713,3124,4706,3124,4696,3123,4687,3122,4668,3115,4646,3112,4629,3108,4599,3090,4571,3074,4556,3073,4534,3071,4492,3071,4452,3072,4439,3071,4439,3081,4441,3095,4452,3095,4463,3100,4477,3106,4484,3115,4497,3132,4499,3139,4501,3145,4501,3165,4501,3193,4493,3203,4485,3216,4482,3218,4479,3220,4468,3221,4468,3222,4463,3222,4444,3222,4367,3218,4360,3219,4354,3207,4346,3194,4335,3194,L,4287,3198,Q,4280,3198,4273,3192,4266,3184,4261,3183,4254,3181,4248,3175,4243,3169,4240,3169,4216,3167,4209,3160,4205,3152,4186,3152,4180,3152,4168,3167,4155,3185,4149,3188,4141,3193,4134,3212,4128,3230,4115,3231,4096,3231,4085,3231,4066,3231,4054,3235,4025,3245,4017,3247,4007,3250,3984,3250,3954,3247,3933,3246,3892,3245,3883,3254,3873,3263,3871,3291,3870,3306,3870,3333,3895,3346,3922,3353,3963,3364,4062,3381,4156,3397,4211,3413,4273,3431,4368,3454,4471,3479,4501,3487,4561,3503,4593,3596,4610,3646,4616,3656,4630,3682,4652,3682,4673,3682,4738,3653,4803,3625,4848,3625,4875,3625,4891,3643,4916,3670,4938,3682,4961,3694,4994,3703,5026,3712,5052,3712,5052,3712,5053,3712,5081,3712,5099,3716,5118,3720,5137,3720,5163,3720,5205,3700,5253,3677,5283,3671,5312,3666,5360,3667,5388,3667,5441,3669,5472,3669,5618,3652,5765,3636,5829,3635,5893,3633,5969,3630,6046,3626,6156,3618,6266,3609,6386,3602,6507,3595,6561,3591,6568,3591,6574,3591,6588,3590,6612,3591,6647,3591,6671,3588,6687,3587,6735,3580,6771,3576,6795,3574,6842,3571,6899,3558,6909,3555,6929,3555,6935,3554,6937,3544,6939,3533,6940,3531,6944,3518,6954,3505,6960,3497,6960,3480,L,6959,3464,Q,6959,3462,6958,3460,6952,3448,6936,3431,6918,3413,6916,3400,6916,3391,6907,3381,6897,3368,6895,3362,6891,3354,6882,3344,6875,3336,6869,3333,L,6856,3332,Q,6851,3331,6848,3335,6845,3340,6844,3342,6841,3343,6835,3344,6832,3345,6829,3349,6818,3361,6814,3361,6807,3361,6795,3347,6784,3335,6783,3331,6782,3329,6782,3309,6780,3293,6780,3287,6782,3269,6780,3242,6776,3208,6776,3196,6775,3179,6777,3173,6779,3167,6784,3164,6790,3159,6794,3154,6805,3137,6806,3137,6816,3130,6818,3129,6822,3125,6822,3120,L,6822,3100,6820,3100,Q,6818,3101,6812,3101,6806,3101,6803,3105,6795,3111,6786,3112,6768,3112,6761,3112,6752,3112,6746,3116,6742,3116,6740,3120,6737,3123,6732,3125,L,6715,3129,Q,6701,3133,6694,3139,6690,3143,6678,3143,6661,3142,6656,3143,6652,3144,6627,3153,6610,3159,6601,3165,6597,3168,6593,3176,6590,3180,6580,3180,6575,3180,6570,3173,L,6564,3165,Q,6538,3163,6537,3163,6507,3154,6493,3152,L,6484,3152,Q,6473,3155,6469,3156,6461,3158,6456,3165,6454,3168,6448,3169,6440,3170,6438,3173,6432,3178,6420,3178,6406,3178,6403,3172,6401,3167,6376,3167,6371,3167,6358,3160,6347,3152,6334,3154,6324,3156,6300,3154,6275,3154,6265,3154,6250,3156,6236,3148,6222,3140,6212,3142,6112,3148,6090,3132,6081,3125,6067,3125,L,6048,3124,Q,6031,3119,6026,3117,6021,3115,6015,3115,5994,3110,5991,3110,5982,3110,5961,3131,5956,3135,5951,3141,5945,3148,5944,3148,5933,3152,5929,3154,5904,3163,5893,3169,5875,3180,5878,3201,L,5878,3222,Q,5875,3225,5865,3232,5856,3236,5851,3242,5844,3251,5837,3258,5816,3278,5807,3289,5806,3290,5800,3304,5795,3315,5788,3317,L,5490,3318,5487,3318,5486,3307,Q,5473,3306,5468,3305,5458,3303,5460,3293,Q,5458,3269,5458,3260,Z]],label:"Tareythang Gewog",shortLabel:"TY",labelPosition:[541.5,346.8],labelAlignment:[CEN,MID],nextId:"BT.GE.UM"},"BT.GE.UM":{outlines:[[M,4824,1956,Q,4818,1934,4802,1929,4797,1928,4758,1928,4717,1928,4707,1931,4684,1937,4655,1964,4654,1965,4611,2003,4588,2024,4573,2039,4562,2053,4556,2061,4546,2073,4533,2078,4533,2078,4533,2079,4532,2083,4532,2090,4532,2095,4526,2100,4522,2103,4516,2110,4511,2118,4508,2120,4483,2139,4469,2162,4467,2165,4467,2172,4467,2179,4464,2182,4458,2189,4439,2201,4418,2210,4414,2214,4409,2222,4406,2224,4401,2231,4392,2231,4381,2231,4376,2223,4373,2218,4369,2216,4363,2214,4358,2210,4349,2201,4343,2191,4341,2187,4333,2187,4322,2187,4319,2193,4308,2211,4307,2212,4303,2218,4297,2229,4292,2237,4290,2244,4289,2246,4288,2249,4288,2261,4287,2264,4286,2273,4279,2284,4272,2295,4273,2303,4273,2316,4271,2319,4247,2346,4239,2362,4231,2378,4231,2400,4231,2407,4235,2409,4243,2413,4247,2420,4251,2427,4263,2437,4274,2449,4283,2459,4286,2464,4286,2482,4286,2506,4254,2544,4252,2546,4250,2554,4250,2565,4248,2569,4246,2573,4238,2580,4228,2586,4225,2591,4193,2632,4183,2641,4176,2646,4169,2654,4163,2662,4160,2664,4153,2670,4149,2678,4146,2684,4142,2695,4137,2705,4122,2712,4102,2720,4099,2722,L,4073,2737,Q,4066,2742,4053,2756,4044,2766,4042,2783,4041,2803,4037,2810,4026,2827,4023,2835,4022,2835,4020,2848,4019,2858,4014,2862,3997,2875,3992,2883,3982,2895,3970,2897,3969,2897,3967,2897,3964,2897,3960,2899,3956,2901,3951,2905,3935,2918,3929,2920,3926,2920,3903,2920,3901,2920,3894,2927,3888,2934,3882,2935,3854,2937,3845,2940,3837,2943,3828,2954,3809,2978,3805,2980,3788,2990,3788,3005,3788,3012,3791,3034,3792,3042,3797,3046,3803,3050,3803,3054,3803,3065,3791,3069,3775,3071,3769,3073,3759,3074,3747,3080,3738,3083,3733,3086,3725,3090,3721,3093,3685,3106,3677,3112,3669,3117,3648,3137,L,3643,3137,Q,3675,3164,3702,3184,3705,3186,3708,3189,3728,3208,3800,3280,3833,3313,3870,3333,3870,3306,3871,3291,3873,3263,3883,3254,3892,3245,3933,3246,3954,3247,3984,3250,4007,3250,4017,3247,4025,3245,4054,3235,4066,3231,4085,3231,4096,3231,4115,3231,4128,3230,4134,3212,4141,3193,4149,3188,4155,3185,4168,3167,4180,3152,4186,3152,4205,3152,4209,3160,4216,3167,4240,3169,4243,3169,4248,3175,4254,3181,4261,3183,4266,3184,4273,3192,4280,3198,4287,3198,L,4335,3194,Q,4346,3194,4354,3207,4360,3219,4367,3218,4444,3222,4463,3222,4468,3222,4468,3221,4479,3220,4482,3218,4485,3216,4493,3203,4501,3193,4501,3165,4501,3145,4499,3139,4497,3132,4484,3115,4477,3106,4463,3100,4452,3095,4441,3095,4439,3081,4439,3071,4439,3071,4438,3071,L,4438,3056,Q,4441,3035,4440,2997,4439,2960,4437,2946,4435,2931,4437,2927,4438,2898,4431,2884,4424,2869,4424,2854,4424,2838,4425,2836,4426,2835,4447,2823,4457,2816,4482,2796,4511,2772,4514,2770,4532,2756,4553,2746,4558,2743,4565,2733,4573,2722,4574,2716,4575,2701,4575,2695,4575,2683,4582,2678,4595,2667,4612,2647,4625,2632,4633,2624,4635,2622,4637,2620,4648,2614,4658,2601,4677,2580,4682,2576,4694,2563,4696,2543,4697,2517,4697,2502,4697,2480,4708,2465,4718,2452,4731,2437,4735,2433,4743,2426,4753,2417,4759,2414,4767,2410,4787,2388,4798,2373,4812,2362,4825,2350,4839,2329,4852,2308,4884,2271,4888,2266,4931,2220,4973,2174,4974,2166,4974,2157,4971,2152,4967,2148,4962,2144,L,4950,2138,Q,4941,2127,4939,2126,4915,2105,4913,2102,4895,2080,4890,2071,4881,2057,4880,2052,4873,2049,4873,2046,L,4873,2035,Q,4873,2026,4877,2005,4878,2001,4879,1997,4873,1996,4859,1997,4848,1997,4845,1994,4840,1989,4833,1977,Q,4826,1965,4824,1956,Z]],label:"Umling Gewog",shortLabel:"UM",labelPosition:[445.2,239.6],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"sarpang",type:"maps"}}})});