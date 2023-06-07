import Header from "./components/Header";
import Top from "./components/Top";
import Message from "./components/Message";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Top />
      <Message />
      <About />
      <Footer />
    </main>
  )
}
