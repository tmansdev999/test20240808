import * as Yup from "yup";
export const loginSchema = Yup.object().shape({
    email: Yup.string().min(2).max(32).email('Invalid email').required('Required'),
    password: Yup.string().min(6).max(32).required('Required'),
});