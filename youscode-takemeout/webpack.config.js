const webpack = require("@nativescript/webpack");

module.exports = (env) => {
  webpack.init(env);

  // Ajout d'une règle pour traiter les fichiers CSS avec PostCSS (et Tailwind)
  webpack.chainWebpack((config) => {
    // Supprimer les règles CSS existantes si nécessaire pour éviter les conflits
    config.module.rules.delete('css');

    // Ajouter une nouvelle règle pour les fichiers .css
    config.module
      .rule('css')
      .test(/\.css$/)
      .use('css')
        .loader('css-loader')
        .options({ importLoaders: 1 })
        .end()
      .use('postcss')
        .loader('postcss-loader')
        .end();
  });

  return webpack.resolveConfig();
};