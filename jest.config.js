module.exports = {
  roots: ["<rootDir>/tests"],
  testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
  transform: {
    "^.+\\.(ts)$": "ts-jest",
  },
};
