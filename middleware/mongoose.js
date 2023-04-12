const { connections, connect } = require("mongoose");

const connectDb = (handler) => async (req, res) => {
  if (connections[0].readyState) {
    return handler(req, res);
  }
  await connect(process.env.MONGODB_URI);
  return handler(req, res);
};

export default connectDb;
