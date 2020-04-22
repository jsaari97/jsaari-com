module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env")({
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    }),
    ...(process.env.HUGO_ENVIRONMENT === "production"
      ? [require("cssnano")]
      : []),
  ],
};
