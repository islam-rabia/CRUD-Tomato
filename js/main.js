import { addActive } from "./add-active.js";
import { addProduct } from "./create-product.js";
import { linkManagement } from "./link-management.js";
import { generateData } from "./read-product.js";
import { sliderDashboard } from "./slider-dashboard.js";
import { uploadFile } from "./upload-file.js";

addActive();
linkManagement();
uploadFile();
addProduct();
generateData();
sliderDashboard();
