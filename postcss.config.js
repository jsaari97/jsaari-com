module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env")({
      stage: 3,
      features: {
        "nesting-rules": true,
        "custom-media-queries": true,
      },
    }),
    ...(process.env.HUGO_ENVIRONMENT === "production"
      ? [require("cssnano")]
      : []),
  ],
};
