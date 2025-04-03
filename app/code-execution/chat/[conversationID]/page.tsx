import { HomeNavbar } from '@/components/HomeNavbar';
import ChatwithAi from '@/components/ChatwithAi';
import CodeEditor from '@/components/CodeEditor';
import { Props } from '@/app/page';
import ChatListModal from '@/components/ChatListModal';

export default async function coder ({searchParams}: Props) {
  const showChatModal = await searchParams?.showchatlist;

  return (
    <div className=" min-h-screen bg-gradient-to-br from-black to-slate-900">
    <HomeNavbar />
    <ChatListModal isVisible={showChatModal} ></ChatListModal>
    <div className="overflow-auto px-2">
      <div className=" flex flex-col lg:flex-row gap-8 h-[calc(100vh-140px)]">
       <ChatwithAi />
       <CodeEditor />
      </div>
    </div>
  </div>
  );
}
