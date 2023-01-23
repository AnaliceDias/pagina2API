import app from "./src/app";
import "./src/config/setup";

const PORT = +process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port = ${PORT}`);
});