module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'production',
  entry: './src/Components/App.jsx',
  output: {

    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

    ],
  },
};
