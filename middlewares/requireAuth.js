const requireAuth = (req, res, next) => {
  //   console.log(req?.session?.userId);
  if (req?.session?.userId) next();
  else res.status(401).json({ authed: false });
};

export default requireAuth;
