const server = require("./app");
const port = process.env.PORT;

server.listen(port, (req, res) => {
   console.log(`Server Running listen in port ${port}`);
});
