export const Footer = () => {
  return (
    <footer
      className="relative h-[60vh] bg-green-950 w-full "
      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100% , 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+60vh)] -top-[100vh]">
        <div className="sticky top-[calc(100vh-40vh)] h-[40vh] flex flex-col items-center">
          <h4 className="text-4xl lg:text-9xl text-white font-bold">
            COSTERETA N1
          </h4>
        </div>
      </div>
    </footer>
  );
};
