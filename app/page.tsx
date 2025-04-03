
import { Promptarea } from '../components/Promptarea';
import Features from '../components/Features';
import { HomeNavbar } from '../components/HomeNavbar';
import StartingModal from '../components/StartingModal';
import ChatListModal from '@/components/ChatListModal';

export interface Props {
  searchParams: Record<string, string> | null | undefined;
  }
  
  
  export default async function Home({searchParams}: Props) {  
    const showModal = await searchParams?.show;
    const showChatModal = await searchParams?.showchatlist;
  return (
    <div className=" min-h-screen bg-black">
     <HomeNavbar></HomeNavbar>
      <Promptarea></Promptarea>
      <Features></Features>
       <StartingModal isVisible={showModal} />
       <ChatListModal isVisible={showChatModal} ></ChatListModal>
      <footer className="border-t border-emerald-900/50">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400">
            <div className="mb-4 md:mb-0">
              © ReactForge. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#terms" className="hover:text-emerald-400">Terms</a>
              <a href="#privacy" className="hover:text-emerald-400">Privacy</a>
              <a href="#support" className="hover:text-emerald-400">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}