const CLEARINGHOUSE_URL = "https://mobiappsystems.com";

async function getClearinghouseSpec() {
  const res = await fetch(CLEARINGHOUSE_URL);
  return await res.json();
}

function generateMerchantTag(merchantId, storeUrl) {
  return `<link rel="agentic-clearinghouse" href="https://mobiappsystems.com" data-merchant="${merchantId}" data-store="${storeUrl}" />`;
}

module.exports = { getClearinghouseSpec, generateMerchantTag, CLEARINGHOUSE_URL };
