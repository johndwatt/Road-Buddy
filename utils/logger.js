const logger = function (req, res, next) {
    /**
     * Logger function is a custom middleware that logs in the console the requested url, http method, and the local time the request was made.
     */
    console.log(`URL:${req.url} | ${req.method} | ${new Date().toLocaleTimeString()}`);
    next();
};

module.exports = logger;