import pino from "pino-http";

const logger = pino({
  quietReqLogger: false,
  transport: {
    target: "pino-http-print",
    options: {
      destination: 1,
      all: true,
      translateTime: "SYS:yyyy-mm-dd HH:MM:ss",
    },
  },
  customLogLevel: function(res, err) {
    if (res.statusCode >= 400 && res.statusCode < 500) {
      return "warn";
    } else if (res.statusCode >= 500 || err) {
      return "error";
    }

    return "info";
  },
});

export default logger;
