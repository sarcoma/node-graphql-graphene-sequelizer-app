import app from "./app";
import {port} from './constants/server';
import {syncSchema} from "./orm/schema";

syncSchema();

app.listen(port, () => console.log(`App listening on port ${port}!`));
