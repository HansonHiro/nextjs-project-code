const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        MONGODB_USERNAME: "hansonhiromi",
        MONGODB_PASSWORD: "ZQO176lrOGDQNuIu",
        MONGODB_CLUSTERNAME: "cluster0",
        MONGODB_DATABASE: "my-site-dev",
      },
    };
  }
  return {
    env: {
      MONGODB_USERNAME: "hansonhiromi",
      MONGODB_PASSWORD: "ZQO176lrOGDQNuIu",
      MONGODB_CLUSTERNAME: "cluster0",
      MONGODB_DATABASE: "my-site",
    },
  };
};
