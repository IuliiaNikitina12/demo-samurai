import s from "./FormControls.module.css";

const FormControl = ({input, meta, errors, ...props}) => {
    // debugger;
    // const hasError = meta.touched && meta.error;
    const hasError = errors;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            { hasError && errors.type === 'required' && <span>The field is requiered</span>}
            { hasError && errors.type === 'maxLength' && <span>Max length exceeded</span>}

        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>  
}