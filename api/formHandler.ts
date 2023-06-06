import type { VercelRequest, VercelResponse } from "@vercel/node";

// Node.js HTTPS module
import https from "https";

// "req" and "res": SITE <--XMLHttpRequest--> SERVERLESS FUNCTION
const formHandler = (req: VercelRequest, res: VercelResponse) => {
  const formData = req.body;

  // Set up api request options
  const requestOpts = {
    hostname: "api.web3forms.com",
    path: "/submit",
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };

  // Append Web3Forms access key to payload
  formData["access_key"] = process.env.WEB3FORMS_ACCESS_KEY;
  console.log(formData);

  // Create https request "instance"
  // "apiRequest" and "apiResponse": SERVERLESS FUNCTION <--https--> EMAIL API
  const apiRequest = https.request(requestOpts, (apiResponse) => {
    let responseBody = "";

    // Collect reponse data from API
    apiResponse.on("data", (chunk) => {
      responseBody += chunk;
    });

    // Send response back to client
    apiResponse.on("end", () => {
      if (apiResponse.statusCode) {
        res.status(apiResponse.statusCode).json(JSON.parse(responseBody));
      }
    });
  });

  // Define request error handling
  apiRequest.on("error", (error) => {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while sending your message." });
  });

  // Send request
  apiRequest.write(JSON.stringify(formData));
  apiRequest.end();
};

export default formHandler;
