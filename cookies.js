document.getElementById("cookie-accept").addEventListener("click", function() {
    document.getElementById("cookie-banner").style.display = "none";
    // Optional: Save a cookie to remember user's consent
    document.cookie = "cookieConsent=true; max-age=" + 60*60*24*30 + "; path=/";
  });
  
  // Check if consent is already given
  window.onload = function() {
    if (document.cookie.split(';').some((item) => item.trim().startsWith('cookieConsent='))) {
        document.getElementById("cookie-banner").style.display = "none";
    }
  };
