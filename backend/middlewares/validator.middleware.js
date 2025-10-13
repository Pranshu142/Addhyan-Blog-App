import { body } from "express-validator";

export const validateUserRegistration = [
  // Full name validation
  body("fullname.firstname")
    .isString()
    .withMessage("First name must be a string")
    .isLength({ min: 3, max: 50 })
    .withMessage("Firstname must be 3–50 characters long"),

  body("fullname.lastname")
    .isString()
    .withMessage("Last name must be a string")
    .isLength({ min: 3, max: 50 })
    .withMessage("Lastname must be 3–50 characters long"),

  // Username validation
  body("username")
    .isString()
    .withMessage("Username must be a string")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long")
    .matches(/^[a-z0-9]+$/)
    .withMessage("Username should contain only lowercase letters and numbers"),

  // Password validation
  body("password")
    .isLength({ min: 8, max: 64 })
    .withMessage("Password must be 8–64 characters long")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)
    .withMessage(
      "Password must include uppercase, lowercase, number, and special character"
    ),

  // Email validation
  body("email").isEmail().withMessage("Invalid email address").normalizeEmail(),

  // Mobile number validation
  body("mobileNumber")
    .isLength({ min: 10, max: 10 })
    .withMessage("Mobile number must be exactly 10 digits")
    .matches(/^[0-9]{10}$/)
    .withMessage("Mobile number must contain only digits"),
];
export const validateUserLogin = [
  // Either email or username must be present
  body().custom((value, { req }) => {
    if (!req.body.username && !req.body.email) {
      throw new Error("Either username or email is required");
    }
    return true;
  }),

  // Username validation (only if provided)
  body("username")
    .optional()
    .isString()
    .withMessage("Username must be a string")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long")
    .matches(/^[a-z0-9]+$/)
    .withMessage("Username should contain only lowercase letters and numbers"),

  // Email validation (only if provided)
  body("email")
    .optional()
    .isEmail()
    .withMessage("Invalid email address")
    .normalizeEmail(),

  // Password validation
  body("password")
    .exists()
    .withMessage("Password is required")
    .isLength({ min: 8, max: 64 })
    .withMessage("Password must be 8–64 characters long")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)
    .withMessage(
      "Password must include uppercase, lowercase, number, and special character"
    ),
];
