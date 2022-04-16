
import PropType from "prop-types"

function Button({children,type,version,isBDisabled}) {
  return (
   <button
   type={type}
   disabled={isBDisabled}
   className={`btn btn-${version}`}
   >
       {children}
   </button>
  )
}
Button.defaultProps={
type:"Button",
isBDisabled:false,
version:"primary",
}

Button.prototype={
    type:PropType.string,
    isBDisabled: PropType.bool,
    version:PropType.string,
}
export default Button