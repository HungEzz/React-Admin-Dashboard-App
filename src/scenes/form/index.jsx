import { Box, TextField, Button, useMediaQuery } from "@mui/material";
import { Formik, Form as Formikform } from "formik";
import { object, string } from "yup";
import Header from "../../components/Header";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contactNumber: "",
  address1: "",
  address2: "",
};

const phoneNumberRegex =
  /^(\+[1-9]{1,4}[ -]?)?(\([0-9]{2,3}\)[ -]?)?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = () =>
  object({
    firstName: string().required(),
    lastName: string().required(),
    email: string().email().required(),
    contactNumber: string()
      .matches(phoneNumberRegex, "invalid phoneNumbe")
      .required(),
    address1: string().required(),
    address2: string().required(),
  });

const handleSubmit = (values) => {
  console.log(values);
};
const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box sx={{ m: "20px" }}>
      <Header title="FORMS" subtitle="Create a New User" />
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Formikform onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "grid",
                gap: "30px",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                name="firstName"
                type="text"
                label="First Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                name="lastName"
                type="text"
                label="Last Name"
                onChange={handleChange}
                value={values.lastName}
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                name="email"
                type="email"
                label="Email"
                onChange={handleChange}
                value={values.email}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                name="contactNumber"
                type="text"
                label="Contact Number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contactNumber}
                error={!!touched.contactNumber && !!errors.contactNumber}
                helperText={touched.contactNumber && errors.contactNumber}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                name="address1"
                type="text"
                label="Address 1"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address1}
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                name="address2"
                type="text"
                label="Address 2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address2}
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "end", mt: "20px" }}>
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </Formikform>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
