import {create}  from 'zustand';
// it is like a redux store

const useConversation = create((set)=>({
    selectedConversation : null ,
    setSelectedConversation: (selectedConversation) =>set({selectedConversation}),
    messages:[] ,
    setMessages: (messages) => set({messages})
}))
export default useConversation