for num in {1..23}; do
    mkdir $num
done

curl "http://localhost:3000/busroute/{10867,1033,1034,1002,1003,1005,1055,10974,1071,1072,10874,1110,1108,1109,1900,1901,1010,1012,10879,10880,10881,10882,10883,10884,10885,10886,10887,10888,10889,1028,10986,10891,1030,10893,10894,1031,1032,10895,10896,10897,10898,10899,1038,1039,10900,10901,10902,10903,10904,1045,10906,10907,10908,10909,10910,10911,10912,10913,10917,10918,10919,1081,1082,10921,10922,10923,10924,11029,10928,1094,1196,1198,1199,1093,10938,1197,1102,1103,1104,1105,1106,11030,1060,1059,10916}?start=[1-23]" --output "#2/#1route.json"

node getfreq.js