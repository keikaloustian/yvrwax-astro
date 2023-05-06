import type { VercelRequest, VercelResponse } from "@vercel/node";

const formHandler = (req: VercelRequest, res: VercelResponse) => {
  console.log(req.body);
};

export default formHandler;
