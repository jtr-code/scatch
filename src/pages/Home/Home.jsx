import Login from "../../components/Login";
import Register from "../../components/Register";

const Home = () => {
  return (
    <main className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-center px-6 py-4">
      <div>
        <Register />
      </div>
      <div className="mx-auto">
        <article className="w-10 h-10 bg-blue-500 text-white rounded-full flex flex-wrap justify-center items-center ">
          <p>or</p>
        </article>
      </div>
      <div>
        <Login />
      </div>
    </main>
  );
};

export default Home;
