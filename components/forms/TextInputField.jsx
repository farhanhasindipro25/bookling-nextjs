import cn from "@/utils/UtilsKit";

const INPUT_LABEL_STYLES =
  "appearance-none block text-base font-semibold text-neutral-700";
const INPUT_BOX_STYLES =
  "appearance-none block w-full text-sm rounded-md text-neutral-500 border border-neutral-300 p-3 placeholder-neutral-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 active:border-primary-500 cursor-text";

export default function TextInputField(props) {
  const {
    type = "text",
    name,
    id,
    label,
    placeholder,
    className,
    value,
    onChange,
    defaultValue,
  } = props;

  const INPUT_FIELD_STYLES = cn(INPUT_BOX_STYLES, className);
  return (
    <div className="flex flex-col w-full gap-1">
      <label htmlFor={id} className={INPUT_LABEL_STYLES}>
        {label}
      </label>
      <input
        type={type}
        defaultValue={defaultValue}
        id={id}
        name={name}
        placeholder={placeholder}
        className={INPUT_FIELD_STYLES}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
