(function() {
  if (window.location.href.includes("/checkouts/")) {
    const whatsappUrl = "https://wa.me/923001234567?text=Hi%2C%20I%20placed%20an%20order%20on%20your%20store.%20Please%20confirm%20my%20order.";

    const btn = document.createElement("a");
    btn.href = whatsappUrl;
    btn.innerText = "Tap Here To Confirm on WhatsApp";
    btn.target = "_blank";
    btn.style = `
      display:inline-block;
      padding:12px 24px;
      background:#25D366;
      color:white;
      border-radius:10px;
      text-decoration:none;
      font-weight:bold;
      margin-top:20px;
      font-size:16px;
    `;

    const container = document.querySelector(".content-box");
    if (container) container.appendChild(btn);
  }
})();
