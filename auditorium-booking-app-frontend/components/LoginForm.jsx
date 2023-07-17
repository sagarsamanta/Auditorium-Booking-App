'use client'

import { useFormik } from "formik";
import * as Yup from 'yup';

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Email Address / Employee ID / Mobile No. is required'),
            password: Yup.string().required('Password is required'),
        }),
        onSubmit: (values) => {
            console.log('values', values);
        }
    });
    return (
        <>
            <div className="p-5 bg-white md:flex-1">
                <h3 className="my-4 text-2xl font-semibold text-skin-base">Login</h3>
                <form action="#" className="flex flex-col space-y-5" onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="username" className="text-sm font-semibold text-skin-base">Email Address / Employee ID / Mobile No.</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            className={`px-4 py-2 transition duration-300 border ${formik.errors.username ? 'border-red-500' : ''} text-skin-text-body rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-skin-muted`}
                        />
                        <span className="text-xs text-red-500">{formik.touched.username && formik.errors.username}</span>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="text-sm font-semibold text-skin-base">Password</label>
                            <a href="#" className="text-sm text-skin-base hover:underline">Forgot Password?</a>
                        </div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            className={`px-4 py-2 transition duration-300 border ${formik.errors.password ? 'border-red-500' : ''} text-skin-text-body rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-skin-muted`}
                        />
                        <span className="text-xs text-red-500">{formik.touched.password && formik.errors.password}</span>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-lg font-semibold transition-colors duration-300 bg-skin-fill text-skin-inverted rounded-md shadow hover:bg-skin-fill/95 focus:outline-none focus:ring-blue-200 focus:ring-4"
                        >
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginForm;