export default function LoadingBar() {
  return (
    <div className="w-full min-h-screen bg-[#1c1917] flex items-start justify-center pt-20">
      <div className="w-full max-w-4xl px-6">
        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-slate-400 rounded-full" 
            style={{
              width: '40%',
              animation: 'loading 1.5s ease-in-out infinite'
            }}
          />
        </div>
        <style>{`
          @keyframes loading {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(350%);
            }
          }
        `}</style>
      </div>
    </div>
  );
}