const autorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "Naseeb") {
    req.user = { name: "Naseeb Khan", id: 10 };
    next();
  } else {
    res.status(401).send(`Unautorized`);
  }
};
module.exports = autorize;
