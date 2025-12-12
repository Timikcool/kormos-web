import { useState } from "react";
import { Mail, Droplet, Lock } from "lucide-react";

const SolanaIcon = () => (
  <svg
    width="37"
    height="34"
    viewBox="0 0 37 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 md:w-9 md:h-9"
  >
    <g clipPath="url(#clip0_2440_3220)">
      <path
        d="M6.32943 25.4591C6.54405 25.2038 6.84262 25.0519 7.162 25.0463L36.1253 24.5407C36.6546 24.5315 36.932 25.2604 36.5654 25.6965L30.9586 32.3665C30.7439 32.6218 30.4454 32.7737 30.126 32.7793L1.16269 33.2849C0.633431 33.2941 0.355997 32.5652 0.72263 32.1291L6.32943 25.4591Z"
        fill="url(#paint0_linear_2440_3220)"
      />
      <path
        d="M5.90072 0.928803C6.12446 0.673336 6.42303 0.521379 6.73329 0.515964L35.6966 0.0104074C36.2259 0.00116908 36.5033 0.73005 36.1367 1.1662L30.5299 7.83613C30.3152 8.09144 30.0167 8.2434 29.6973 8.24897L0.73398 8.75453C0.20472 8.76377 -0.0727138 8.03488 0.293919 7.59873L5.90072 0.928803Z"
        fill="url(#paint1_linear_2440_3220)"
      />
      <path
        d="M30.6157 12.6877C30.3923 12.4401 30.0886 12.2986 29.7692 12.3042L0.805913 12.8097C0.276653 12.819 0.0248264 13.5571 0.406458 13.9802L6.24262 20.4504C6.46602 20.698 6.76971 20.8395 7.08909 20.8339L36.0524 20.3284C36.5817 20.3191 36.8335 19.581 36.4519 19.1579L30.6157 12.6877Z"
        fill="url(#paint2_linear_2440_3220)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_2440_3220"
        x1="32.8618"
        y1="-3.86607"
        x2="8.83907"
        y2="37.8376"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFA3" />
        <stop offset="1" stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2440_3220"
        x1="24.0048"
        y1="-8.96768"
        x2="-0.0179043"
        y2="32.736"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFA3" />
        <stop offset="1" stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_2440_3220"
        x1="28.406"
        y1="-6.4331"
        x2="4.38328"
        y2="35.2706"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFA3" />
        <stop offset="1" stopColor="#DC1FFF" />
      </linearGradient>
      <clipPath id="clip0_2440_3220">
        <rect
          width="36.2963"
          height="32.6667"
          fill="white"
          transform="translate(0 0.633484) rotate(-1)"
        />
      </clipPath>
    </defs>
  </svg>
);

const KormosLogo = () => (
  <svg
    width="102"
    height="40"
    viewBox="0 0 102 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.2907 11.0498C20.3072 11.1949 19.0663 11.648 18.0573 12.2304C17.8023 12.3776 17.5034 12.5436 17.3931 12.5991C17.2828 12.6546 17.1926 12.7339 17.1926 12.7754C17.1926 12.8167 17.1426 12.8519 17.0813 12.8534C16.9081 12.8578 15.6576 14.0908 15.2187 14.69C13.6114 16.8843 13.1402 19.9173 13.9573 22.8098C14.4386 24.5134 15.6883 26.2743 17.1253 27.2737C18.9376 28.5342 20.4549 29.0012 22.7346 29C25.0618 28.9988 26.7454 28.3917 28.5949 26.8867C29.8718 25.8477 31.0128 24.0772 31.3957 22.5406C31.9407 20.3541 31.705 17.7584 30.8006 15.9874C30.2193 14.849 29.1894 13.6184 28.3286 13.0336C28.1571 12.9171 27.9166 12.7295 27.7941 12.6167C27.3478 12.2056 25.8867 11.5264 24.8435 11.2448C24.0792 11.0385 22.1022 10.9301 21.2907 11.0498ZM76.4615 11.2787C75.1229 11.6272 73.6853 12.4183 72.6585 13.3715C71.6581 14.3001 70.7311 15.728 70.3464 16.933C69.9086 18.3039 69.7696 19.895 69.9687 21.2571C70.37 24.0019 71.5381 25.9589 73.6471 27.42C74.4646 27.9863 75.4338 28.4155 76.6578 28.7533C77.406 28.9597 79.9651 29.072 80.6678 28.9292C81.9213 28.6745 83.2455 28.1607 84.073 27.608C84.6801 27.2026 85.7284 26.2045 86.1506 25.6299C86.5416 25.0979 87.1681 23.873 87.4096 23.1687C88.1166 21.107 88.02 18.5167 87.157 16.3947C86.2918 14.267 84.426 12.4883 82.1216 11.5941C81.1101 11.2016 80.1725 11.0559 78.6866 11.0606C77.5063 11.0643 77.1516 11.0991 76.4615 11.2787ZM94.2983 11.1912C93.3743 11.4302 92.4219 11.9087 91.7488 12.4721C91.4479 12.724 90.8213 13.5789 90.5679 14.0835C89.8474 15.5177 89.9399 17.2825 90.8031 18.5737C91.6531 19.845 93.1036 20.5926 96.08 21.2934C97.5386 21.6368 98.3951 22.1969 98.8557 23.1087C99.0883 23.5688 99.1467 24.2037 98.9934 24.6042C98.8538 24.9691 98.2538 25.5469 97.7282 25.8226C95.8793 26.7924 93.6486 26.3096 91.8984 24.5611L91.4166 24.0797L90.5176 24.9476C90.0231 25.4249 89.6191 25.8593 89.6198 25.9128C89.6225 26.1082 90.963 27.4579 91.5092 27.8151C92.1982 28.2657 93.2219 28.6852 94.0722 28.8653C94.8695 29.0343 96.5265 29.036 97.2382 28.8686C98.2894 28.6215 98.4504 28.5662 99.1818 28.2013C100.51 27.5387 101.354 26.5921 101.786 25.2803C101.999 24.6332 102.019 24.4636 101.989 23.4859C101.959 22.4817 101.936 22.3605 101.656 21.7554C101.424 21.2548 101.204 20.9605 100.703 20.4794C99.7996 19.6122 98.7089 19.0888 96.7927 18.6029C95.0285 18.1556 94.4838 17.9753 93.9586 17.6654C92.8485 17.0103 92.706 15.9065 93.6024 14.9073C94.0342 14.4259 94.5177 14.1606 95.3083 13.9711C96.7097 13.6352 98.2842 14.1196 99.5361 15.2719C99.805 15.5193 100.059 15.7203 100.101 15.7185C100.248 15.7124 101.737 14.2214 101.737 14.0807C101.737 13.8232 100.689 12.6024 100.159 12.243C98.8815 11.3762 97.7104 11.051 95.9207 11.0662C95.2733 11.0716 94.5433 11.1279 94.2983 11.1912ZM9.94283 11.3702C9.83868 11.4689 9.59325 11.7515 9.39725 11.9982C9.20135 12.2449 8.98807 12.503 8.92339 12.5717C8.74424 12.7621 7.81968 13.9121 7.59669 14.2219C7.48819 14.3726 7.36774 14.5193 7.3289 14.548C7.29006 14.5767 7.14885 14.7482 7.01513 14.9289C6.88141 15.1097 6.72132 15.3116 6.65931 15.3775C6.59731 15.4435 6.37886 15.7195 6.17378 15.9909C5.9687 16.2623 5.72816 16.5658 5.63926 16.6652C5.55035 16.7646 5.06045 17.3702 4.55069 18.011C4.04084 18.6518 3.57045 19.2204 3.50542 19.2746C3.38569 19.3742 3.38266 19.3693 4.41029 20.7013C4.52459 20.8494 4.85145 21.2795 5.13689 21.6571C5.42224 22.0348 5.95641 22.735 6.3239 23.2132C6.69138 23.6913 7.34431 24.5533 7.77478 25.1285C9.1691 26.9917 10.5247 28.7314 10.5854 28.7354C11.053 28.7665 14.095 28.7408 14.13 28.7055C14.1562 28.6791 13.8851 28.2804 13.5274 27.8196C13.1696 27.3589 12.4462 26.4166 11.9198 25.7258C11.3934 25.0349 10.8661 24.3485 10.748 24.2005C10.63 24.0525 9.90541 23.0835 9.13783 22.0472C8.37025 21.0109 7.62485 20.0217 7.48133 19.849C7.33781 19.6763 7.22039 19.4946 7.22048 19.4452C7.22048 19.3669 7.99403 18.3739 9.81035 16.1203C10.0864 15.7777 10.6766 15.0449 11.1217 14.4919C11.9036 13.5204 12.0579 13.3335 12.4764 12.8507C12.9799 12.2697 13.6291 11.4155 13.6291 11.3338C13.6291 11.2765 12.9841 11.2334 11.8807 11.2169C10.2353 11.1923 10.1211 11.2014 9.94283 11.3702ZM0.108405 11.2956C0.0182485 11.3322 -0.00348815 13.0861 0.000431721 19.9884C0.00337162 25.1131 0.0385615 28.656 0.0868472 28.6861C0.178519 28.7431 3.01348 28.7774 3.06345 28.7221C3.08109 28.7026 3.11352 24.8017 3.13562 20.0536C3.16279 14.1934 3.14622 11.391 3.08385 11.3282C2.99103 11.2347 0.330502 11.2056 0.108405 11.2956ZM33.9318 11.2948C33.9204 11.3874 33.9204 10.7803 33.9317 20.5892L33.9412 28.7315H35.4424H36.9435L36.9908 21.5045C37.0168 17.5298 37.0544 14.2612 37.0745 14.241C37.0944 14.2208 37.9511 14.1928 38.9782 14.1787C40.5822 14.1568 40.9145 14.1759 41.3355 14.3148C42.6888 14.7612 43.7034 16.2389 43.5204 17.4969C43.4045 18.2936 42.959 19.0809 42.3668 19.5358C41.7522 20.0079 41.2369 20.1124 39.4738 20.1224C38.0271 20.1305 37.8613 20.1469 37.8634 20.2818C37.865 20.3968 42.8685 27.2163 43.8873 28.4923L44.0783 28.7315H45.825C46.7856 28.7315 47.5693 28.7012 47.5665 28.6642C47.5576 28.5466 45.8254 26.2021 44.3018 24.2454C43.8609 23.6791 43.9151 23.7506 43.353 22.9919C43.0628 22.6003 42.9618 22.4008 43.0423 22.3784C43.3244 22.3005 44.1554 21.8808 44.4978 21.6436C45.1413 21.1977 45.7534 20.5199 46.131 19.8352C46.7255 18.757 46.8948 16.8425 46.5095 15.5569C45.9031 13.5337 44.3944 12.1107 42.1818 11.4751C41.6137 11.312 41.2193 11.2926 37.7497 11.2577C35.655 11.2366 33.937 11.2533 33.9318 11.2948ZM49.7376 11.3816C49.707 11.4619 49.708 14.379 49.7398 17.8641C49.7716 21.3491 49.7978 25.2181 49.7982 26.4618L49.7988 28.7231L51.2568 28.7497L52.7146 28.7763L52.7713 27.8427C52.8023 27.3292 52.8278 24.5466 52.8278 21.659V16.4089L53.7972 18.0617C54.3303 18.9707 55.2251 20.4613 55.7855 21.3743C56.346 22.2872 57.0012 23.3571 57.2418 23.7519C57.802 24.6715 58.5963 25.7706 58.7007 25.7706C58.8189 25.7706 59.3149 25.0605 60.0168 23.8865C60.3561 23.319 61.3629 21.6695 62.2542 20.2211C63.1455 18.7726 63.8747 17.5687 63.8747 17.5458C63.8747 17.5229 63.9722 17.3755 64.0913 17.2182C64.2105 17.061 64.3519 16.8157 64.4056 16.6734C64.4593 16.5311 64.5168 16.4304 64.5332 16.4495C64.555 16.4752 64.6744 26.5093 64.6763 28.4847L64.6765 28.7315H66.1465H67.6164L67.6346 22.7874C67.6446 19.5182 67.6546 15.5917 67.6569 14.0619L67.661 11.2805L66.0124 11.2657C64.8731 11.2554 64.322 11.2831 64.2288 11.3554C64.1017 11.4538 62.9884 13.1664 62.7327 13.6567C62.668 13.7806 62.5639 13.9428 62.5013 14.0169C62.4385 14.091 62.3612 14.2122 62.3292 14.2862C62.2972 14.3602 61.9805 14.8971 61.6253 15.4792C61.27 16.0614 60.4582 17.4038 59.8212 18.4623C59.1842 19.521 58.643 20.3861 58.6185 20.3851C58.594 20.384 58.275 19.8693 57.9095 19.2412C56.4092 16.6631 53.7135 12.1602 53.3451 11.617L53.0865 11.2357H51.4399C50.0012 11.2357 49.7862 11.2541 49.7376 11.3816ZM78.3961 14.0735C76.9711 14.2273 75.7297 14.7761 74.8521 15.64C74.0105 16.4685 73.5766 17.1473 73.2224 18.1891C73.0392 18.7275 73.0091 18.9837 73.0109 19.9836C73.0132 21.2901 73.1933 22.0779 73.6797 22.9085C73.8238 23.1546 73.9417 23.374 73.9417 23.396C73.9417 23.5462 75.2525 24.9355 75.538 25.0878C75.6645 25.1552 75.9929 25.3365 76.2678 25.4905C77.0777 25.9443 78.0935 26.1587 79.1533 26.0995C80.7572 26.0098 82.0707 25.4175 83.1545 24.295C84.5518 22.8478 85.1579 20.6935 84.7189 18.7353C84.5679 18.0619 83.8918 16.7356 83.4076 16.1629C82.9336 15.6023 82.2142 15.0357 81.55 14.6996C80.7082 14.2738 79.2401 13.9823 78.3961 14.0735Z"
      fill="#148CED"
    />
  </svg>
);

export default function Index() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/a4efd30ed54b2184ca524bd6b9dd0753f89ccda4?width=2880')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
        }}
      />

      <div className="relative z-10">
        <header className="px-4 md:px-8 lg:px-12 py-6 md:py-8 flex items-center justify-between max-w-7xl mx-auto">
          <div className="w-24 md:w-28">
            <KormosLogo />
          </div>
          <button className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-b from-[hsl(182,96%,39%)] to-[hsl(231,100%,42%)] text-white font-semibold rounded-xl text-sm md:text-base hover:opacity-90 transition-opacity">
            Join waitlist
          </button>
        </header>

        <main className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="mt-12 md:mt-20 lg:mt-32 space-y-8 md:space-y-12">
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 flex-wrap">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary uppercase leading-tight">
                  The next generation of stablecoin yield on
                </h1>
                <div className="flex items-center gap-3 lg:gap-2 mt-4 lg:mt-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-card flex items-center justify-center flex-shrink-0">
                    <SolanaIcon />
                  </div>
                  <span className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase">
                    Solana
                  </span>
                </div>
              </div>

              <p className="text-lg md:text-2xl text-foreground max-w-3xl">
                Kormos blends liquid and locked depositors into one fractional-reserve vault
              </p>

              <div className="space-y-3 md:space-y-4 max-w-3xl">
                <div className="flex gap-3 md:gap-4 items-start">
                  <Droplet className="w-6 h-6 md:w-7 md:h-7 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg md:text-2xl text-foreground">
                    Liquid LPs get instant exits and senior-tranche protection
                  </p>
                </div>
                <div className="flex gap-3 md:gap-4 items-start">
                  <Lock className="w-6 h-6 md:w-7 md:h-7 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg md:text-2xl text-foreground">
                    Locked LPs choose a bespoke lockup and earn the highest surplus yield
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-6">
                <div className="rounded-3xl bg-card/30 backdrop-blur-sm p-6 md:p-8 space-y-4 md:space-y-6 border border-primary/20">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                    Two vaults, one primitive
                  </h3>
                  <p className="text-base md:text-xl lg:text-2xl text-foreground">
                    Liquid depositors can exit any time; illiquid depositors choose a lockup and earn a higher rate as the junior tranche.
                  </p>
                </div>

                <div className="rounded-3xl bg-card/30 backdrop-blur-sm p-6 md:p-8 space-y-4 md:space-y-6 border border-primary/20">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                    Boosted yield without leverage
                  </h3>
                  <p className="text-base md:text-xl lg:text-2xl text-foreground">
                    Aggregate yields from liquid and illiquid strategies to offer higher APY on both sides of the vault.
                  </p>
                </div>

                <div className="rounded-3xl bg-card/30 backdrop-blur-sm p-6 md:p-8 space-y-4 md:space-y-6 border border-primary/20">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                    Allocates across time & risk
                  </h3>
                  <p className="text-base md:text-xl lg:text-2xl text-foreground">
                    Capital is automatically distributed between AMMs, lending, RWAs, fixed-term and hedged strategies to optimise the reserve ratio and vault APY.
                  </p>
                </div>

                <div className="rounded-3xl bg-card/30 backdrop-blur-sm p-6 md:p-8 space-y-4 md:space-y-6 border border-primary/20">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                    First-loss protection for liquid side
                  </h3>
                  <p className="text-base md:text-xl lg:text-2xl text-foreground">
                    Any losses from underlying strategies are first covered by illiquid depositors, until an extreme "bank-run" scenario.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-20 lg:mt-32 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
                  Join Waitlist
                </h2>
                <p className="text-lg md:text-2xl text-foreground">
                  Get early access to Kormos vaults and mainnet caps
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        required
                        className="w-full px-4 md:px-6 py-3 md:py-4 rounded-2xl bg-card border border-primary/30 text-foreground placeholder:text-muted-foreground text-base md:text-lg focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-b from-[hsl(182,96%,39%)] to-[hsl(231,100%,42%)] text-white font-semibold rounded-2xl text-base md:text-lg hover:opacity-90 transition-opacity whitespace-nowrap"
                    >
                      Submit
                    </button>
                  </div>
                  {submitted && (
                    <p className="text-primary text-sm md:text-base">
                      Thanks! We'll be in touch soon.
                    </p>
                  )}
                </form>
              </div>

              <div className="flex-1 w-full h-80 md:h-96 relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/51119ca79338c69dd5928780e81bf27e812f95ed?width=1410"
                  alt="Kormos illustration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </main>

        <footer className="mt-20 md:mt-32 pb-8 md:pb-12 px-4 md:px-8 lg:px-12 text-center text-muted-foreground text-sm md:text-base">
          <p>© 2024 Kormos. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
