// All utils / helper functions go here..

export const executeScroll = (ref) => {
  if (ref?.current?.scrollIntoView) {
    return ref?.current.scrollIntoView({ behavior: "smooth" });
  }
};

export const imageBrowserCompatible = (url) => {
  var userAgent = window.navigator.userAgent;
  var isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === "[object SafariRemoteNotification]";
    })(
      !window["safari"] ||
        (typeof window["safari"] !== "undefined" &&
          window["safari"].pushNotification)
    );
  if (isSafari || userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
    return url.replace(".webp", ".png");
  } else {
    return url;
  }
};
