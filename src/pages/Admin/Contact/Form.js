import { Fab, TextField } from '@mui/material';
import React from 'react';

const FormContact = ({ formik }) => {
    return (
        <>
            <TextField
                error={formik.errors.phone && formik.touched.phone ? true : false}
                size="small"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                name="phone"
                sx={{ width: "100%", marginBottom: "20px" }}
                label={formik.errors.phone && formik.touched.phone ? (`${formik.errors.phone}`) : ("Tel")}
            />
            <TextField
                error={formik.errors.email && formik.touched.email ? true : false}
                size="small"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                name="email"
                sx={{ width: "100%", marginBottom: "20px" }}
                label={formik.errors.email && formik.touched.email ? (`${formik.errors.email}`) : ("Email")}
            />
            <TextField
                error={formik.errors.facebook && formik.touched.facebook ? true : false}
                size="small"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.facebook}
                name="facebook"
                sx={{ width: "100%", marginBottom: "20px" }}
                label={formik.errors.facebook && formik.touched.facebook ? (`${formik.errors.facebook}`) : ("Facebook")}
            />
            <TextField
                error={formik.errors.linkedn && formik.touched.linkedn ? true : false}
                size="small"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.linkedn}
                name="linkedn"
                sx={{ width: "100%", marginBottom: "20px" }}
                label={formik.errors.linkedn && formik.touched.linkedn ? (`${formik.errors.linkedn}`) : ("Linkedn")}
            />
            <TextField
                error={formik.errors.github && formik.touched.github ? true : false}
                size="small"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.github}
                name="github"
                sx={{ width: "100%", marginBottom: "20px" }}
                label={formik.errors.github && formik.touched.github ? (`${formik.errors.github}`) : ("Git Hub")}
            />
            <TextField
                error={formik.errors.instagram && formik.touched.instagram ? true : false}
                size="small"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.instagram}
                name="instagram"
                sx={{ width: "100%", marginBottom: "20px" }}
                label={formik.errors.instagram && formik.touched.instagram ? (`${formik.errors.instagram}`) : ("Instagram")}
            />

            <input
                id="upload-photo"
                name="mydata"
                type="file"
                accept="application/pdf" // PDF formatını təyin et
                onChange={(e) => {
                    const file = e.target.files[0];
                    formik.setFieldValue('mydata', file); // Formik dəyərinə faylı əlavə edin
                }}
                style={{ display: "none" }} // Görünməz etmək üçün
            />

            <label htmlFor="upload-photo">
                <Fab
                    color="info"
                    size="small"
                    component="span"
                    aria-label="add"
                    variant="extended"
                    style={{ marginTop: "10px", width: "100%" }}
                >
                    {formik.errors.mydata && formik.touched.mydata ? (
                        <span style={{ color: "red", fontSize: "14px" }}>
                            {formik.errors.mydata}
                        </span>
                    ) : (
                        <span style={{ color: "white", fontSize: "14px" }}>
                            + Upload CV
                        </span>
                    )}
                </Fab>
            </label>
        </>
    );
}

export default FormContact;
