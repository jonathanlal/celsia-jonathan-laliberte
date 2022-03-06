const json = require('./allActivities.json');

export default async function handler(req, res) {
  const selectedSectors = JSON.parse(req.body);

  const data = selectedSectors.reduce(
    (o, key) => ({
      ...o,
      [key]: json.data.allActivities.filter(function (item) {
        return key.includes(item.sector.name);
      })
    }),
    {}
  );

  res.status(200).json(data);
}
