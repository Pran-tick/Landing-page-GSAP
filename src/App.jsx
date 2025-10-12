import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center min-h-screen">
      <h1>Hello Gsap</h1>
    </div>
  );
};

export default App;
