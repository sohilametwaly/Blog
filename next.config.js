const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_EXPORT,
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
} = require("next/constants");

module.exports = (phase) => {
  if (phase == PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "foodDelivery",
        mongodb_password: "B1NqbSJJjMIpG9ip",
        mongodb_database: "blog",
      },
    };
  }
  return {
    env: {
      mongodb_username: "foodDelivery",
      mongodb_password: "B1NqbSJJjMIpG9ip",
      mongodb_database: "blog",
    },
  };
};
