const Button = ({ label, iconURL }) => {
  return (
    <button
    className="flex justify-center gap-2 px-7
    py-4 border font-montserrat text-lg leading-none
    bg-coral-red text-white rounded-full border-coral-red hover:bg-white
    hover:transition-all hover:text-coral-red">
        {label}
        <img
        src={iconURL}
        alt="arrow-righticon"
        className="ml rounded-full w-5 h-5"
         />
    </button>
  )
}

export default Button
