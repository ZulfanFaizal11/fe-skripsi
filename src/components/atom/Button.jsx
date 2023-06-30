/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Button = ({
    icon = false,
    text = "Click Me"
}) => {
    return (
        <div className="flex items-center space-x-4 bg-[#FF5B24] text-white p-2 rounded-xl text-lg font-semibold">
            {icon && icon}
            <button>{text}</button>
        </div>
    )
}

export default Button