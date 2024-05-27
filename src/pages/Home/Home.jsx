import Login from "../../components/Login";
import Register from "../../components/Register";

const Home = () => {
  return (
    <main className="flex justify-around items-center px-16">
      <Register />
      <article class="w-10 h-10 bg-blue-500 text-white rounded-full flex justify-center items-center">
        <p>or</p>
      </article>
      <Login />
    </main>
  );
};

export default Home;
