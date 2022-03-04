module.exports = function (api) {
  const presets = [['next/babel']];
  api.cache(true);
  const plugins = [
    'styled-components',
    {
      ssr: true,
      displayName: true,
    },
  ];
  return { presets, plugins: [plugins] };
};
