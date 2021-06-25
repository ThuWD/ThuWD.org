    const genPath =  {
        audioNet: () => {
            if (window.location.hostname === "thuwd.org" || window.location.hostname === "www.thuwd.org" || window.location.hostname === "localhost") {
                return "https://audionet.thuwd.org/"
            }
            else if (window.location.hostname === "thuwd-site.web.app" || window.location.hostname === "thuwd-site.firebaseapp.com") {
                return "https://audionet.web.app/"
            }
        }
    }
        export default genPath;