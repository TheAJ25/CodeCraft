const NotFound = () => {
  return (
    <>
      <div className="w-full h-[calc(100dvh-60px)] bg-black text-white flex justify-center items-center flex-col gap-3">
        <h1 className="text-4xl">404 - Page Not Found</h1>
        <p className="text-xl">Sorry, the page you are looking for could not be found.</p>
      </div>
    </>
  );
};

export default NotFound;
