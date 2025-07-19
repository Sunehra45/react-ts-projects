function Gamearea() {
  const rows: number = 8;
  const coloumns: number = 8;

  return (
    <>
      <div className='bg-purple-600 p-2 w-fit rounded m-auto mt-6' id="game-area">
        {Array.from({ length: rows }).map((_, rowIndex) => {
          return (
            <div key={rowIndex} className='flex'>
              {Array.from({ length: coloumns }).map((_, colIndex) => {
                return (
                  <div
                    key={colIndex}
                    defaultValue={0}
                    className='w-14 h-14 border border-white/30'></div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gamearea;
