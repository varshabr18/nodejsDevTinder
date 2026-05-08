const adminAuth = (req, res, next) => {
  const token = "testingtoken";
  const isAdminValidated = token === "testingtoken";
  if (!isAdminValidated) {
    res.status(400).send("unauthorized request");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  const token = "testingtoken";
  const isAdminValidated = token === "testingtoken";
  if (!isAdminValidated) {
    res.status(400).send("unauthorized request");
  } else {
    next();
  }
};

module.exports = { adminAuth, userAuth };
