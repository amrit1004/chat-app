import useGetConversations from "../../hooks/useGetConversation";
import Conversation from "./Conversation";
import { getRandomEmoji } from "../../utils/emoji";
const Conversations = () => {
	  
	 const {loading , conversations} = useGetConversations();
	 
	return (
		<div className='flex flex-col py-2 overflow-auto'>
			{conversations.map((conversation ,idx)=>(
				<Conversation key = {conversation._id}
				  conversation = {conversation}
				  emoji = {getRandomEmoji()}
				  lastIdx = {idx === conversations.length - 1}
				/>
			))}
			{loading? <span className="mx-auto loading loading-spinner"></span>: null}
		</div>
		
	);
};
export default Conversations;