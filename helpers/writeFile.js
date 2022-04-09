import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export default (filename, data) => {
    let filePath =
        path.join(path.dirname(fileURLToPath(import.meta.url))) +
        `/algorithm/data/${filename}.json`;

    fs.writeFile(
        filePath.replace("\\helpers", ""),
        JSON.stringify(data),
        (err) => {
            if (err) {
                console.log(err);
            }
        }
    );
};
