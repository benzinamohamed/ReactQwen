import { HomeNavbar } from '@/components/HomeNavbar';
import ChatwithAi from '@/components/ChatwithAi';
import CodeEditor from '@/components/CodeEditor';

export default async function coder () {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-slate-900">
    <HomeNavbar />
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col lg:flex-row gap-8 h-[calc(100vh-140px)]">
       <ChatwithAi/>
       <CodeEditor/>
      </div>
    </div>
  </div>
  );
}
