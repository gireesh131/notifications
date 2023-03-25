const Notification = props => {
  //  Write your code here.
  const {containerClassName,informationUrl,message} = props ;
  return(
      <div className ={containerClassName}>
          <img className="icon" src ={informationUrl} />
          <p className ="message">{message}</p>
      </div>
  )
}

const element = (
  //  Write your code here.
  <div class ="bg-container">
      <h1 class="main-hedding">Notifications</h1>
      <Notification containerClassName = "information" message ="Information Message" informationUrl ="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>
      <Notification containerClassName = "sucess" message ="Sucess Message" informationUrl ="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"/>
      <Notification containerClassName = "warning" message ="Warning Message" informationUrl ="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"/>
      <Notification containerClassName = "danger" message ="Danger Message" informationUrl ="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png/>
      

  </div>   
)

ReactDOM.render(element, document.getElementById('root'))
