function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <div>
      <footer className="footer p-10 bg-gray-700 text-primary-light footer-center">
        <div>
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="50pt"
            height="50pt"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#767a83"
              stroke="none"
            >
              <path
                d="M1254 3800 c-50 -11 -93 -42 -111 -80 -16 -32 -17 -120 -17 -1166 1
-1105 1 -1132 20 -1165 40 -68 62 -73 299 -72 239 1 271 8 302 65 17 31 18 86
23 878 4 672 8 850 18 868 7 13 28 32 45 42 31 19 56 20 698 20 l667 0 53 -28
c66 -34 86 -68 105 -174 21 -118 21 -234 0 -283 -53 -125 -127 -145 -566 -149
-218 -2 -312 -6 -329 -15 -45 -24 -51 -63 -51 -306 l0 -225 29 -32 29 -33 389
-5 c346 -4 391 -7 420 -23 60 -32 67 -59 73 -292 4 -188 7 -214 26 -245 13
-23 32 -39 56 -47 19 -6 123 -14 229 -17 188 -6 196 -6 239 16 33 17 51 35 68
68 l22 44 0 1112 c0 764 -3 1122 -11 1141 -13 36 -46 70 -84 91 -27 14 -165
16 -1320 17 -710 1 -1304 -1 -1321 -5z"
              />
            </g>
          </svg>
          <p>
            Copyright &copy; {footerYear} All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
