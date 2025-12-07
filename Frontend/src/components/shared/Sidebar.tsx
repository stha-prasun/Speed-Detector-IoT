import { RxAvatar } from "react-icons/rx";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-800/50 border-r border-slate-700 p-6 flex flex-col backdrop-blur">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl font-bold text-indigo-400">⦿</span>
        <span className="text-xl font-semibold text-indigo-300">
          Speed Detector
        </span>
      </div>

      {/* Sidebar Items */}
      <nav className="space-y-2">
        <a className="flex items-center gap-3 px-4 py-2 bg-indigo-600/20 text-indigo-300 font-medium rounded-lg border border-indigo-500/20">
          Dashboard
        </a>
        <a className="flex items-center gap-3 px-4 py-2 text-slate-300 hover:bg-slate-700/40 rounded-lg">
          Logout
        </a>
      </nav>

      {/* Footer Profile */}
      <div className="mt-auto">
        <div className="flex items-center gap-3 mt-10 p-3 border-t border-slate-700">
          <RxAvatar className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-medium text-white">Tom Cook</p>
            <p className="text-sm text-slate-400">System Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
