module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env")({ stage: 0 }),
    ...(process.env.HUGO_ENVIRONMENT === "production"
      ? [require("cssnano")]
      : []),
  ],
};
