const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/map",
        createProxyMiddleware({
            target: "https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2",
            changeOrigin: true,
        })
    );
};