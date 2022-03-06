const json = require('./allActivities.json');

export default async function handler(req, res) {
  const industries = json.data.allActivities
    .map((item) => item.sector.name)
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort((a, b) => a.length - b.length);
  res.status(200).json(industries);
}
