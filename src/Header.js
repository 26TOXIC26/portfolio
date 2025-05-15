import logo from './logo.png';
import icon from './favicon.ico'
import './App.css';

function check() {
  const check = document.querySelector(".check-list");
  const menu = document.querySelector(".R-menu");
  if (check.checked) {
    menu.classList.remove("opacity-0", "translate-x-[150%]");
    menu.classList.add("opacity-100", "translate-x-0");
  } else {
    menu.classList.remove("opacity-100", "translate-x-0");
    menu.classList.add("opacity-0", "translate-x-[150%]");
  }
}

function Header() {
  document.title = "26 TOXIC 26";
  const link = document.querySelector("link[rel~='icon']");
  link.type = 'image/png';
  link.rel = 'icon';
  link.href = icon;
  if (document.body.clientWidth >= 768)
  {
    return (
      <div className="Header  h-[40px]">
        <div className="H-title">
          <img src={logo} className="logo h-[40px] w-[40px]" alt="logo" />
          <p className="f-title">26 TOXIC 26</p>
        </div>
        <div className="H-menu">
          <p className="f-menu">Home</p>
          <p className="s-menu">Projects</p>
          <div className="l-menu">
            <p>Contact Me</p>
          </div>
        </div>
      </div>
    );
  }
  else
  {
    return (
      <div className="Header h-[30px]">
        <div className="w-[145px] flex justify-between items-center h-[30px]">
          <img src={logo} className="logo h-[30px] w-[30px]" alt="logo" />
          <p className="text-lg w-[110px] h-[30px] flex justify-center items-center font-['Electrolize',_sans-serif]">26 TOXIC 26</p>
        </div>
        <label className="flex flex-col gap-2 w-8 z-10">
          <input className="check-list peer hidden" type="checkbox" onClick={check}/>
          <div
            className="rounded-2xl h-[3px] w-1/2 bg-white duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"
          ></div>
          <div
            className="rounded-2xl h-[3px] w-full bg-[#6A59BC] duration-500 peer-checked:-rotate-45"
          ></div>
          <div
            className="rounded-2xl h-[3px] w-1/2 bg-white duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"
          ></div>
        </label>
        <div className="R-menu z-0 absolute right-[11px] top-[18px] h-[170px] w-[130px] opacity-0 translate-x-[150%] transition-all duration-500 ease-in-out flex justify-around flex-col items-center bg-[#1E1E20] rounded-[10px] pt-[20px]">
          <p className="text-[#5e5ed0] text-lg font-normal h-[28px] w-[130px]">Home</p>
          <p className="text-[#ffffffc3] text-lg font-normal h-[28px] w-[91px]">Projects</p>
          <div className="w-[100px] h-[34px] rounded-lg bg-[#5454D4] shadow-[4px_4px_4px_#5454d456] flex items-center justify-center hover:">
            <p className="text-[14px] font-bold">Contact Me</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
