import app from "./app";

const PORT = process.env.SERVER_PORT || 3003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
