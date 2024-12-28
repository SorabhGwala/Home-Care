import app from "./index.js";  
import connectDb from "./config/db.js";  

const PORT = 5454;

app.listen(PORT, async () => {
    const isDbConnected = await connectDb(); 
    
    if (isDbConnected) {
        console.log("Ecommerce API listing on     port ", PORT);
    } else {
        console.log("Failed to connect to DB");
    }
});
