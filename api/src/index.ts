import { connect } from "./database";
import app from "./app";

const port = 3008;

connect();

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
