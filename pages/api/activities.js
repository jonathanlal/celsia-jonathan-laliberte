const json = require('./allActivities.json'); //comment this line to simulate error

export default async function handler(req, res) {
  const selectedSectors = JSON.parse(req.body);

  try {
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
  } catch (error) {
    res.status(500).send({ error });
  }
}
