
console.clear()
let keyDownEvent = new KeyboardEvent("keydown", { key: "-" });
let keyUpEvent = new KeyboardEvent("keyup", { key: "-" });
var total = 0;
var masajalan = -30;
console.log("%c🤖:💬popcat.click hanya menerima 800 popcat setiap IP setiap 30 saat, jika ia menghantar lebih daripada 10 kali ia akan ditandakan mata merah sebagai menggunakan robot. cookie mesti dikosongkan",  "background: #050; color: #0f0");
console.log("%c🤖:🔄Bot mula menghantar 800 pop setiap 30 saat ", "background: #050; color: #0f0");
console.log("%c🤖:🕐Masa AFK Setiap 1 Minit = 1600 klik | 1 Jam = 96000", "background: #050; color: #0f0");
console.log("%cMake by @Alipje29",  "background: #00CDFF; color: #000");


function runtime(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " Day ☀️, " : " Days ☀️, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " Hour 🕐, " : " Hours 🕐, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " Minute ⏰, " : " Minutes ⏰, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " Second ⏱️" : " Seconds ⏱️") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

function legitPop() {
  document.dispatchEvent(keyDownEvent);
  document.dispatchEvent(keyUpEvent);
}

async function legitMassPop(popCount) {
  for (let i = 0; i < popCount; i++) {
    legitPop();
  }
}


function legitClearCookie(cookieName) {
  let cookies = document.cookie.split(";").map((cookieString) => {
    let cookieArray = cookieString.trim().split("=");
    return {
      name: cookieArray[0] ? cookieArray[0] : "",
      propertyString: cookieArray[1] ? cookieArray[1] : ""
    };
  });

  let filteredCookies = cookies.filter(
    (cookie) =>
      cookie.propertyString && cookie.name.toLowerCase() !== cookieName
  );
  let cookieStringArray = filteredCookies.map((cookie) =>
    cookie.name.concat("=").concat(cookie.propertyString)
  );
  let cookieString = cookieStringArray.join("; ");

  document.cookie = cookieString;
}

function legitResetSequentialMaxPops() {
  let vueElement = document.getElementById("app").__vue__;

  vueElement.sequential_max_pops = 0;
}


function legitMassPopProcess(popCount, cookieName) {
  legitClearCookie(cookieName);
  legitResetSequentialMaxPops();
  legitMassPop(popCount);
   total += 800;
   masajalan += 30;
   let time = runtime(masajalan)
    console.log(`[${new Date().toLocaleTimeString()}] %c🤖: ✅ 800 klik berjaya dihantar (📶bilangan kali dihantar：${total}）🕐Masa Bot Berjalan: ${time}`, "background: #050; color: # 0f0");
    return;
}

function legitStartAutomation(popCount, interval = 30e3, cookieName = "bot") {
  legitMassPopProcess(popCount, cookieName);
  setInterval(() => {
    legitMassPopProcess(popCount, cookieName);
  }, interval);
}
legitStartAutomation(800)


