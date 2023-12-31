import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selector';
import { addContacts } from 'redux/contacts/contactsOperations';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const validationSchema = yup.object({
  name: yup.string('Enter your name').required('Name is required'),
  number: yup
    .string('Enter number')
    .required('Enter number')
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (
        contacts.some(
          contact => contact.name.toLowerCase() === values.name.toLowerCase()
        )
      ) {
        alert(`${values.name} is already in contacts`);
        resetForm();

        return;
      }
      dispatch(
        addContacts({
          name: values.name.toLowerCase(),
          number: values.number,
        })
      );

      resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TextField
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{ width: '350px' }}
          />
          <TextField
            id="number"
            name="number"
            label="Number"
            type="tel"
            value={formik.values.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
            sx={{ width: '350px' }}
          />
          <Button
            color="primary"
            variant="contained"
            type="submit"
            sx={{ width: '250px' }}
          >
            Add contact
          </Button>
        </Box>
      </form>
    </div>
  );
};
