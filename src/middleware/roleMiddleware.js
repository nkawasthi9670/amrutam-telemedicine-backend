module.exports = function allowRoles(...allowedRoles) {
  return (req, res, next) => {
    try {
      const user = req.user; 

      if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      console.log("USER ROLE:", req.user.role);
console.log("ALLOWED ROLES:", allowedRoles);

      if (!allowedRoles.includes(user.role)) {
        return res.status(403).json({
          message: "Forbidden: insufficient permissions",
        });
      }

      next();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
};
