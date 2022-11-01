import styles from './navbar.module.css';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <div>
      <div className="border-0 w-full border-b-1 bg-white shadow-md">
        <div className="relative mx-auto max-w-7xl flex pb-6 pt-3 justify-center mx-auto text-center">
          <h1 className="text-4xl font-bold text-color-[#1D1C1C]">
            TCG Marketplace
          </h1>
          <div
            className="w-[70px] h-[35px] absolute bottom-[-34px] rounded-bl-full rounded-br-full
        bg-white border border-t-0 shadow-lg"
          ></div>
          <div className="absolute w-[70px] h-[50px] absolute bottom-[-25px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="42"
              viewBox="0 0 68 42"
              fill="none"
            >
              <path
                d="M45.5431 33.6424C42.8157 39.8698 35.5165 42.7306 29.2399 40.0321C22.9634 37.3335 20.0862 30.0976 22.8137 23.8701C25.5411 17.6426 32.8403 14.7818 39.1168 17.4804C45.3934 20.1789 48.2705 27.4149 45.5431 33.6424Z"
                fill="#252525"
              />
              <path
                d="M45.6623 35.2913C42.3412 41.0356 35.1265 43.5105 28.8625 40.8173C22.5958 38.123 19.4921 31.2067 21.4629 24.8775C21.5535 24.5864 21.8811 24.4455 22.1628 24.5667L45.4138 34.5723C45.6954 34.6936 45.8152 35.0269 45.6623 35.2913Z"
                fill="#F8F8F8"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M45.1906 35.05C41.9973 40.55 35.08 42.9169 29.0739 40.3346C23.0652 37.7513 20.085 31.1241 21.9628 25.0543L45.1906 35.05ZM28.8625 40.8173C35.1265 43.5105 42.3412 41.0356 45.6623 35.2913C45.8152 35.0269 45.6954 34.6936 45.4138 34.5723L22.1628 24.5667C21.8811 24.4455 21.5535 24.5864 21.4629 24.8775C19.4921 31.2067 22.5958 38.123 28.8625 40.8173Z"
                fill="#252525"
              />
              <path
                d="M46.8577 32.6386C48.8234 26.3116 45.7195 19.4003 39.4555 16.7072C33.1888 14.0129 25.9705 16.4914 22.6512 22.2408C22.4986 22.5053 22.6185 22.8386 22.9002 22.9596L46.158 32.9498C46.4397 33.0709 46.7672 32.9298 46.8577 32.6386Z"
                fill="#FF4C41"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M46.3576 32.4621C48.2306 26.3944 45.2503 19.7721 39.2441 17.1899C33.2354 14.6065 26.3146 16.9769 23.1231 22.4818L46.3576 32.4621ZM39.4555 16.7072C45.7195 19.4003 48.8234 26.3116 46.8577 32.6386C46.7672 32.9298 46.4397 33.0709 46.158 32.9498L22.9002 22.9596C22.6185 22.8386 22.4986 22.5053 22.6512 22.2408C25.9705 16.4914 33.1888 14.0129 39.4555 16.7072Z"
                fill="#252525"
              />
              <path
                d="M38.6431 30.6759C37.5716 33.1224 34.7041 34.2463 32.2383 33.1861C29.7725 32.126 28.6422 29.2833 29.7137 26.8368C30.7852 24.3903 33.6527 23.2664 36.1185 24.3265C38.5843 25.3867 39.7146 28.2294 38.6431 30.6759Z"
                fill="#252525"
              />
              <path
                d="M37.0195 29.9778C36.3377 31.5347 34.5129 32.2499 32.9437 31.5753C31.3746 30.9006 30.6553 29.0916 31.3372 27.5348C32.019 25.9779 33.8438 25.2627 35.413 25.9374C36.9821 26.612 37.7014 28.421 37.0195 29.9778Z"
                fill="#F8F8F8"
              />
              <path
                d="M36.2077 29.6287C35.7207 30.7408 34.4173 31.2516 33.2964 30.7697C32.1756 30.2879 31.6619 28.9957 32.1489 27.8837C32.6359 26.7716 33.9394 26.2608 35.0602 26.7426C36.181 27.2245 36.6948 28.5167 36.2077 29.6287Z"
                fill="#F8F8F8"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M33.5078 30.2871C34.36 30.6534 35.351 30.265 35.7212 29.4196C36.0915 28.5741 35.7009 27.5917 34.8488 27.2253C33.9966 26.859 33.0057 27.2473 32.6354 28.0928C32.2651 28.9383 32.6557 29.9207 33.5078 30.2871ZM33.2964 30.7697C34.4173 31.2516 35.7207 30.7408 36.2077 29.6287C36.6948 28.5167 36.181 27.2245 35.0602 26.7426C33.9394 26.2608 32.6359 26.7716 32.1489 27.8837C31.6619 28.9957 32.1756 30.2879 33.2964 30.7697Z"
                fill="#252525"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.961 19.6128C28.961 19.6128 32.408 18.6503 34.4254 17.7017C34.562 17.6375 34.6995 17.579 34.8314 17.5229C35.1412 17.3912 35.4195 17.2729 35.5796 17.1251C35.9948 16.742 34.6085 16.6062 33.981 16.5896C31.6092 16.5267 28.8572 17.4015 27.4568 19.0162C27.0748 19.4567 26.9138 19.9087 27.3373 20.0506C27.6271 20.1476 28.961 19.6128 28.961 19.6128ZM25.689 20.3045C25.4855 20.5324 25.3485 20.883 25.5848 21.0769C25.8175 21.268 26.3251 20.8518 26.3251 20.8518C26.3251 20.8518 26.8106 20.3687 26.6099 20.1515C26.4575 19.9865 25.9372 20.0266 25.689 20.3045ZM24.7347 21.698C24.6552 21.6021 24.6664 21.4973 24.7102 21.3809C24.7865 21.1787 25.1135 20.9834 25.225 21.1686C25.2833 21.2656 25.2647 21.3528 25.223 21.458C25.1451 21.6544 24.8697 21.861 24.7347 21.698Z"
                fill="white"
                fill-opacity="0.8"
              />
              <path
                d="M4.29657 14.8528L2.93266 15.2353L2.19172 12.0265C6.25389 10.8221 8.88537 10.4898 10.0861 11.0297C11.292 11.5633 12.0556 12.5933 12.3768 14.1199C12.7163 16.4828 11.3191 18.3015 8.18524 19.5762L8.7059 23.5327L6.75777 23.8932L4.29657 14.8528ZM7.70537 16.7607C9.24691 16.0515 9.94881 15.3141 9.81107 14.5483C9.6739 14.0982 9.43187 13.8234 9.08497 13.7237C8.74379 13.6234 8.09727 13.7174 7.14543 14.0057L7.70537 16.7607Z"
                fill="#FDCE29"
              />
              <path
                d="M16.5098 11.2454C17.8365 11.0996 19.0192 11.4261 20.0579 12.2249C21.096 13.0181 21.6857 14.0472 21.8272 15.3121C21.9693 16.5828 21.6219 17.7206 20.7849 18.7255C19.9473 19.7248 18.8652 20.2974 17.5385 20.4432C16.2118 20.589 15.0294 20.2653 13.9913 19.4721C12.9526 18.6733 12.3622 17.6385 12.2201 16.3679C12.0786 15.103 12.4267 13.9708 13.2643 12.9715C14.1013 11.9666 15.1831 11.3912 16.5098 11.2454ZM19.9946 14.4541C19.9672 14.727 19.8589 14.9743 19.6695 15.1961C19.4083 15.5004 19.0747 15.6749 18.6687 15.7195C18.2627 15.7642 17.8989 15.6692 17.5775 15.4346C17.2611 15.1938 17.0816 14.8833 17.0391 14.5033C16.9966 14.1232 17.1034 13.7842 17.3595 13.4862C17.6214 13.1875 17.9553 13.0159 18.3613 12.9713C18.4414 12.9625 18.5163 12.96 18.5862 12.9638C18.2539 12.8395 17.8962 12.7984 17.5131 12.8405C16.8783 12.9103 16.3595 13.1884 15.9566 13.6748C15.5588 14.1549 15.3941 14.7013 15.4626 15.3139C15.5311 15.9265 15.8125 16.4239 16.3068 16.806C16.8068 17.1874 17.3741 17.3433 18.0089 17.2735C18.6436 17.2038 19.1599 16.9288 19.5578 16.4487C19.9613 15.9679 20.1288 15.4213 20.0603 14.8086C20.0464 14.6838 20.0245 14.5657 19.9946 14.4541Z"
                fill="#FDCE29"
              />
              <path
                d="M20.4335 11.5463L20.2555 10.4203L23.7296 9.41835L24.2941 13.4562L27.2055 8.89855L29.9614 10.792L26.7126 15.4385L32.5163 18.3407L32.5807 20.8573L25.5848 17.1558L26.075 21.3052L23.7132 21.849L21.9327 11.2093L20.4335 11.5463Z"
                fill="#FDCE29"
              />
              <path
                d="M38.5157 13.4437L40.4102 15.0098C39.5019 16.6715 38.056 17.6142 36.0723 17.8379C32.9157 18.1848 31.1613 16.9392 30.8091 14.1011C30.4843 10.9901 31.7284 9.27718 34.5412 8.96231C36.7816 8.75629 38.2098 9.56976 38.8258 11.4027L35.1235 15.0998C36.7964 15.0997 37.9272 14.5477 38.5157 13.4437ZM33.6702 14.2949L36.343 11.7186C35.3653 11.0509 34.4586 11.0701 33.623 11.7764C32.8909 12.632 32.9066 13.4715 33.6702 14.2949Z"
                fill="#FDCE29"
              />
              <path
                d="M39.8159 17.771L40.0653 8.35523L42.4204 7.90692L43.5186 12.2909L44.1218 6.81556L46.4303 6.26041L49.9763 19.4882L46.5767 19.4484L44.8986 12.6733L43.8694 17.1361L42.5977 13.6066L42.1471 18.1178L39.8159 17.771Z"
                fill="#FDCE29"
              />
              <path
                d="M52.6393 7.27485C53.966 7.12905 55.1487 7.45558 56.1874 8.25443C57.2255 9.04761 57.8153 10.0767 57.9568 11.3416C58.0989 12.6122 57.7514 13.75 56.9145 14.755C56.0769 15.7543 54.9947 16.3269 53.668 16.4727C52.3413 16.6185 51.159 16.2948 50.1209 15.5016C49.0822 14.7028 48.4918 13.668 48.3497 12.3974C48.2082 11.1325 48.5562 10.0003 49.3938 9.00102C50.2308 7.99604 51.3126 7.42065 52.6393 7.27485ZM56.1241 10.4836C56.0968 10.7565 55.9884 11.0038 55.799 11.2256C55.5378 11.5299 55.2042 11.7044 54.7982 11.749C54.3922 11.7936 54.0285 11.6987 53.707 11.4641C53.3906 11.2233 53.2112 10.9128 53.1687 10.5328C53.1262 10.1527 53.233 9.81367 53.4891 9.51565C53.7509 9.21699 54.0848 9.04536 54.4908 9.00074C54.5709 8.99194 54.6459 8.98944 54.7158 8.99324C54.3835 8.86898 54.0258 8.8279 53.6426 8.87001C53.0079 8.93977 52.489 9.21786 52.0861 9.70428C51.6883 10.1844 51.5237 10.7308 51.5922 11.3434C51.6607 11.956 51.9421 12.4534 52.4363 12.8355C52.9363 13.2169 53.5037 13.3728 54.1384 13.303C54.7732 13.2332 55.2895 12.9583 55.6873 12.4782C56.0909 11.9974 56.2584 11.4507 56.1899 10.8381C56.1759 10.7133 56.154 10.5952 56.1241 10.4836Z"
                fill="#FDCE29"
              />
              <path
                d="M58.2561 16.3474L57.4923 7.49949L56.8109 7.53993L56.6472 6.07644L59.6027 5.87223L62.3904 11.3884L62.1389 5.02503L64.4083 4.50863L65.0485 17.4528L62.5886 17.2753L59.9543 11.8112L60.4596 16.3292L58.2561 16.3474Z"
                fill="#FDCE29"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.75781 23.8933L4.29661 14.8529L2.9327 15.2354L2.19176 12.0266C6.25394 10.8222 8.88541 10.4899 10.0862 11.0298C10.804 11.3474 11.3651 11.8409 11.7694 12.5104C12.0443 12.9656 12.2468 13.5021 12.3768 14.12C12.3929 14.2319 12.4051 14.3425 12.4134 14.452C12.4544 14.3315 12.5011 14.2125 12.5534 14.095C12.5553 14.0908 12.5572 14.0865 12.5591 14.0823C12.7329 13.6954 12.968 13.3252 13.2643 12.9716C13.3392 12.8817 13.416 12.7953 13.4948 12.7122C14.2968 11.8671 15.3018 11.3782 16.5098 11.2455C17.2668 11.1623 17.977 11.2329 18.6402 11.4572C18.7436 11.4922 18.8458 11.5309 18.9469 11.5733C18.9951 11.5936 19.043 11.6146 19.0906 11.6365C19.0926 11.6375 19.0946 11.6384 19.0967 11.6393C19.1566 11.667 19.2162 11.696 19.2753 11.7264C19.5447 11.8647 19.8056 12.0309 20.0579 12.225C20.299 12.4092 20.5159 12.6061 20.7086 12.8157C20.7153 12.8231 20.7221 12.8305 20.7288 12.8379C20.7639 12.8765 20.7981 12.9156 20.8315 12.9551C21.3939 13.6195 21.7258 14.4052 21.8273 15.3122C21.9176 16.1199 21.8101 16.8739 21.5048 17.5743C21.3299 17.9757 21.0899 18.3595 20.785 18.7256C19.9474 19.7249 18.8652 20.2975 17.5385 20.4433C16.2118 20.5891 15.0295 20.2654 13.9914 19.4722C13.477 19.0766 13.0726 18.6232 12.7781 18.1119C12.4779 17.5907 12.2919 17.0094 12.2202 16.368C12.2116 16.2911 12.2048 16.2147 12.1998 16.1388C12.1707 16.2203 12.1387 16.301 12.104 16.3808C11.8747 16.9076 11.5231 17.3962 11.0492 17.8464C10.3561 18.505 9.40149 19.0816 8.18528 19.5763L8.70594 23.5328L6.75781 23.8933ZM9.08501 13.7238C8.74383 13.6235 8.09732 13.7175 7.14547 14.0058L7.70541 16.7608C8.2633 16.5042 8.71122 16.2438 9.04917 15.9797C9.64503 15.5141 9.89901 15.037 9.81111 14.5484C9.67394 14.0983 9.43191 13.8235 9.08501 13.7238ZM9.78659 20.4572L10.347 24.7154L5.69059 25.5771L3.26323 16.661L1.84286 17.0593L0.448 11.0186L1.76975 10.6267C3.83815 10.0135 5.59753 9.60508 7.02579 9.42475C8.38613 9.25299 9.69472 9.25147 10.6898 9.69717C11.5625 10.0841 12.2526 10.6543 12.7726 11.3682C13.7585 10.475 14.9646 9.94529 16.3474 9.79332C17.1622 9.70378 17.9462 9.75552 18.6899 9.94765L18.5996 9.37639L24.9545 7.5436L25.201 9.30678L26.7826 6.8309L30.4958 9.38206C31.4347 8.25531 32.8102 7.68585 34.3759 7.51059L34.3905 7.50896L34.4051 7.50762C35.7194 7.38676 36.9678 7.54826 38.026 8.15102C38.2256 8.26467 38.4126 8.39071 38.5874 8.52816L38.6241 7.14196L42.6895 6.36808L42.77 5.63736L47.4834 4.50383L48.3965 7.90965C49.4638 6.70526 50.8478 6.00185 52.477 5.82281C53.4192 5.71926 54.3202 5.80465 55.1654 6.07757L55.0141 4.7248L60.4795 4.34716L60.6516 4.68776L60.6194 3.8719L65.7933 2.69454L66.6012 19.0299L61.6289 18.671L61.2014 17.7843L56.905 17.8198L56.819 16.8242C55.9535 17.4328 54.9495 17.8019 53.8305 17.9249C52.8359 18.0342 51.8871 17.934 51.001 17.6255L51.8981 20.9719L45.4186 20.896L44.9499 19.0035L44.1805 22.3401L43.2506 19.7593L38.3094 19.0244L38.3159 18.7762C37.679 19.0341 36.9849 19.2056 36.239 19.2897L36.2347 19.2902C35.464 19.3749 34.7174 19.3811 34.0139 19.286L34.1173 23.3261L27.3753 19.759L27.6912 22.4331L22.5173 23.6244L21.8643 19.7226C20.7846 20.9801 19.3709 21.7119 17.701 21.8954C16.0034 22.082 14.439 21.6583 13.0927 20.6296L13.089 20.6268C12.5453 20.2087 12.0909 19.7328 11.7299 19.2039C11.1685 19.6761 10.5151 20.0912 9.78659 20.4572ZM23.7132 21.8491L26.075 21.3053L25.5849 17.1559L32.5807 20.8574L32.5163 18.3408L26.7127 15.4386L29.9615 10.7921L27.2055 8.89864L24.2941 13.4563L23.7296 9.41845L20.2555 10.4204L20.4336 11.5464L21.9328 11.2094L23.7132 21.8491ZM29.3429 14.2406L28.8885 14.8905L29.5147 15.2037C29.4419 14.9049 29.3866 14.5962 29.3473 14.2795L29.3455 14.2655L29.3441 14.2515C29.3437 14.2478 29.3433 14.2442 29.3429 14.2406ZM31.4804 16.1867C31.5414 16.2856 31.6062 16.3802 31.6748 16.4705C31.6981 16.5012 31.7218 16.5314 31.746 16.5612C32.0693 16.9584 32.4708 17.2669 32.9504 17.4867C33.2597 17.6284 33.6016 17.7332 33.9759 17.8011C34.5879 17.912 35.2867 17.9244 36.0723 17.838C36.9368 17.7405 37.6992 17.5065 38.3594 17.1359C38.9413 16.8092 39.4439 16.3765 39.8672 15.8377L39.816 17.7711L42.1471 18.1179L42.5977 13.6067L43.8695 17.1362L44.8986 12.6734L46.5768 19.4485L49.9764 19.4883L46.4303 6.2605L44.1219 6.81565L43.5186 12.291L42.4205 7.90702L40.0654 8.35533L39.9003 14.5883L38.5158 13.4438C38.4959 13.4811 38.4754 13.5178 38.4543 13.5538C38.2647 13.8772 38.0253 14.1499 37.736 14.3719C37.1035 14.8572 36.2327 15.0999 35.1235 15.0999L38.8259 11.4028C38.7421 11.1536 38.6433 10.9232 38.5295 10.7116C37.8064 9.36748 36.477 8.7844 34.5413 8.9624C33.2864 9.10287 32.3437 9.52161 31.7133 10.2186C31.3919 10.5739 31.1517 11.0016 30.9926 11.5016C30.9338 11.6865 30.886 11.8814 30.8494 12.0861C30.7439 12.6757 30.7305 13.3474 30.8092 14.1012C30.9124 14.9332 31.1361 15.6284 31.4804 16.1867ZM34.7158 11.2498C35.2344 11.1757 35.7768 11.332 36.3431 11.7187L33.6702 14.295C33.2151 13.8042 33.0256 13.3077 33.1019 12.8054C33.1536 12.4651 33.3273 12.1221 33.623 11.7765C33.9747 11.4793 34.339 11.3037 34.7158 11.2498ZM48.884 9.72844C48.4196 10.5404 48.2415 11.4301 48.3497 12.3975C48.4918 13.6681 49.0822 14.7029 50.1209 15.5017C50.2463 15.5975 50.3737 15.6864 50.5032 15.7684C51.4466 16.3662 52.5016 16.601 53.6681 16.4728C54.8664 16.3411 55.8652 15.8613 56.6644 15.0333C56.7501 14.9446 56.8335 14.8518 56.9145 14.7551C57.4669 14.0919 57.806 13.3708 57.932 12.5919L58.2562 16.3475L60.4597 16.3293L59.9544 11.8112L62.5887 17.2754L65.0485 17.4529L64.4083 4.50872L62.139 5.02512L62.3905 11.3885L59.6027 5.87232L56.6472 6.07653L56.8109 7.54002L57.4924 7.49958L57.7386 10.3524C57.5685 9.85427 57.312 9.40157 56.9693 8.99427C56.9445 8.96481 56.9192 8.9356 56.8935 8.90661C56.6873 8.67394 56.4519 8.45658 56.1875 8.25452C56.1491 8.22501 56.1105 8.19614 56.0718 8.16791C55.8383 7.99795 55.5977 7.85137 55.35 7.72817C55.309 7.70774 55.2677 7.68795 55.2262 7.66881C55.2242 7.66788 55.2222 7.66694 55.2201 7.66601C55.0725 7.59811 54.9224 7.53835 54.7698 7.48672C54.1065 7.26234 53.3964 7.19175 52.6394 7.27495C51.3127 7.42075 50.2309 7.99613 49.3939 9.00111C49.1968 9.2362 49.0269 9.47864 48.884 9.72844ZM51.6869 10.404C51.5866 10.6976 51.555 11.0108 51.5922 11.3435C51.6607 11.9561 51.9421 12.4535 52.4364 12.8355C52.9364 13.217 53.5037 13.3729 54.1385 13.3031C54.2869 13.2868 54.4289 13.2593 54.5643 13.2205C54.698 13.1823 54.8253 13.1331 54.9463 13.0731C55.2273 12.9336 55.4743 12.7354 55.6874 12.4783C55.932 12.1869 56.0899 11.8712 56.161 11.5314C56.1609 11.5318 56.1611 11.5309 56.161 11.5314C56.207 11.3109 56.2168 11.079 56.1899 10.8382C56.176 10.7134 56.1541 10.5952 56.1242 10.4837C56.1112 10.6135 56.0798 10.7375 56.0302 10.8558C55.9754 10.9861 55.8984 11.1094 55.7991 11.2257C55.5391 11.5286 55.2073 11.7029 54.8038 11.7485C54.802 11.7487 54.8001 11.7489 54.7983 11.7491C54.7967 11.7493 54.7952 11.7495 54.7937 11.7496C54.6361 11.7665 54.4849 11.7624 54.3401 11.7372C54.1135 11.6978 53.9025 11.6068 53.7071 11.4642C53.4306 11.2538 53.2588 10.9902 53.1914 10.6735C53.1858 10.6472 53.1809 10.6206 53.1768 10.5935C53.1768 10.5937 53.1768 10.5934 53.1768 10.5935C53.1737 10.5736 53.171 10.5532 53.1687 10.5329C53.1262 10.1528 53.233 9.81377 53.4891 9.51574C53.5528 9.44308 53.6208 9.37794 53.693 9.32031C53.9177 9.14109 54.1837 9.03459 54.4909 9.00083C54.5295 8.99659 54.5668 8.99382 54.603 8.99251C54.642 8.99109 54.6796 8.99136 54.7158 8.99334C54.6392 8.96469 54.5612 8.94046 54.4819 8.92065C54.4443 8.91125 54.4063 8.90284 54.368 8.89543C54.1373 8.85076 53.8955 8.84231 53.6427 8.8701C53.3932 8.89752 53.1616 8.95712 52.948 9.04891C52.9455 9.04994 52.9431 9.05098 52.9407 9.05203C52.6138 9.19384 52.329 9.41129 52.0862 9.70437C51.9044 9.92375 51.7713 10.157 51.6869 10.404ZM17.0618 14.6441C17.0563 14.6178 17.0514 14.5911 17.0472 14.5641C17.0472 14.5642 17.0472 14.5639 17.0472 14.5641C17.0442 14.5441 17.0415 14.5237 17.0392 14.5034C16.9967 14.1233 17.1035 13.7843 17.3596 13.4863C17.4233 13.4136 17.4913 13.3485 17.5635 13.2908C17.7882 13.1116 18.0541 13.0051 18.3613 12.9713C18.3999 12.9671 18.4373 12.9643 18.4735 12.963C18.5124 12.9616 18.55 12.9619 18.5863 12.9639C18.5097 12.9352 18.4317 12.911 18.3524 12.8912C18.3147 12.8818 18.2768 12.8734 18.2385 12.8659C18.0078 12.8213 17.766 12.8128 17.5131 12.8406C17.2636 12.868 17.0321 12.9276 16.8184 13.0194C16.816 13.0205 16.8136 13.0215 16.8112 13.0225C16.4842 13.1644 16.1994 13.3818 15.9566 13.6749C15.7749 13.8943 15.6418 14.1275 15.5573 14.3745C15.457 14.6681 15.4255 14.9813 15.4627 15.314C15.5312 15.9266 15.8126 16.424 16.3068 16.8061C16.8068 17.1875 17.3742 17.3434 18.0089 17.2736C18.1574 17.2573 18.2993 17.2298 18.4348 17.191C18.5684 17.1528 18.6958 17.1037 18.8168 17.0436C19.0978 16.9042 19.3448 16.7059 19.5578 16.4488C19.8024 16.1574 19.9603 15.8417 20.0315 15.5019C20.0314 15.5023 20.0316 15.5014 20.0315 15.5019C20.0775 15.2815 20.0873 15.0495 20.0604 14.8087C20.0464 14.6839 20.0245 14.5658 19.9946 14.4542C19.9816 14.584 19.9503 14.708 19.9006 14.8263C19.8458 14.9566 19.7688 15.0799 19.6695 15.1962C19.4095 15.4992 19.0778 15.6734 18.6742 15.719C18.6724 15.7192 18.6706 15.7194 18.6687 15.7196C18.6672 15.7198 18.6656 15.72 18.6641 15.7201C18.5065 15.7371 18.3554 15.7329 18.2106 15.7077C17.9839 15.6683 17.7729 15.5773 17.5775 15.4347M17.2084 15.6509C17.0273 15.5097 16.9507 15.3689 16.9266 15.1531C16.9042 14.9528 16.9401 14.8058 17.0618 14.6441"
                fill="#225FA8"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
