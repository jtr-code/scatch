import Login from "../../components/Login";
import Register from "../../components/Register";

const Home = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center min-h-screen justify-center px-6 ">
      <div className="lg:col-span-2 lg:ps-8">
        <Register />
      </div>
      <div className="mx-auto lg:col-span-1">
        <article className="w-10 h-10 bg-blue-500 text-white rounded-full flex flex-wrap justify-center items-center ">
          <p>or</p>
        </article>
      </div>
      <div className="lg:col-span-2 md:pe-8 pb-4">
        <Login />
      </div>
    </main>
  );
};

export default Home;
