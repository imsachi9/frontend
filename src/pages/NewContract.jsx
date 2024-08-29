const NewContract = () => {
  return (
    <div className="w-full relative bg-grey-scale-white h-[1335px] text-left text-2xs-8 text-gray-200 font-manrope">
      <div className="absolute top-[398px] left-[calc(50%_-_224px)] rounded-3xs bg-floralwhite w-[447px] h-[496px] overflow-hidden">
        <div className="absolute h-[calc(100%_-_32px)] w-[calc(100%_+_20px)] top-[32px] right-[0px] bottom-[0px] left-[-20px] bg-[url('/public/divelementorwidgetwrap2@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <form className="m-0 absolute w-[calc(100%_-_133px)] top-[15px] right-[60px] left-[73px] h-[449px]">
            <div className="absolute top-[23.8px] left-[0px] text-13xl leading-[38.4px] font-extrabold font-manrope text-gray-300 text-left flex items-center w-[258.8px] h-[38.4px]">
              Create Contract
            </div>
            <div className="absolute top-[0.2px] left-[0.5px] text-base leading-[24px] font-covered-by-your-grace text-goldenrod-200 text-left flex items-center w-[125px] h-6">
              Time to buy stuff?
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-primary absolute top-[339px] left-[1px] rounded-xl w-[91px] h-[31.6px]">
              <div className="absolute top-[7.8px] left-[17.6px] text-smi leading-[15.82px] font-medium font-manrope text-grey-scale-white text-center flex items-center justify-center w-[56.4px] h-[15.8px]">
                create
              </div>
            </button>
            <section className="absolute top-[137px] left-[0px] rounded-xl bg-grey-scale-white border-primary border-[1.5px] border-solid box-border w-[334px] h-[38px] flex flex-row items-center justify-start py-[13px] px-5">
              <input
                className="[border:none] [outline:none] font-manrope text-smi bg-[transparent] flex-1 flex flex-row items-start justify-start text-grey-scale-grey-4"
                placeholder="quantity (in kg)"
                type="number"
              />
            </section>
            <section className="absolute top-[90px] left-[0px] rounded-xl bg-grey-scale-white border-primary border-[1.5px] border-solid box-border w-[334px] h-[38px] flex flex-row items-center justify-start py-[13px] px-5">
              <input
                className="[border:none] [outline:none] font-manrope text-smi bg-[transparent] flex-1 flex flex-row items-start justify-start text-grey-scale-grey-4"
                placeholder="crop name"
                type="text"
              />
            </section>
            <section className="absolute top-[184px] left-[1px] rounded-xl bg-grey-scale-white border-primary border-[1.5px] border-solid box-border w-[251px] h-[38px] flex flex-row items-center justify-start py-[13px] px-5">
              <input
                className="[border:none] [outline:none] font-manrope text-smi bg-[transparent] flex-1 flex flex-row items-start justify-start text-grey-scale-grey-4"
                placeholder="proposed price"
                type="number"
              />
            </section>
            <section className="absolute top-[278px] left-[0px] rounded-xl bg-grey-scale-white border-primary border-[1.5px] border-solid box-border w-[334px] h-[38px] flex flex-row items-center justify-start py-[13px] px-5">
              <input
                className="[border:none] [outline:none] font-manrope text-smi bg-[transparent] flex-1 flex flex-row items-start justify-start text-grey-scale-grey-4"
                placeholder="description (optional)"
                type="text"
              />
            </section>
            <section className="absolute top-[231px] left-[0px] rounded-xl bg-grey-scale-white border-primary border-[1.5px] border-solid box-border w-[334px] h-[38px] flex flex-row items-center justify-start py-[13px] px-5">
              <input
                className="[border:none] [outline:none] font-manrope text-smi bg-[transparent] flex-1 flex flex-row items-start justify-start text-grey-scale-grey-4"
                placeholder="delivery date (dd/mm/yyyy)"
                type="date"
              />
            </section>
            <button
              className="cursor-pointer border-goldenrod-200 border-[2px] border-solid pt-[5px] px-2.5 pb-1.5 bg-limegreen absolute top-[184px] left-[262px] rounded-11xl box-border h-[38px] flex flex-row items-center justify-center gap-1"
              autoFocus={true}
            >
              <div className="w-[52px] relative text-sm tracking-[-0.1px] leading-[150%] font-semibold font-manrope text-grey-scale-white text-center flex items-center justify-center shrink-0">
                ask ai
              </div>
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/pluscircle-12.svg"
              />
            </button>
          </form>
        </div>
      </div>
      <header className="absolute w-full top-[81px] right-[0px] left-[0px] h-64 bg-[url('/public/title@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-3xs-3 text-gray-700 font-manrope">
        <div className="absolute w-[calc(100%_-_500px)] top-[calc(50%_-_109px)] right-[250px] left-[250px] h-[217.5px] overflow-hidden">
          <div className="absolute top-[87px] left-[calc(50%_-_390px)] w-[780px] h-[17.5px]">
            <div className="absolute top-[-3px] left-[calc(50%_-_59px)] tracking-[0.93px] leading-[17.5px] uppercase font-semibold flex items-center justify-center w-[118px] h-[17px]">
              Profile / contracts
            </div>
          </div>
          <div className="absolute w-full top-[104.5px] right-[0px] left-[0px] h-10 text-14xl-3 text-grey-scale-white">
            <div className="absolute top-[-0.5px] left-[calc(50%_-_193px)] leading-[40px] font-extrabold flex items-center justify-center w-[387px] h-10">
              CREATE CONTRACT
            </div>
          </div>
        </div>
      </header>
      <footer className="absolute w-full top-[956px] right-[0px] left-[0px] h-[379px] bg-[url('/public/footer@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-2xs-7 text-gainsboro-100 font-outfit">
        <img
          className="absolute top-[calc(50%_-_33.6px)] left-[832px] w-[448px] h-56 overflow-hidden object-cover"
          alt=""
          src="/7png@2x.png"
        />
        <div className="absolute top-[0px] left-[calc(50%_-_440px)] w-[880px] h-[406.9px]">
          <div className="absolute top-[338px] left-[calc(50%_-_163px)] leading-[19.2px] text-lightgray text-center flex items-center w-[325px] h-[19px]">
            <span className="w-full">
              <span className="font-medium">{`© Copyright 2024. All Rights Reserved by `}</span>
              <span className="font-semibold">Team FarmSure ☘️✨</span>
            </span>
          </div>
          <div className="absolute w-[calc(100%_-_618.7px)] top-[80px] right-[610.7px] left-[8px] border-gray-800 border-r-[0.7px] border-solid box-border h-[181.6px]">
            <div className="absolute top-[48.7px] left-[0px] leading-[19.2px] font-medium flex items-center w-[199.4px] h-[57.6px]">
              Using cutting-edge tech to provide farmers a marketplace where
              they are in control of their crops.
            </div>
            <div className="absolute h-[calc(100%_-_133.3px)] w-[calc(100%_-_81.3px)] top-[-0.2px] right-[71.3px] bottom-[133.5px] left-[10px]" />
            <img
              className="absolute top-[calc(50%_-_105.8px)] left-[0px] w-[54px] h-[54px] overflow-hidden object-cover"
              alt=""
              src="/link--logo--logo2xwhite1webp@2x.png"
            />
            <button className="cursor-pointer border-grey-scale-grey-4 border-[0.9px] border-solid py-2 px-[13.8px] bg-grey-scale-white absolute top-[124px] left-[0px] rounded-[17.24px] box-border w-[181px] flex flex-row items-center justify-center">
              <div className="flex-1 relative text-xs tracking-[0.34px] leading-[150%] font-outfit text-grey-scale-grey-4 text-center">
                create account
              </div>
            </button>
          </div>
          <div className="absolute top-[80px] left-[302.7px] text-base leading-[19.2px] font-semibold text-gray-100 flex items-center w-[55.8px] h-[19.2px]">
            Explore
          </div>
          <div className="absolute top-[118.9px] left-[302.7px] leading-[19.2px] font-medium flex items-center w-[43.6px] h-[19.2px]">
            Home
          </div>
          <div className="absolute top-[143.1px] left-[302.7px] leading-[19.2px] font-medium flex items-center w-[73.5px] h-[19.2px]">
            MarketPlace
          </div>
          <div className="absolute top-[167.3px] left-[303px] leading-[19.2px] font-medium flex items-center w-[66.6px] h-[19.2px]">
            Profile
          </div>
          <div className="absolute top-[215.7px] left-[303px] leading-[19.2px] font-medium flex items-center w-[66.6px] h-[19.2px]">
            About Us
          </div>
          <div className="absolute top-[191.5px] left-[303px] leading-[19.2px] font-medium flex items-center w-[66.6px] h-[19.2px]">
            FAQs
          </div>
          <div className="absolute top-[80px] left-[445px] text-base leading-[19.2px] font-semibold text-gray-100 flex items-center w-[92.1px] h-[19.2px]">
            Milestones
          </div>
          <img
            className="absolute top-[calc(50%_-_84.45px)] left-[445px] w-[194px] h-[53.3px]"
            alt=""
            src="/group-6.svg"
          />
          <img
            className="absolute top-[calc(50%_-_21.45px)] left-[445px] w-[189px] h-[53.3px]"
            alt=""
            src="/group-8.svg"
          />
          <div className="absolute top-[80px] left-[671px] text-base leading-[19.2px] font-semibold text-gray-100 flex items-center w-[90.3px] h-[19.2px]">
            Contact Info
          </div>
          <img
            className="absolute top-[119.2px] left-[671px] rounded-mini w-[30px] h-[30px]"
            alt=""
            src="/list--item.svg"
          />
          <div className="absolute top-[118.8px] left-[714.3px] text-3xs-3 leading-[16.8px] uppercase font-semibold text-gray-100 flex items-center w-[45.1px] h-[16.8px]">
            Address:
          </div>
          <div className="absolute top-[136px] left-[714px] leading-[19.2px] font-medium flex items-center w-[166px] h-[38px]">
            Heritage Institute of Technology, Anandapur, Kolkata
          </div>
          <img
            className="absolute top-[187.7px] left-[671px] rounded-mini w-[30px] h-[30px]"
            alt=""
            src="/list--item1.svg"
          />
          <div className="absolute top-[187.3px] left-[714.3px] text-3xs-3 leading-[16.8px] uppercase font-semibold text-gray-100 flex items-center w-[30.8px] h-[16.8px]">
            Email:
          </div>
          <div className="absolute top-[204px] left-[714px] leading-[19.2px] font-medium flex items-center w-[207px] h-[19px]">
            sachin.kumar.cse26@heritageit.edu.in
          </div>
        </div>
      </footer>
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[81.3px]">
        <nav className="m-0 absolute w-full top-[0px] right-[0px] left-[0px] bg-gray-100 h-[81.3px]" />
        <div className="absolute top-[2.7px] left-[calc(50%_-_400px)] w-[800px] h-[77px]">
          <div className="absolute h-full w-[calc(100%_-_640px)] top-[0px] right-[640px] bottom-[0px] left-[0px]">
            <img
              className="absolute top-[calc(50%_-_25.2px)] left-[-41px] w-44 h-[50px] overflow-hidden object-cover"
              alt=""
              src="/link--logo--logo2xpng1@2x.png"
            />
          </div>
          <div className="absolute h-full w-[calc(100%_-_160px)] top-[0px] right-[0px] bottom-[0px] left-[160px]">
            <div className="absolute w-[calc(100%_-_510px)] top-[15.3px] right-[29px] left-[481px] h-[46.7px]">
              <div className="absolute h-[calc(100%_-_20px)] top-[10px] right-[33px] bottom-[10px] rounded-[13.33px] bg-floralwhite w-[26.7px]">
                <img
                  className="absolute top-[7.5px] left-[8.8px] w-2.5 h-2.5 object-cover"
                  alt=""
                  src="/linkedin-21@2x.png"
                />
              </div>
              <div className="absolute h-[calc(100%_-_20px)] top-[10px] right-[0px] bottom-[10px] rounded-[13.33px] bg-floralwhite w-[26.7px]">
                <img
                  className="absolute top-[6.5px] left-[7.2px] w-[13px] h-[13px] object-cover"
                  alt=""
                  src="/github1@2x.png"
                />
              </div>
            </div>
            <div className="absolute top-[calc(50%_-_20.2px)] left-[calc(50%_-_290px)] w-[580.7px] h-[39.3px]">
              <a className="[text-decoration:none] absolute w-[calc(100%_-_550.7px)] top-[1px] right-[555.7px] left-[-5px] h-[38px] text-[inherit]">
                <div className="absolute top-[6.7px] left-[0px] leading-[24.19px] font-semibold flex items-center w-[30.2px] h-[24.2px]">
                  Home
                </div>
              </a>
              <a className="[text-decoration:none] absolute w-[calc(100%_-_514.7px)] top-[1px] right-[456.7px] left-[58px] h-[38px] text-[inherit]">
                <div className="absolute top-[7px] left-[-0.2px] leading-[24.19px] font-semibold flex items-center w-[66px] h-6">
                  Marketplace
                </div>
              </a>
              <a className="[text-decoration:none] absolute w-[calc(100%_-_539.7px)] top-[1px] right-[382.7px] left-[157px] h-[38px] text-[inherit]">
                <div className="absolute top-[7px] left-[3px] leading-[24.19px] font-semibold flex items-center w-[51px] h-6">
                  Profile
                </div>
              </a>
              <a className="[text-decoration:none] absolute w-[calc(100%_-_529.7px)] top-[5px] right-[234.7px] left-[295px] h-[38px] text-[inherit]">
                <div className="absolute top-[3px] left-[0px] leading-[24.19px] font-semibold flex items-center w-[51px] h-6">
                  About Us
                </div>
              </a>
              <a className="[text-decoration:none] absolute w-[calc(100%_-_549.9px)] top-[1px] right-[318.9px] left-[231px] h-[37.6px] text-[inherit]">
                <div className="absolute top-[6.7px] left-[0px] leading-[24.19px] font-semibold flex items-center w-[44.9px] h-[24.2px]">
                  FAQs
                </div>
              </a>
              <a className="[text-decoration:none] absolute w-[calc(100%_-_534.7px)] top-[1px] right-[155.7px] left-[379px] h-[38px] text-black">
                <div className="absolute top-[6.7px] left-[15px] leading-[24.19px] font-extrabold flex items-center w-[42.6px] h-[24.2px]">
                  Auth
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContract;
