import "./App.css";
import Mouse from "./components/Mouse";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Mouse />
      <div className={"cursor-none h-screen w-screen"}>
        <div className={"h-2/5 p-24"}>
          <h1 className={"text-7xl font-bold w-[50rem] text-left"}>
            Custom CSS cursor presentation
          </h1>
        </div>

        <div className={"bg-gray-50 h-3/5 p-24 flex flex-row items-start"}>
          <Section text={"buttons"}>
            <div
              className={"flex flex-col gap-4 items-center align-middle justify-center h-full"}
            >
              <button
                className={
                  "cursor-none text-xl rounded-full bg-gray-200 w-4/5 p-2 font-medium"
                }
              >
                Hover over me
              </button>
              <button
                className={
                  "cursor-none text-xl rounded-full border border-gray-200 w-4/5 p-2 font-medium"
                }
              >
                Hover over me
              </button>
              <button
                className={
                  "cursor-none text-xl rounded-full w-4/5 p-2 font-medium"
                }
              >
                Hover over me
              </button>
            </div>
          </Section>

          <Section text={"right click below"}>
            <div className={"h-full bg-gray-200 rounded-2xl"} />
          </Section>

          <Section text={"drag your mouse outside the screen"}>
            <div className={"h-full border-2 border-gray-200 rounded-2xl"}>
              <div className={"p-2 flex gap-1"}>
                <div className={"w-2 h-2 bg-gray-400 rounded-full"} />
                <div className={"w-2 h-2 bg-gray-300 rounded-full"} />
                <div className={"w-2 h-2 bg-gray-200 rounded-full"} />
                <div className={"ml-3 w-3/5 h-2 bg-gray-300 rounded-full"} />
              </div>
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}

export default App;
