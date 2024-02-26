export const getContact = (fullName, emailAddress, phoneNumber, message) => {
     const messages = JSON.parse(localStorage.getItem("messages")) || []
     
     const newMessage = {
          fullName,
          emailAddress,
          phoneNumber,
          message
     }

     messages.push(newMessage)

     localStorage.setItem("messages", JSON.stringify(messages))

     console.log(JSON.parse(localStorage.getItem("messages")) || [])
}