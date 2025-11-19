const stickers = ["💖 หัวใจชมพู", "🎀 โบว์น่ารัก", "✨ แสงระยิบระยับ"];
document.getElementById("gachaBtn").onclick = () => {
    const r = stickers[Math.floor(Math.random()*stickers.length)];
    document.getElementById("result").innerText = "คุณได้: " + r;
};
