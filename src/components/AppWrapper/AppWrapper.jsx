import './AppWrapper.css'

const AppWrapper = ({children}) => {
  return (
    <div className="AppWrapper">
        {children}
    </div>
  )
}

export default AppWrapper