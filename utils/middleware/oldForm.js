module.exports = (req, res, next) => {

  req.setOldForm = (errors) => {
    let prettyErrors = {};
    Object.keys(errors.errors).forEach(err => {
      prettyErrors[err] = errors.errors[err].message;
    });

    req.session.oldForm = {
      errors: prettyErrors,
      values: req.body
    };
  };

  if (!req.session.oldForm) req.session.oldForm = {
    errors: null,
    values: null
  };

  res.locals.oldForm = req.session.oldForm;
  delete req.session.oldForm;
  next();
};
