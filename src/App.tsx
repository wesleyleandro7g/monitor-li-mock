function App() {
  return (
    <div className="w-full h-screen bg-white">
      <header className="flex w-full h-14 items-center justify-between p-4 bg-white shadow-lg">
        <img src='./src/assets/lojaIntegrada.svg' />
        <div className="flex items-center justify-center gap-2">
          <span>Hello, John Doe</span>
          <div className="w-8 h-8 rounded-full bg-slate-400"></div>
        </div>
      </header>

      <div className="flex w-full h-full">
        <aside className="w-[120px] md:w-[200px] lg:w-[240px] h-full bg-gray-300">
          
        </aside>
        <div className="flex flex-1 p-4 w-full h-full">
          <iframe
            id="monytor"
            src="http://localhost:3001/"
            className="w-full h-screen rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
