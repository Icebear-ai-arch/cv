const cheerio = require("cheerio");
async function printGrid(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            console.log("Failed document access");
            return;
        }

        const html = await response.text();
        const $ = cheerio.load(html);

        let characters = [];
        let maxX = 0;
        let maxY = 0;

        $("tr").each((index, row) => {
            let columns = $(row).find("td, th");

            if (columns.length < 3) {
                return;
            }

            let x = Number($(columns[0]).text().trim());
            let character = $(columns[1]).text().trim();
            let y = Number($(columns[2]).text().trim());

            if (
                !Number.isInteger(x) ||
                !Number.isInteger(y) ||
                x < 0 ||
                y < 0 ||
                character === ""
            ) {
                return;
            }

            characters.push({
                x: x,
                character: character,
                y: y
            });

            if (x > maxX) {
                maxX = x;
            }

            if (y > maxY) {
                maxY = y;
            }
        });

        if (characters.length === 0) {
            console.log("No character found.");
            return;
        }

        let grid = [];

        for (let y = 0; y <= maxY; y++) {
            grid[y] = [];

            for (let x = 0; x <= maxX; x++) {
                grid[y][x] = " ";
            }
        }

        for (let item of characters) {
            grid[item.y][item.x] = item.character;
        }

        for (let y = maxY; y >= 0; y--) {
            console.log(grid[y].join(""));
        }

    } catch (error) {
        console.log("Error:", error.message);
    }
}

const url = "https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub";

printGrid(url);
