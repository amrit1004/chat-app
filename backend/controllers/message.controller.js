import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
export  const sendMessage = async (req ,res)=>{
     try {
          const {message} = req.body;
          const {id:receiverId} = req.params;
          const senderId =req.user._id;
          let conversation =  await  Conversation.findOne({participants:{$all :[senderId ,receiverId]},
          }) 
          if(!conversation){ // create a new conversation
               conversation = await Conversation.create({
                   participants: [senderId ,receiverId] ,
               })
        } 
        const newMessage = new Message({
          senderId ,
          receiverId ,
          message ,
        })
        if(newMessage){ // pushing new message into array
          conversation.messages.push(newMessage._id, newMessage);
        }
        res.status(201).json({message: "Message sent successfully"})
     } catch (error) {
          console.log("Error in message controller :" ,error)
          res.status(500).send(newMessage);
     }
};
// 1:21:30