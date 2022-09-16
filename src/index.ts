import axios from "axios";

const crawler = async () => {
    try {
        let response = await axios.get("https://abhishek332.github.io/Fresh-Meals/");
        console.log(response);
    } catch (error) {
        console.log("Error : ", error);
    }
};

crawler();