const express = require("express");
const cross = require("cors");
const connectDb = require("./config/db");
const { swaggerUi, specs } = require("./config/swagger");
require("dotenv").config();

const app = express();
connectDb();

app.use(
  cross({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
      "https://culture-connect-two.vercel.app"
    ], credentials: true,
  })
);
app.use(express.json());

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
  customCss: `
    .topbar-wrapper img { content: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzg5NzVGRiIvPgo8cGF0aCBkPSJNMTAgMTVIMzBWMjVIMTBWMTVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K'); }
    .swagger-ui .topbar { background-color: #8975FF; }
    .swagger-ui .info h1 { color: #8975FF; }
  `,
  customSiteTitle: "Neighborly API Documentation",
  customfavIcon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzg5NzVGRiIvPgo8cGF0aCBkPSJNMTAgMTVIMzBWMjVIMTBWMTVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
}));

//routes

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/locations", require("./routes/locationRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
