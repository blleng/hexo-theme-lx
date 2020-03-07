"use strict";
hexo.extend.helper.register("lx_font", () => {
  var config = hexo.theme.config.font;
  if (!config || !config.enable) return "";
  var fontDisplay = "&display=swap";
  var fontSubset = "&subset=latin,latin-ext";
  var fontStyles = ":300,300italic,400,400italic,700,700italic";
  var fontHost = config.host || "//fonts.googleapis.com";
  var fontFamilies = ["codes","else"].map(item => {
    if (config[item] && config[item].family && config[item].enable) {
      return config[item].family + fontStyles;
    }
    return "";
  });
  fontFamilies = fontFamilies.filter(item => item !== "");
  fontFamilies = [...new Set(fontFamilies)];
  fontFamilies = fontFamilies.join("|");
  return fontFamilies ? `<link rel="stylesheet" href="${fontHost}/css?family=${fontFamilies.concat(fontDisplay, fontSubset)}">` : "";
});
