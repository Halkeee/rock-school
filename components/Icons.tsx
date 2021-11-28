import React, { VFC } from "react";

const Icons: VFC<{ icon: string; fill?: string }> = ({
  icon,
  fill = "#000",
}) => {
  switch (icon) {
    case "facebook":
      return (
        <svg
          baseProfile="tiny"
          height="24px"
          width="24px"
          id="Layer_1"
          version="1.2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}
        >
          <g>
            <path d="M13,10h3v3h-3v7h-3v-7H7v-3h3V8.745c0-1.189,0.374-2.691,1.118-3.512C11.862,4.41,12.791,4,13.904,4H16v3h-2.1   C13.402,7,13,7.402,13,7.899V10z" />
          </g>
        </svg>
      );
    case "instagram":
      return (
        <svg
          fill={fill}
          height="24"
          width="24"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.5" y1="6.5" y2="6.5" />
        </svg>
      );
    case "about-us":
      return (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="128.000000pt"
          height="128.000000pt"
          viewBox="0 0 128.000000 128.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
            fill={fill}
            stroke="none"
          >
            <path
              d="M255 1165 c-51 -18 -101 -72 -115 -125 -31 -117 57 -233 176 -233 67
0 102 19 116 64 6 22 27 57 45 79 30 34 34 45 28 73 -16 73 -66 128 -133 147
-48 13 -68 12 -117 -5z"
            />
            <path
              d="M897 1165 c-64 -22 -103 -66 -118 -133 -7 -30 -3 -38 31 -72 22 -22
47 -61 57 -90 16 -45 22 -52 55 -61 96 -25 204 48 223 152 16 84 -47 185 -130
208 -51 14 -71 13 -118 -4z"
            />
            <path
              d="M557 959 c-109 -58 -125 -206 -32 -296 152 -146 388 41 285 225 -48
86 -164 118 -253 71z"
            />
            <path
              d="M161 776 c-53 -19 -111 -74 -137 -130 -21 -45 -24 -66 -24 -172 l0
-122 83 -20 c45 -11 107 -23 138 -27 l57 -7 7 63 c4 35 16 86 27 112 22 52
104 133 144 143 13 3 24 7 24 9 0 2 -13 29 -30 60 -16 31 -30 68 -30 81 0 24
0 24 -112 23 -62 0 -128 -6 -147 -13z"
            />
            <path
              d="M876 752 c-3 -22 -17 -55 -31 -76 -31 -45 -31 -52 -2 -60 34 -8 104
-72 134 -123 20 -34 27 -63 31 -120 l5 -76 66 6 c36 3 96 15 134 27 l67 21 0
122 c0 107 -3 128 -24 173 -27 59 -90 116 -145 132 -21 7 -81 12 -133 12 l-95
0 -7 -38z"
            />
            <path
              d="M507 586 c-65 -18 -117 -62 -150 -126 -26 -52 -27 -60 -25 -179 l3
-125 70 -18 c175 -45 373 -45 505 0 l55 19 3 112 c3 130 -7 174 -51 233 -53
70 -106 90 -245 94 -78 3 -133 -1 -165 -10z"
            />
          </g>
        </svg>
      );
    case "contact-us":
      return (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="50.000000pt"
          height="50.000000pt"
          viewBox="0 0 50.000000 50.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
            fill={fill}
            stroke="none"
          >
            <path
              d="M4 417 c-2 -7 -3 -91 -2 -187 l3 -175 43 -3 c33 -2 42 0 42 12 0 9 9
16 20 16 11 0 20 -7 20 -15 0 -12 20 -15 120 -15 100 0 120 3 120 15 0 8 9 15
20 15 11 0 20 -7 20 -16 0 -12 9 -14 43 -12 l42 3 0 165 0 165 -116 3 c-107 2
-117 4 -122 22 -5 19 -14 20 -126 20 -90 0 -123 -3 -127 -13z m160 -119 c8
-13 7 -26 -2 -50 -12 -31 -11 -34 20 -60 l33 -27 -80 0 -80 0 34 28 c29 24 32
30 22 49 -30 57 19 114 53 60z m276 -28 c0 -6 -37 -10 -90 -10 -53 0 -90 4
-90 10 0 6 37 10 90 10 53 0 90 -4 90 -10z m0 -50 c0 -6 -37 -10 -90 -10 -53
0 -90 4 -90 10 0 6 37 10 90 10 53 0 90 -4 90 -10z m0 -50 c0 -6 -37 -10 -90
-10 -53 0 -90 4 -90 10 0 6 37 10 90 10 53 0 90 -4 90 -10z"
            />
          </g>
        </svg>
      );
    case "music-studio":
      return (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="60.000000pt"
          height="60.000000pt"
          viewBox="0 0 60.000000 60.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,60.000000) scale(0.100000,-0.100000)"
            fill={fill}
            stroke="none"
          >
            <path
              d="M321 520 c-62 -10 -119 -21 -127 -24 -10 -4 -14 -40 -16 -158 l-3
-153 -44 -6 c-68 -9 -92 -58 -50 -100 17 -17 29 -20 63 -16 69 10 76 27 76
188 0 76 1 139 3 139 1 1 51 9 110 19 l108 18 -3 -101 -3 -101 -44 -6 c-68 -9
-92 -58 -50 -100 17 -17 29 -20 63 -16 73 10 77 21 74 241 -3 223 14 204 -157
176z"
            />
          </g>
        </svg>
      );
    case "learn":
      return (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="50.000000pt"
          height="50.000000pt"
          viewBox="0 0 50.000000 50.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
            fill={fill}
            stroke="none"
          >
            <path
              d="M422 448 c-8 -8 -12 -63 -12 -183 0 -143 3 -174 17 -194 l16 -24 19
23 c16 20 18 42 18 194 0 170 -5 196 -35 196 -6 0 -16 -5 -23 -12z m38 -23 c0
-8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z m-2
-326 c-2 -6 -8 -10 -13 -10 -5 0 -11 4 -13 10 -2 6 4 11 13 11 9 0 15 -5 13
-11z"
            />
            <path
              d="M105 399 l-90 -40 1 -65 c1 -36 5 -68 8 -72 13 -13 24 21 18 60 -5
38 -4 40 16 29 18 -10 21 -8 24 16 4 33 27 41 118 41 90 0 114 -8 120 -41 l5
-26 33 20 c17 12 32 24 32 29 0 6 -180 91 -192 90 -1 0 -43 -19 -93 -41z"
            />
            <path
              d="M118 343 c-11 -3 -18 -14 -18 -28 0 -27 22 -35 100 -35 78 0 100 8
100 35 0 15 -8 25 -22 29 -26 6 -134 6 -160 -1z"
            />
            <path
              d="M74 257 c-21 -12 -17 -54 5 -67 26 -13 311 -14 311 0 0 6 -4 10 -10
10 -5 0 -10 11 -10 25 0 14 5 25 10 25 6 0 10 4 10 9 0 12 -295 10 -316 -2z"
            />
            <path
              d="M78 149 c-24 -13 -23 -56 1 -69 26 -13 311 -14 311 0 0 6 -4 10 -10
10 -5 0 -10 11 -10 25 0 14 5 25 10 25 6 0 10 5 10 10 0 13 -289 13 -312 -1z"
            />
          </g>
        </svg>
      );
    case "email":
      return (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="128.000000pt"
          height="128.000000pt"
          viewBox="0 0 128.000000 128.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
            fill={fill}
            stroke="none"
          >
            <path
              d="M29 1061 l-29 -29 0 -392 0 -392 29 -29 29 -29 582 0 582 0 29 29 29
29 0 392 0 392 -29 29 -29 29 -582 0 -582 0 -29 -29z m866 -291 c-132 -132
-247 -240 -255 -240 -8 0 -123 108 -255 240 l-240 240 495 0 495 0 -240 -240z
m-663 -282 l-152 -153 0 305 0 305 152 -153 153 -152 -153 -152z m968 150 l0
-303 -152 152 -153 153 150 150 c82 82 151 150 152 150 2 0 3 -136 3 -302z
m-684 -127 c100 -94 149 -93 250 2 l65 61 152 -152 152 -152 -495 0 -495 0
150 150 c82 83 151 150 154 150 2 0 32 -27 67 -59z"
            />
          </g>
        </svg>
      );
    case "phone":
      return (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="128.000000pt"
          height="128.000000pt"
          viewBox="0 0 128.000000 128.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
            fill={fill}
            stroke="none"
          >
            <path
              d="M220 1258 c-38 -15 -74 -40 -116 -82 -82 -82 -104 -141 -104 -276 0
-232 87 -444 253 -617 177 -184 402 -283 643 -283 140 0 197 21 280 104 74 74
107 149 102 234 l-3 54 -213 85 c-140 56 -220 83 -235 79 -17 -4 -30 -26 -58
-98 -35 -89 -38 -93 -65 -90 -160 16 -320 175 -336 335 -3 27 2 30 81 62 93
38 111 50 111 74 0 9 -38 111 -84 226 l-84 210 -58 2 c-41 2 -76 -4 -114 -19z
m175 -225 c37 -92 63 -169 58 -171 -4 -2 -44 -18 -88 -36 l-80 -32 1 -81 c1
-72 5 -91 37 -158 80 -167 264 -286 427 -273 l44 3 35 88 c31 77 37 87 55 81
12 -4 87 -34 168 -67 144 -58 148 -60 141 -86 -29 -125 -135 -210 -267 -219
-214 -13 -493 115 -643 295 -123 147 -203 354 -203 527 0 132 74 238 197 282
21 7 41 13 44 14 4 0 37 -75 74 -167z"
            />
          </g>
        </svg>
      );
    case "location":
      return (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="64.000000pt"
          height="64.000000pt"
          viewBox="0 0 64.000000 64.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
            fill={fill}
            stroke="none"
          >
            <path
              d="M246 596 c-57 -21 -87 -46 -120 -100 -57 -91 -33 -218 64 -347 27
-36 67 -78 90 -94 l40 -28 40 28 c40 28 117 122 146 177 26 50 45 141 38 186
-9 59 -59 131 -111 160 -54 30 -135 37 -187 18z m176 -56 c61 -41 83 -84 83
-159 -1 -85 -41 -165 -125 -253 l-60 -63 -60 63 c-100 105 -149 230 -121 314
14 41 64 95 106 115 45 20 136 12 177 -17z"
            />
            <path
              d="M274 491 c-38 -17 -64 -60 -64 -108 0 -38 5 -50 34 -79 48 -48 104
-48 152 0 29 29 34 41 34 80 0 61 -37 105 -95 111 -22 3 -50 1 -61 -4z m101
-56 c49 -49 16 -125 -55 -125 -44 0 -80 35 -80 77 0 34 42 73 80 73 19 0 40
-9 55 -25z"
            />
          </g>
        </svg>
      );
    default:
      return <></>;
  }
};

export default Icons;
