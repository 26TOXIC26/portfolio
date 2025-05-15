import "./App.css";

function Home() {
	if (document.body.clientWidth >= 768) {
		return (
		<div className="Home h-[687px] w-[95%] border absolute right-0 top-[150px] flex justify-between xl:items-center">
			<div className="Main-C w-[52%] h-[435px]">
				<div className="T-P h-[350px] w-[100%]lex justify-between items-center flex-col">
					<div className="w-[100%] h-[168px] flex items-end justify-start border pb-2">
						<p className="B-title 2xl:text-[59px] xl:text-[50px] lg:text-[40px] md:text-[32px]">JUST A CRAZY DEVELOPER</p>
					</div>
					<div className="M-parag h-[168px] border">
						<p className="2xl:text-[17px] xl:text-[16px] lg:text-[14px] md:text-[13px] text-[#9EB8B8]" >I'm Abdelilah, a passionate software engineering student at 1337 School. With a strong foundation in C, C++ and Front-end Development, I'm driven by a deep curiosity to understand how things work under the hood. I enjoy solving complex problems, building efficient systems, and continuously learning new technologies — from back-end logic to modern web development frameworks. I believe that clean code is a form of craftsmanship, and I'm always looking for new challenges that push me to grow as a developer.</p>
					</div>
				</div>
			</div>
			<div className="Image h-[100%] w-[48%] border"></div>
		</div>
		);
	}
}

export default Home;
