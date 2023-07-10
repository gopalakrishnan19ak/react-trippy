import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        Imgbg="https://images.unsplash.com/photo-1506015391300-4802dc74de2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=959&q=80"
        title="Your Journey Your story"
        text="Choose your destination"
      />
    </>
  );
}
export default Home;
