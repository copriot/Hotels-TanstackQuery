import { type FC } from "react";
import { Field, Form, Formik } from "formik";
import { initialValues, inputs } from "../../utils/constants";
import type { PlaceData } from "../../types";
import { schema } from "../../utils/schema";
import { useCreatePlace } from "../../service";

const Create: FC = () => {
  const { mutate, isPending } = useCreatePlace();
  const handleSubmit = (values: PlaceData) => {
    console.log(values);
    mutate(values);
  };
  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ errors, touched }) => {
          console.log(errors);
          return (
            <Form className="max-w-2xl mx-auto grid gap-3">
              {inputs.map((input, index) => (
                <div key={index} className="field">
                  <label>{input.label}</label>
                  <Field
                    name={input.name}
                    placeholder={input.placeholder}
                    className="input"
                    type={input.type || "text"}
                  />
                  {errors[input.name as keyof typeof errors] &&
                  touched[input.name as keyof typeof touched] ? (
                    <p className="text-rose-500 text-xs">
                      {errors[input.name as keyof typeof errors]}
                    </p>
                  ) : (
                    <span className="text-xs text-transparent select-none">.</span>
                  )}
                </div>
              ))}
              <button
                disabled={isPending}
                type="submit"
                className="header-button bg-teal-700 text-white transition hover:bg-teal-700/90"
              >
                Oluştur
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Create;
