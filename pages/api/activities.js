const data = require("./allActivities.json");

export default async function handler(req, res) {
  res.status(200).json(data);
}
