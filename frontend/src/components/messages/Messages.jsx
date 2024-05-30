import Message from "./Message";
import { useEffect, useRef } from "react";
import useGetMessaage from "../../hooks/useGetMessaage";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenMessages from "../../hooks/useListenMessage";
const Messages = () => {
	const { messages, loading } = useGetMessaage();
	useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
	return (
		<div className='flex-1 px-4 overflow-auto'>
			{!loading && messages.length > 0 && messages.map((message)=>{
				 return 	<div key={message._id} ref={lastMessageRef}>
				 <Message message={message} />
			 </div>
			})}
			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
 		</div>
	);
};
export default Messages;