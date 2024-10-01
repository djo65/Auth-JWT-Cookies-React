export const log = (req, res, next) => {
  console.info(
    `${new Date().toLocaleDateString()} method "${req.method}" on path "${
      req.path
    }"`
  );
  next();
};
