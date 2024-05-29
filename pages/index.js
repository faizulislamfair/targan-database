export default function Home() {
  return (
    <div className="grid place-content-center">
      <div className="grid place-content-center mt-20 pt-5">

        <div className="flex flex-col">

          <div className="flex flex-row ml-3">
            <div className="font-semibold">
              Page &nbsp;
            </div>

            <div className="flex flex-col bg-[#E6E0EC] font-medium border-2 border-gray-600 pl-3 pr-12">
              Expression Atlas of ASD Risk Genes in Idiopathic ASD
            </div>
          </div>

          <div className="flex flex-row mt-5">
            <div className="font-semibold">
              Search &nbsp;
            </div>

            <div className="flex flex-col">
              <input
                className="
                w-[450px] 
                h-8 
                bg-[#E6E0EC] 
                placeholder:text-[#FA0304] 
                pl-3
                font-medium
                border-2
                border-gray-600 
                focus:placeholder:text-transparent
              "
                type="text"
                placeholder="ENSEMBL ID or Gene Symbol"
              />
              <div className="mt-2">
                <img className="h-7 lg:h-14 border-2 border-gray-600" src="/search.png" alt="Search Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
