import { insertHeader, insertFooter, insertHead, insertNavButtons } from "./utils/page-layout.js";
import { readData } from "./utils/read-data.js";
import { insertValue } from "./utils/insert-value.js";
import { years, latest_year, updateYearSpans } from "./utils/update-years.js";

window.addEventListener("DOMContentLoaded", async () => {

    await insertHead("Home");
    insertHeader();
    insertNavButtons()

    // Insert values into homepage cards
    const GHGALL = await readData("GHGALL");
    const GHGALL_stat = "Total GHG";
    updateYearSpans(GHGALL, GHGALL_stat);

    console.log(GHGALL.data[GHGALL_stat][latest_year]["Northern Ireland"])
    insertValue("total-ghg", (GHGALL.data[GHGALL_stat][latest_year]["Northern Ireland"]["GRAND TOTAL"] / 1000).toFixed(1));
    
    insertFooter();

})