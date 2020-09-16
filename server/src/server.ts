import { app } from "./app";

const PORT = 8000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`server is running on port http://localhost:${PORT}`)
});
