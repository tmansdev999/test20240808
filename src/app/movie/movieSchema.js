import * as Yup from "yup";
export const movieSchema = Yup.object().shape({
    title: Yup.string().min(2).max(32).required('Required'),
    publish_year:Yup.string().required("Required")
});