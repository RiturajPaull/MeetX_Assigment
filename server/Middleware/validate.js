const validate = (schema) => async (req, resp, next) => {
  try {
    console.log("Here", req.body);
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    resp.status(400).json({ error: "Validation failed" });
  }
};

export default validate;
