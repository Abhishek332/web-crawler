import axios from "axios";
import * as cheerio from "cheerio";

const crawler = async () => {
    try {
        let { data } = await axios.get("https://abhishek332.github.io/Fresh-Meals/");
        let $html = cheerio.load(data);
        const links = $html('a')
            .map((i, a) => a.attribs.href).get();
        console.log(links);
    } catch (error) {
        console.log("Error : ", error);
    }
};

crawler();