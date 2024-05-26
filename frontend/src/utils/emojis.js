export const funEmojis = [
	"🏙️ NYC", // New York City
	"🌉 SFO", // San Francisco
	"🌆 LAX", // Los Angeles
	"🌃 CHI", // Chicago
	"🏰 LDN", // London
	"🗼 PAR", // Paris
	"🕌 IST", // Istanbul
	"🏯 TYO", // Tokyo
	"🏰 ROM", // Rome
	"🏝️ RIO", // Rio de Janeiro
	"🏜️ CAI", // Cairo
	"🏟️ ATH", // Athens
	"🏛️ MOS", // Moscow
	"🏖️ SYD", // Sydney
	"🏝️ HNL", // Honolulu
];

export const getRandomEmoji = () => {
	return funEmojis[Math.floor(Math.random() * funEmojis.length)];
};
