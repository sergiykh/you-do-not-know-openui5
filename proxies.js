/**
 * @author Kholod, Serhii
 */

const proxy = require('http-proxy-middleware');

module.exports =
  /**
   * openui5 runtime/mobile-runtime/sdk packages at http://openui5.org/download.html
   */
  [
    proxy("/resources", {
      target: "https://openui5.hana.ondemand.com/1.50.8",
      changeOrigin: true,
      onProxyRes: (p) => {
        p.headers["cache-control"] = "public, max-age=31536000"
      }
    }),
    proxy("/test-resources", {
      target: "https://openui5.hana.ondemand.com/1.50.8",
      changeOrigin: true,
      onProxyRes: (p) => {
        p.headers["cache-control"] = "public, max-age=31536000"
      }
    })
  ];
