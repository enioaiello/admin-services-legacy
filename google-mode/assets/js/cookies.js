const cookies = localStorage.getItem('cookies');
if (cookies != null || undefined) {
        console.log("Cookies: no cookies required!")
} else {
        let cookieBanner = document.createElement("div");
        cookieBanner.innerHTML = "This site uses cookies to enhance your experience. By continuing to browse this site, you agree to our use of cookies. You can also see our <a href='./assets/views/cookiesLogon.html' style='color: white; text-decoration: underline;'>cookies policy</a>";
        cookieBanner.style.backgroundColor = "#4169e1";
        cookieBanner.style.color = "white";
        cookieBanner.style.padding = "20px";
        cookieBanner.style.position = "fixed";
        cookieBanner.style.bottom = "0";
        cookieBanner.style.width = "100%";
        cookieBanner.style.textAlign = "center";
        let acceptButton = document.createElement("button");
        acceptButton.innerHTML = "Agree";
        acceptButton.style.padding =
        acceptButton.style.marginLeft = "10px";
        acceptButton.addEventListener("click", function () {
                document.cookie = "cookies_accepted=true; max-age=31536000; path=/";
                cookieBanner.style.display = "none";
                localStorage.setItem('cookies', 'accepted');
        });
        cookieBanner.appendChild(acceptButton);
        document.body.appendChild(cookieBanner);
}