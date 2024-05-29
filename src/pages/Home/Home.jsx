import Login from "../../components/Login";
import Register from "../../components/Register";

const Home = () => {
  return (
    <main className="flex justify-around flex-wrap gap-8 items-center lg:px-16">
      <Register />
      <article className="w-10 h-10 bg-blue-500 text-white rounded-full flex flex-wrap justify-center items-center ">
        <p>or</p>
      </article>
      <Login />
    </main>
  );
};

export default Home;
