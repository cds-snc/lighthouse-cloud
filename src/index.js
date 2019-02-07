require = require("esm")(module); // eslint-disable-line no-global-assign
require("dotenv-safe").config({ allowEmptyValues: true });

const handle = require("./handler").handle;

const scanURL = async (request, response) => {
  console.log(request.query);
  if (request.query.secret === process.env.SECRET) {
    const data = await handle(request.query.url);
    response
      .status(200)
      .set("Content-Type", "application/json")
      .send(data);
  } else {
    response.status(400).send("Secret is not valid");
  }
};

// used for local testing
(async () => {
  const argv = require("minimist")(process.argv.slice(2));
  const { mockPayload } = argv;
  if (mockPayload) {
    const result = await handle("https://digital.canada.ca");
    console.log(result);
  }
})();

module.exports.scanURL = scanURL;
