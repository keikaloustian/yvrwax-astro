import type { VercelRequest, VercelResponse } from "@vercel/node";
// const https = require("https");
import https from "https";

// "req" and "res": SITE <--XMLHttpRequest--> SERVERLESS FUNCTION
const formHandler = (req: VercelRequest, res: VercelResponse) => {
  const formData = req.body;
  const requestOpts = {
    hostname: "https://api.web3forms.com",
    path: "/submit",
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  };

  // Append Web3Forms access key to payload
  formData["access_key"] = process.env.WEB3FORMS_ACCESS_KEY;

  // "request" and "response": SERVERLESS FUNCTION <--https--> EMAIL API
  const request = https.request(requestOpts, (response) => {
    // console.log(`Status Code: ${res.statusCode}`);

    response.on("data", (data) => {
      console.log(data.toString());
      // Handle the response data here
    });
  });

  request.on("error", (error) => {
    console.error(error);
    // Handle any errors that occur during the request
  });

  console.log(formData);
};

export default formHandler;
