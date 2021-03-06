const path = require("path");

module.exports = {
  entry: "./client/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.jsx/,
        exclude: [/node_modules/, /bundle.js/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        loader:
          "style-loader!css-loader?modules&importLoaders=true&localIdentName=[name]__[local]___[hash:base64:5]"
      }
    ]
  }
};
