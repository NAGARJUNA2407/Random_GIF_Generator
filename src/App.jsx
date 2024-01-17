import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {

   
  return (
		<div className="w-full h-auto relative background flex flex-col items-center gap-y-8 pb-10">
			 
			 <h1 className="mt-[40px] font-bold bg-white rounded-lg w-11/12 text-center text-4xl px-10 py-2  ">RANDOM GIFS</h1>
			<div className="flex flex-col w-full items-center">
				<Random />
				 <Tag /> 
				
			</div>
			 
			 
		</div>
  );
}
