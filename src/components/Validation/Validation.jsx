

const messages = {
    required : "This field is required",
    minLength : (min) => `This field must contain more than ${min} chars`,
    maxLength: (max) => `This field must contain less than ${max} chars`
}
const rules = {
    required: (val) => (val ? "Pass" : messages.required),
    minLength: (val, min) => val.length < min ? messages.minLength(min) : "Pass",
    maxLength: (val, max) => val.length > max ? messages.maxLength(max) : "Pass"
}
const validator = {
    title : (val, min, max) => {
        return [
            rules.required(val),
            rules.minLength(val, min),
            rules.maxLength(val, max)
        ]
    },
    body: (val, min, max) => {
        return [
            rules.required(val),
            rules.minLength(val, min),
            rules.maxLength(val, max)
        ]
    }
}
export default function Validation(title, body) {
    const errors = {title: "", body: ""}
    errors.title = validator.title(title, 7, 70).find((y) => y !== "Pass") || "";
    errors.body = validator.body(body, 7, 200).find((y) => y !== "Pass") || "";
  return {...errors}
}
