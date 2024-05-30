import Image from "next/image";
import { data } from '@/public/data';
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [searchPressed, setSearchPressed] = useState(false);

  const handleSearch = () => {
    const searchValue = searchTerm.toLowerCase();

    const newFilteredData = data.filter(item => {
      const ensemblIdString = String(item.ENSEMBL_ID).toLowerCase();
      const geneSymbolString = String(item.Gene_Symbol).toLowerCase();

      return (
        ensemblIdString === searchValue || geneSymbolString === searchValue
      );
    });

    setFilteredData(newFilteredData);
    setSearchPressed(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="grid place-content-center">
      <div className="grid place-content-center mt-20 pt-5">

        <div className="flex flex-col text-xl">
          <div className="flex flex-row ml-3">
            <div className="font-semibold place-content-center">
              Page
            </div>
            <div className="flex flex-col bg-[#E6E0EC] font-medium border-2 border-gray-600 ml-3 pl-3 pr-12 py-2 w-[600px]">
              Expression Atlas of ASD Risk Genes in Idiopathic ASD
            </div>
          </div>

          <div className="flex flex-row mt-5">
            <div className="font-semibold mt-2">
              Search
            </div>
            <div className="flex flex-col">
              <input
                className="
                w-[600px] 
                bg-[#E6E0EC] 
                placeholder:text-[#FA0304] 
                ml-[9px]
                py-2
                pl-3 
                font-medium 
                border-2 border-gray-600 
                focus:placeholder:text-transparent
                text-[#FA0304]
                "
                type="text"
                placeholder="ENSEMBL ID or Gene Symbol"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <div className="mt-5">
                <Image
                  className="border-2 border-gray-600 ml-[9px]"
                  src="/search.png"
                  alt="Search Icon"
                  onClick={handleSearch}
                  width={60}
                  height={60}
                />
              </div>
            </div>
          </div>





          <div className="flex flex-col mt-7">
            <div className="font-semibold ml-[68px]">
              Example 1:
            </div>
            <div className="flex flex-row mt-2">
              <div className="font-semibold place-content-center">
                Search
              </div>
              <div className="flex flex-col bg-[#E6E0EC] text-[#FA0304] font-medium border-2 border-gray-600 ml-[9px] pl-3 pr-12 py-2 w-[600px]">
                FMR1
              </div>
            </div>

            <div className="mt-5">
              <Image
                className="border-2 border-gray-600 ml-[70px]"
                src="/search.png"
                alt="Search Icon"
                onClick={handleSearch}
                width={60}
                height={60}
              />
            </div>
          </div>



        </div>

      </div>


      <div className='grid grid-cols-1 grid-flow-row gap-4 place-content-center mt-10 pt-10'>

        {searchPressed && filteredData.length > 0 && (

          filteredData.map((item, index) => (
            <div key={index + 1} className='text-black m-5 p-5 rounded-md'>


              <div className="border-4 border-[#E1AEAC] flex flex-col p-5 mb-10 w-[60%]">
                <u><b>ASD Risk Gene</b></u>

                {
                  item?.Gene_Symbol &&
                  <div className='flex flex-row'>
                    <b>Gene Symbol</b>: <p className="font-semibold text-[#FA0304]"> &nbsp; {item?.Gene_Symbol} </p>
                  </div>
                }
                {
                  item?.ENSEMBL_ID &&
                  <div className='flex flex-row'>
                    <b>ENSEMBL ID</b>: <p className="font-semibold text-[#FA0304]"> &nbsp; {item?.ENSEMBL_ID} </p>

                  </div>
                }
                {
                  item?.Gene_Name &&
                  <div className='flex flex-row'>
                    <b>Gene Name</b>: <p className="font-semibold text-[#FA0304]"> &nbsp; {item?.Gene_Name} </p>

                  </div>
                }
                {
                  item?.Chromosome_name &&
                  <div className='flex flex-row'>
                    <b>Chromosome</b>: <p className="font-semibold text-[#FA0304]"> &nbsp; {item?.Chromosome_name} </p>

                  </div>
                }
                {
                  item?.Genetic_Category &&
                  <div className='flex flex-row'>
                    <b>Genetic Category</b>: <p className="font-semibold text-[#FA0304]"> &nbsp; {item?.Genetic_Category} </p>

                  </div>
                }
                {
                  item?.SFARI_Gene_score &&
                  <div className='flex flex-row'>
                    <b>SFARI Gene-Score</b>: <p className="font-semibold text-[#FA0304]"> &nbsp; {item?.SFARI_Gene_score} </p>
                  </div>
                }
                {
                  item?.Syndromic &&
                  <div className='flex flex-row'>
                    <b>Syndromic</b>: <p className="font-semibold text-[#FA0304]"> &nbsp; {item?.Syndromic} </p>

                  </div>
                }
                {
                  item?.Gene_Biotype &&
                  <div className='flex flex-row'>
                    <b>Gene Biotype</b>: <p className="font-semibold text-[#FA0304]"> &nbsp; {item?.Gene_Biotype} </p>

                  </div>
                }

                <div className='flex flex-row'>
                  <b>Reference</b>: <p className="font-semibold"> &nbsp; SFARI Gene Database <Link href="https://gene.sfari.org/database/human-gene/" target='_blank'>(https://gene.sfari.org/database/human-gene/) </Link> </p>
                </div>

              </div>


              <div>

                <div className="text-[#1C47F2] font-bold pb-3">
                  Chart 1. Expression Signature of ASD Risk Gene in Whole Cerebral Cortex
                </div>

                <table className='bg-[#FAE5D3] p-10 text-center border-2 border-gray-600 rounded-md mb-10'>
                  <tr className='p-5'>
                    <th className='p-5 border-2 border-gray-600'>ASD Risk Gene</th>
                    <th className='p-5 border-2 border-gray-600'>SFARI Gene Score</th>
                    <th className='p-5 border-2 border-gray-600'>Log<sub>2</sub>FC</th>
                    <th className='p-5 border-2 border-gray-600'>FDR</th>
                    <th className='p-5 border-2 border-gray-600'>Expression Pattern</th>
                    <th className='p-5 border-2 border-gray-600'>Comparison Group</th>
                    <th className='p-5 border-2 border-gray-600'>Comparing Organ Type</th>
                    <th className='p-5 border-2 border-gray-600'>Organ</th>

                    <div class="flex flex-col">
                      <div class="flex-1 flex">
                        <div class="p-5 border-b-2 border-gray-600 flex items-center justify-center" colspan="2">
                          <b>Number of Samples</b>
                        </div>
                      </div>
                      <div class="flex-1 flex">
                        <div class="w-1/2 border-r border-gray-600 p-5 flex items-center justify-center">
                          <b>ASD</b>
                        </div>
                        <div class="w-1/2 border-l border-gray-600 p-5 flex items-center justify-center">
                          <b>Control</b>
                        </div>
                      </div>
                    </div>




                    <th className='p-5 border-2 border-gray-600'>Experiment Details</th>
                  </tr>
                  <tr className='p-5 font-semibold bg-[#E6E0EC]'>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>{item?.Gene_Symbol}</td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.SFARI_Gene_score}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.WholeCortex_ASD_Log2FC}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.WholeCortex_ASD_FDR}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {
                        item?.WholeCortex_ASD_Log2FC > 0 && <>Upregulation</>
                      }
                      {
                        item?.WholeCortex_ASD_Log2FC < 0 && <>Downregulation</>
                      }
                    </td>
                    <td className='p-5 border-2 border-gray-600'>Idiopathic ASD vs Control</td>
                    <td className='p-5 border-2 border-gray-600'>
                      BA38
                    </td>
                    <td className='p-5 border-2 border-gray-600'>Postmortem Brain Tissue</td>


                    <td className="p-5 border-2 border-gray-600 relative">
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 border-r border-gray-600 flex items-center justify-center">
                          49
                        </div>
                        <div className="w-1/2 border-l border-gray-600 flex items-center justify-center">
                          54
                        </div>
                      </div>
                    </td>


                    <td className='p-5 border-2 border-gray-600'>
                      <Link href='/chart1' target='_blank'>
                        Click here
                      </Link>
                    </td>
                  </tr>
                </table>
              </div>

              <div>

                <div className="text-[#1C47F2] font-bold pb-3">
                  Chart 2. Expression Signatures of ASD Risk Gene in Brodmann Area (BA)9
                </div>

                <table className='bg-[#FAE5D3] p-10 text-center border-2 border-gray-600 rounded-md mb-10'>
                  <tr className='p-5'>
                    <th className='p-5 border-2 border-gray-600'>ASD Risk Gene</th>
                    <th className='p-5 border-2 border-gray-600'>SFARI Gene Score</th>
                    <th className='p-5 border-2 border-gray-600'>Log<sub>2</sub>FC</th>
                    <th className='p-5 border-2 border-gray-600'>FDR</th>
                    <th className='p-5 border-2 border-gray-600'>Expression Pattern</th>
                    <th className='p-5 border-2 border-gray-600'>Comparison Group</th>
                    <th className='p-5 border-2 border-gray-600'>Comparing Organ Type</th>
                    <th className='p-5 border-2 border-gray-600'>Organ</th>

                    <div class="flex flex-col">
                      <div class="flex-1 flex">
                        <div class="p-5 border-b-2 border-gray-600 flex items-center justify-center" colspan="2">
                          <b>Number of Samples</b>
                        </div>
                      </div>
                      <div class="flex-1 flex">
                        <div class="w-1/2 border-r border-gray-600 p-5 flex items-center justify-center">
                          <b>ASD</b>
                        </div>
                        <div class="w-1/2 border-l border-gray-600 p-5 flex items-center justify-center">
                          <b>Control</b>
                        </div>
                      </div>
                    </div>

                    <th className='p-5 border-2 border-gray-600'>Experiment Details</th>
                  </tr>
                  <tr className='p-5 font-semibold bg-[#E6E0EC]'>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>{item?.Gene_Symbol}</td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.SFARI_Gene_score}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA9_Log2FC}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA9_FDR}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {
                        item?.ASD_BA9_Log2FC > 0 && <>Upregulation</>
                      }
                      {
                        item?.ASD_BA9_Log2FC < 0 && <>Downregulation</>
                      }
                    </td>
                    <td className='p-5 border-2 border-gray-600'>Idiopathic ASD vs Control</td>
                    <td className='p-5 border-2 border-gray-600'>
                      BA38
                    </td>
                    <td className='p-5 border-2 border-gray-600'>Postmortem Brain Tissue</td>

                    <td className="p-5 border-2 border-gray-600 relative">
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 border-r border-gray-600 flex items-center justify-center">
                          41
                        </div>
                        <div className="w-1/2 border-l border-gray-600 flex items-center justify-center">
                          45
                        </div>
                      </div>
                    </td>


                    <td className='p-5 border-2 border-gray-600'>
                      <Link href='/chart2' target='_blank'>
                        Click here
                      </Link>
                    </td>
                  </tr>
                </table>
              </div>

              <div>

                <div className="text-[#1C47F2] font-bold pb-3">
                  Chart 3. Expression Signatures of ASD Risk Gene in Brodmann Area (BA)44/45
                </div>

                <table className='bg-[#FAE5D3] p-10 text-center border-2 border-gray-600 rounded-md mb-10'>
                  <tr className='p-5'>
                    <th className='p-5 border-2 border-gray-600'>ASD Risk Gene</th>
                    <th className='p-5 border-2 border-gray-600'>SFARI Gene Score</th>
                    <th className='p-5 border-2 border-gray-600'>Log<sub>2</sub>FC</th>
                    <th className='p-5 border-2 border-gray-600'>FDR</th>
                    <th className='p-5 border-2 border-gray-600'>Expression Pattern</th>
                    <th className='p-5 border-2 border-gray-600'>Comparison Group</th>
                    <th className='p-5 border-2 border-gray-600'>Comparing Organ Type</th>
                    <th className='p-5 border-2 border-gray-600'>Organ</th>
                    <div class="flex flex-col">
                      <div class="flex-1 flex">
                        <div class="p-5 border-b-2 border-gray-600 flex items-center justify-center" colspan="2">
                          <b>Number of Samples</b>
                        </div>
                      </div>
                      <div class="flex-1 flex">
                        <div class="w-1/2 border-r border-gray-600 p-5 flex items-center justify-center">
                          <b>ASD</b>
                        </div>
                        <div class="w-1/2 border-l border-gray-600 p-5 flex items-center justify-center">
                          <b>Control</b>
                        </div>
                      </div>
                    </div>
                    <th className='p-5 border-2 border-gray-600'>Experiment Details</th>
                  </tr>
                  <tr className='p-5 font-semibold bg-[#E6E0EC]'>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>{item?.Gene_Symbol}</td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.SFARI_Gene_score}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA44_45_Log2FC}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA44_45_FDR}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {
                        item?.ASD_BA44_45_Log2FC > 0 && <>Upregulation</>
                      }
                      {
                        item?.ASD_BA44_45_Log2FC < 0 && <>Downregulation</>
                      }
                    </td>
                    <td className='p-5 border-2 border-gray-600'>Idiopathic ASD vs Control</td>
                    <td className='p-5 border-2 border-gray-600'>
                      BA38
                    </td>
                    <td className='p-5 border-2 border-gray-600'>Postmortem Brain Tissue</td>
                    <td className="p-5 border-2 border-gray-600 relative">
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 border-r border-gray-600 flex items-center justify-center">
                          27
                        </div>
                        <div className="w-1/2 border-l border-gray-600 flex items-center justify-center">
                          19
                        </div>
                      </div>
                    </td>
                    <td className='p-5 border-2 border-gray-600'>
                      <Link href='/chart3' target='_blank'>
                        Click here
                      </Link>
                    </td>
                  </tr>
                </table>
              </div>

              <div>
                <div className="text-[#1C47F2] font-bold pb-3">
                  Chart 4. Expression Signatures of ASD Risk Gene in Brodmann Area (BA)24
                </div>
                <table className='bg-[#FAE5D3] p-10 text-center border-2 border-gray-600 rounded-md mb-10'>
                  <tr className='p-5'>
                    <th className='p-5 border-2 border-gray-600'>ASD Risk Gene</th>
                    <th className='p-5 border-2 border-gray-600'>SFARI Gene Score</th>
                    <th className='p-5 border-2 border-gray-600'>Log<sub>2</sub>FC</th>
                    <th className='p-5 border-2 border-gray-600'>FDR</th>
                    <th className='p-5 border-2 border-gray-600'>Expression Pattern</th>
                    <th className='p-5 border-2 border-gray-600'>Comparison Group</th>
                    <th className='p-5 border-2 border-gray-600'>Comparing Organ Type</th>
                    <th className='p-5 border-2 border-gray-600'>Organ</th>
                    <div class="flex flex-col">
                      <div class="flex-1 flex">
                        <div class="p-5 border-b-2 border-gray-600 flex items-center justify-center" colspan="2">
                          <b>Number of Samples</b>
                        </div>
                      </div>
                      <div class="flex-1 flex">
                        <div class="w-1/2 border-r border-gray-600 p-5 flex items-center justify-center">
                          <b>ASD</b>
                        </div>
                        <div class="w-1/2 border-l border-gray-600 p-5 flex items-center justify-center">
                          <b>Control</b>
                        </div>
                      </div>
                    </div>
                    <th className='p-5 border-2 border-gray-600'>Experiment Details</th>
                  </tr>
                  <tr className='p-5 font-semibold bg-[#E6E0EC]'>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>{item?.Gene_Symbol}</td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.SFARI_Gene_score}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA24_Log2FC}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA24_FDR}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {
                        item?.ASD_BA24_Log2FC > 0 && <>Upregulation</>
                      }
                      {
                        item?.ASD_BA24_Log2FC < 0 && <>Downregulation</>
                      }
                    </td>
                    <td className='p-5 border-2 border-gray-600'>Idiopathic ASD vs Control</td>
                    <td className='p-5 border-2 border-gray-600'>
                      BA38
                    </td>
                    <td className='p-5 border-2 border-gray-600'>Postmortem Brain Tissue</td>
                    <td className="p-5 border-2 border-gray-600 relative">
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 border-r border-gray-600 flex items-center justify-center">
                          30
                        </div>
                        <div className="w-1/2 border-l border-gray-600 flex items-center justify-center">
                          18
                        </div>
                      </div>
                    </td>
                    <td className='p-5 border-2 border-gray-600'>
                      <Link href='/chart4' target='_blank'>
                        Click here
                      </Link>
                    </td>
                  </tr>
                </table>
              </div>

              <div>
                <div className="text-[#1C47F2] font-bold pb-3">
                  Chart 5. Expression Signatures of ASD Risk Gene in Brodmann Area (BA)4/6
                </div>
                <table className='bg-[#FAE5D3] p-10 text-center border-2 border-gray-600 rounded-md mb-10'>
                  <tr className='p-5'>
                    <th className='p-5 border-2 border-gray-600'>ASD Risk Gene</th>
                    <th className='p-5 border-2 border-gray-600'>SFARI Gene Score</th>
                    <th className='p-5 border-2 border-gray-600'>Log<sub>2</sub>FC</th>
                    <th className='p-5 border-2 border-gray-600'>FDR</th>
                    <th className='p-5 border-2 border-gray-600'>Expression Pattern</th>
                    <th className='p-5 border-2 border-gray-600'>Comparison Group</th>
                    <th className='p-5 border-2 border-gray-600'>Comparing Organ Type</th>
                    <th className='p-5 border-2 border-gray-600'>Organ</th>
                    <div class="flex flex-col">
                      <div class="flex-1 flex">
                        <div class="p-5 border-b-2 border-gray-600 flex items-center justify-center" colspan="2">
                          <b>Number of Samples</b>
                        </div>
                      </div>
                      <div class="flex-1 flex">
                        <div class="w-1/2 border-r border-gray-600 p-5 flex items-center justify-center">
                          <b>ASD</b>
                        </div>
                        <div class="w-1/2 border-l border-gray-600 p-5 flex items-center justify-center">
                          <b>Control</b>
                        </div>
                      </div>
                    </div>
                    <th className='p-5 border-2 border-gray-600'>Experiment Details</th>
                  </tr>
                  <tr className='p-5 font-semibold bg-[#E6E0EC]'>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>{item?.Gene_Symbol}</td>
                    <td className='p-5 border-2 border-gray-600'>
                      {item?.SFARI_Gene_score}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA4_6_Log2FC}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA4_6_FDR}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {
                        item?.ASD_BA4_6_Log2FC > 0 && <>Upregulation</>
                      }
                      {
                        item?.ASD_BA4_6_Log2FC < 0 && <>Downregulation</>
                      }
                    </td>
                    <td className='p-5 border-2 border-gray-600'>Idiopathic ASD vs Control</td>
                    <td className='p-5 border-2 border-gray-600'>
                      BA38
                    </td>
                    <td className='p-5 border-2 border-gray-600'>Postmortem Brain Tissue</td>
                    <td className="p-5 border-2 border-gray-600 relative">
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 border-r border-gray-600 flex items-center justify-center">
                          28
                        </div>
                        <div className="w-1/2 border-l border-gray-600 flex items-center justify-center">
                          27
                        </div>
                      </div>
                    </td>
                    <td className='p-5 border-2 border-gray-600'>
                      <Link href='/chart5' target='_blank'>
                        Click here
                      </Link>
                    </td>
                  </tr>
                </table>
              </div>

              <div>
                <div className="text-[#1C47F2] font-bold pb-3">
                  Chart 6. Expression Signatures of ASD Risk Gene in Brodmann Area (BA)38
                </div>
                <table className='bg-[#FAE5D3] p-10 text-center border-2 border-gray-600 rounded-md mb-10'>
                  <tr className='p-5'>
                    <th className='p-5 border-2 border-gray-600'>ASD Risk Gene</th>
                    <th className='p-5 border-2 border-gray-600'>SFARI Gene Score</th>
                    <th className='p-5 border-2 border-gray-600'>Log<sub>2</sub>FC</th>
                    <th className='p-5 border-2 border-gray-600'>FDR</th>
                    <th className='p-5 border-2 border-gray-600'>Expression Pattern</th>
                    <th className='p-5 border-2 border-gray-600'>Comparison Group</th>
                    <th className='p-5 border-2 border-gray-600'>Comparing Organ Type</th>
                    <th className='p-5 border-2 border-gray-600'>Organ</th>
                    <div class="flex flex-col">
                      <div class="flex-1 flex">
                        <div class="p-5 border-b-2 border-gray-600 flex items-center justify-center" colspan="2">
                          <b>Number of Samples</b>
                        </div>
                      </div>
                      <div class="flex-1 flex">
                        <div class="w-1/2 border-r border-gray-600 p-5 flex items-center justify-center">
                          <b>ASD</b>
                        </div>
                        <div class="w-1/2 border-l border-gray-600 p-5 flex items-center justify-center">
                          <b>Control</b>
                        </div>
                      </div>
                    </div>
                    <th className='p-5 border-2 border-gray-600'>Experiment Details</th>
                  </tr>
                  <tr className='p-5 font-semibold bg-[#E6E0EC]'>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>{item?.Gene_Symbol}</td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.SFARI_Gene_score}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA38_Log2FC}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA38_FDR}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {
                        item?.ASD_BA38_Log2FC > 0 && <>Upregulation</>
                      }
                      {
                        item?.ASD_BA38_Log2FC < 0 && <>Downregulation</>
                      }
                    </td>
                    <td className='p-5 border-2 border-gray-600'>Idiopathic ASD vs Control</td>
                    <td className='p-5 border-2 border-gray-600'>
                      BA38
                    </td>
                    <td className='p-5 border-2 border-gray-600'>Postmortem Brain Tissue</td>
                    <td className="p-5 border-2 border-gray-600 relative">
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 border-r border-gray-600 flex items-center justify-center">
                          26
                        </div>
                        <div className="w-1/2 border-l border-gray-600 flex items-center justify-center">
                          17
                        </div>
                      </div>
                    </td>
                    <td className='p-5 border-2 border-gray-600'>
                      <Link href='/chart6' target='_blank'>
                        Click here
                      </Link>
                    </td>
                  </tr>
                </table>
              </div>

              <div>
                <div className="text-[#1C47F2] font-bold pb-3">
                  Chart 7. Expression Signatures of ASD Risk Gene in Brodmann Area (BA)20/37
                </div>
                <table className='bg-[#FAE5D3] p-10 text-center border-2 border-gray-600 rounded-md mb-10'>
                  <tr className='p-5'>
                    <th className='p-5 border-2 border-gray-600'>ASD Risk Gene</th>
                    <th className='p-5 border-2 border-gray-600'>SFARI Gene Score</th>
                    <th className='p-5 border-2 border-gray-600'>Log<sub>2</sub>FC</th>
                    <th className='p-5 border-2 border-gray-600'>FDR</th>
                    <th className='p-5 border-2 border-gray-600'>Expression Pattern</th>
                    <th className='p-5 border-2 border-gray-600'>Comparison Group</th>
                    <th className='p-5 border-2 border-gray-600'>Comparing Organ Type</th>
                    <th className='p-5 border-2 border-gray-600'>Organ</th>
                    <div class="flex flex-col">
                      <div class="flex-1 flex">
                        <div class="p-5 border-b-2 border-gray-600 flex items-center justify-center" colspan="2">
                          <b>Number of Samples</b>
                        </div>
                      </div>
                      <div class="flex-1 flex">
                        <div class="w-1/2 border-r border-gray-600 p-5 flex items-center justify-center">
                          <b>ASD</b>
                        </div>
                        <div class="w-1/2 border-l border-gray-600 p-5 flex items-center justify-center">
                          <b>Control</b>
                        </div>
                      </div>
                    </div>
                    <th className='p-5 border-2 border-gray-600'>Experiment Details</th>
                  </tr>
                  <tr className='p-5 font-semibold bg-[#E6E0EC]'>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>{item?.Gene_Symbol}</td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.SFARI_Gene_score}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA20_37_Log2FC}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA20_37_FDR}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {
                        item?.ASD_BA20_37_Log2FC > 0 && <>Upregulation</>
                      }
                      {
                        item?.ASD_BA20_37_Log2FC < 0 && <>Downregulation</>
                      }
                    </td>
                    <td className='p-5 border-2 border-gray-600'>Idiopathic ASD vs Control</td>
                    <td className='p-5 border-2 border-gray-600'>
                      BA38
                    </td>
                    <td className='p-5 border-2 border-gray-600'>Postmortem Brain Tissue</td>
                    <td className="p-5 border-2 border-gray-600 relative">
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 border-r border-gray-600 flex items-center justify-center">
                          22
                        </div>
                        <div className="w-1/2 border-l border-gray-600 flex items-center justify-center">
                          26
                        </div>
                      </div>
                    </td>
                    <td className='p-5 border-2 border-gray-600'>
                      <Link href='/chart7' target='_blank'>
                        Click here
                      </Link>
                    </td>
                  </tr>
                </table>
              </div>


              <div>
                <div className="text-[#1C47F2] font-bold pb-3">
                  Chart 8. Expression Signatures of ASD Risk Gene in Brodmann Area (BA)41/42/22
                </div>
                <table className='bg-[#FAE5D3] p-10 text-center border-2 border-gray-600 rounded-md mb-10'>
                  <tr className='p-5'>
                    <th className='p-5 border-2 border-gray-600'>ASD Risk Gene</th>
                    <th className='p-5 border-2 border-gray-600'>SFARI Gene Score</th>
                    <th className='p-5 border-2 border-gray-600'>Log<sub>2</sub>FC</th>
                    <th className='p-5 border-2 border-gray-600'>FDR</th>
                    <th className='p-5 border-2 border-gray-600'>Expression Pattern</th>
                    <th className='p-5 border-2 border-gray-600'>Comparison Group</th>
                    <th className='p-5 border-2 border-gray-600'>Comparing Organ Type</th>
                    <th className='p-5 border-2 border-gray-600'>Organ</th>
                    <div class="flex flex-col">
                      <div class="flex-1 flex">
                        <div class="p-5 border-b-2 border-gray-600 flex items-center justify-center" colspan="2">
                          <b>Number of Samples</b>
                        </div>
                      </div>
                      <div class="flex-1 flex">
                        <div class="w-1/2 border-r border-gray-600 p-5 flex items-center justify-center">
                          <b>ASD</b>
                        </div>
                        <div class="w-1/2 border-l border-gray-600 p-5 flex items-center justify-center">
                          <b>Control</b>
                        </div>
                      </div>
                    </div>
                    <th className='p-5 border-2 border-gray-600'>Experiment Details</th>
                  </tr>
                  <tr className='p-5 font-semibold bg-[#E6E0EC]'>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>{item?.Gene_Symbol}</td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.SFARI_Gene_score}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA41_42_22_Log2FC}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA41_42_22_FDR}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {
                        item?.ASD_BA41_42_22_Log2FC > 0 && <>Upregulation</>
                      }
                      {
                        item?.ASD_BA41_42_22_Log2FC < 0 && <>Downregulation</>
                      }
                    </td>
                    <td className='p-5 border-2 border-gray-600'>Idiopathic ASD vs Control</td>
                    <td className='p-5 border-2 border-gray-600'>
                      BA38
                    </td>
                    <td className='p-5 border-2 border-gray-600'>Postmortem Brain Tissue</td>
                    <td className="p-5 border-2 border-gray-600 relative">
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 border-r border-gray-600 flex items-center justify-center">
                          40
                        </div>
                        <div className="w-1/2 border-l border-gray-600 flex items-center justify-center">
                          33
                        </div>
                      </div>
                    </td>
                    <td className='p-5 border-2 border-gray-600'>
                      <Link href='/chart8' target='_blank'>
                        Click here
                      </Link>
                    </td>
                  </tr>
                </table>
              </div>


              <div>
                <div className="text-[#1C47F2] font-bold pb-3">
                  Chart 9. Expression Signatures of ASD Risk Gene in Brodmann Area (BA)3/1/2/5
                </div>
                <table className='bg-[#FAE5D3] p-10 text-center border-2 border-gray-600 rounded-md mb-10'>
                  <tr className='p-5'>
                    <th className='p-5 border-2 border-gray-600'>ASD Risk Gene</th>
                    <th className='p-5 border-2 border-gray-600'>SFARI Gene Score</th>
                    <th className='p-5 border-2 border-gray-600'>Log<sub>2</sub>FC</th>
                    <th className='p-5 border-2 border-gray-600'>FDR</th>
                    <th className='p-5 border-2 border-gray-600'>Expression Pattern</th>
                    <th className='p-5 border-2 border-gray-600'>Comparison Group</th>
                    <th className='p-5 border-2 border-gray-600'>Comparing Organ Type</th>
                    <th className='p-5 border-2 border-gray-600'>Organ</th>
                    <div class="flex flex-col">
                      <div class="flex-1 flex">
                        <div class="p-5 border-b-2 border-gray-600 flex items-center justify-center" colspan="2">
                          <b>Number of Samples</b>
                        </div>
                      </div>
                      <div class="flex-1 flex">
                        <div class="w-1/2 border-r border-gray-600 p-5 flex items-center justify-center">
                          <b>ASD</b>
                        </div>
                        <div class="w-1/2 border-l border-gray-600 p-5 flex items-center justify-center">
                          <b>Control</b>
                        </div>
                      </div>
                    </div>
                    <th className='p-5 border-2 border-gray-600'>Experiment Details</th>
                  </tr>
                  <tr className='p-5 font-semibold bg-[#E6E0EC]'>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>{item?.Gene_Symbol}</td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.SFARI_Gene_score}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA3_1_2_5_Log2FC}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA3_1_2_5_FDR}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {
                        item?.ASD_BA3_1_2_5_Log2FC > 0 && <>Upregulation</>
                      }
                      {
                        item?.ASD_BA3_1_2_5_Log2FC < 0 && <>Downregulation</>
                      }
                    </td>
                    <td className='p-5 border-2 border-gray-600'>Idiopathic ASD vs Control</td>
                    <td className='p-5 border-2 border-gray-600'>
                      BA38
                    </td>
                    <td className='p-5 border-2 border-gray-600'>Postmortem Brain Tissue</td>
                    <td className="p-5 border-2 border-gray-600 relative">
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 border-r border-gray-600 flex items-center justify-center">
                          30
                        </div>
                        <div className="w-1/2 border-l border-gray-600 flex items-center justify-center">
                          23
                        </div>
                      </div>
                    </td>
                    <td className='p-5 border-2 border-gray-600'>
                      <Link href='/chart9' target='_blank'>
                        Click here
                      </Link>
                    </td>
                  </tr>
                </table>
              </div>


              <div>
                <div className="text-[#1C47F2] font-bold pb-3">
                  Chart 10. Expression Signatures of ASD Risk Gene in Brodmann Area (BA)7
                </div>
                <table className='bg-[#FAE5D3] p-10 text-center border-2 border-gray-600 rounded-md mb-10'>
                  <tr className='p-5'>
                    <th className='p-5 border-2 border-gray-600'>ASD Risk Gene</th>
                    <th className='p-5 border-2 border-gray-600'>SFARI Gene Score</th>
                    <th className='p-5 border-2 border-gray-600'>Log<sub>2</sub>FC</th>
                    <th className='p-5 border-2 border-gray-600'>FDR</th>
                    <th className='p-5 border-2 border-gray-600'>Expression Pattern</th>
                    <th className='p-5 border-2 border-gray-600'>Comparison Group</th>
                    <th className='p-5 border-2 border-gray-600'>Comparing Organ Type</th>
                    <th className='p-5 border-2 border-gray-600'>Organ</th>
                    <div class="flex flex-col">
                      <div class="flex-1 flex">
                        <div class="p-5 border-b-2 border-gray-600 flex items-center justify-center" colspan="2">
                          <b>Number of Samples</b>
                        </div>
                      </div>
                      <div class="flex-1 flex">
                        <div class="w-1/2 border-r border-gray-600 p-5 flex items-center justify-center">
                          <b>ASD</b>
                        </div>
                        <div class="w-1/2 border-l border-gray-600 p-5 flex items-center justify-center">
                          <b>Control</b>
                        </div>
                      </div>
                    </div>
                    <th className='p-5 border-2 border-gray-600'>Experiment Details</th>
                  </tr>
                  <tr className='p-5 font-semibold bg-[#E6E0EC]'>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>{item?.Gene_Symbol}</td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.SFARI_Gene_score}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA7_Log2FC}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA7_FDR}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {
                        item?.ASD_BA7_Log2FC > 0 && <>Upregulation</>
                      }
                      {
                        item?.ASD_BA7_Log2FC < 0 && <>Downregulation</>
                      }
                    </td>
                    <td className='p-5 border-2 border-gray-600'>Idiopathic ASD vs Control</td>
                    <td className='p-5 border-2 border-gray-600'>
                      BA38
                    </td>
                    <td className='p-5 border-2 border-gray-600'>Postmortem Brain Tissue</td>
                    <td className="p-5 border-2 border-gray-600 relative">
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 border-r border-gray-600 flex items-center justify-center">
                          35
                        </div>
                        <div className="w-1/2 border-l border-gray-600 flex items-center justify-center">
                          29
                        </div>
                      </div>
                    </td>
                    <td className='p-5 border-2 border-gray-600'>
                      <Link href='/chart10' target='_blank'>
                        Click here
                      </Link>
                    </td>
                  </tr>
                </table>
              </div>


              <div>
                <div className="text-[#1C47F2] font-bold pb-3">
                  Chart 11. Expression Signatures of ASD Risk Gene in Brodmann Area (BA)39/40
                </div>
                <table className='bg-[#FAE5D3] p-10 text-center border-2 border-gray-600 rounded-md mb-10'>
                  <tr className='p-5'>
                    <th className='p-5 border-2 border-gray-600'>ASD Risk Gene</th>
                    <th className='p-5 border-2 border-gray-600'>SFARI Gene Score</th>
                    <th className='p-5 border-2 border-gray-600'>Log<sub>2</sub>FC</th>
                    <th className='p-5 border-2 border-gray-600'>FDR</th>
                    <th className='p-5 border-2 border-gray-600'>Expression Pattern</th>
                    <th className='p-5 border-2 border-gray-600'>Comparison Group</th>
                    <th className='p-5 border-2 border-gray-600'>Comparing Organ Type</th>
                    <th className='p-5 border-2 border-gray-600'>Organ</th>
                    <div class="flex flex-col">
                      <div class="flex-1 flex">
                        <div class="p-5 border-b-2 border-gray-600 flex items-center justify-center" colspan="2">
                          <b>Number of Samples</b>
                        </div>
                      </div>
                      <div class="flex-1 flex">
                        <div class="w-1/2 border-r border-gray-600 p-5 flex items-center justify-center">
                          <b>ASD</b>
                        </div>
                        <div class="w-1/2 border-l border-gray-600 p-5 flex items-center justify-center">
                          <b>Control</b>
                        </div>
                      </div>
                    </div>
                    <th className='p-5 border-2 border-gray-600'>Experiment Details</th>
                  </tr>
                  <tr className='p-5 font-semibold bg-[#E6E0EC]'>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>{item?.Gene_Symbol}</td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.SFARI_Gene_score}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA39_40_Log2FC}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA39_40_FDR}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {
                        item?.ASD_BA39_40_Log2FC > 0 && <>Upregulation</>
                      }
                      {
                        item?.ASD_BA39_40_Log2FC < 0 && <>Downregulation</>
                      }
                    </td>
                    <td className='p-5 border-2 border-gray-600'>Idiopathic ASD vs Control</td>
                    <td className='p-5 border-2 border-gray-600'>
                      BA38
                    </td>
                    <td className='p-5 border-2 border-gray-600'>
                      Postmortem
                      Cerebral
                      Cortex
                    </td>
                    <td className="p-5 border-2 border-gray-600 relative">
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 border-r border-gray-600 flex items-center justify-center">
                          31
                        </div>
                        <div className="w-1/2 border-l border-gray-600 flex items-center justify-center">
                          32
                        </div>
                      </div>
                    </td>
                    <td className='p-5 border-2 border-gray-600'>
                      <Link href='/chart11' target='_blank'>
                        Click here
                      </Link>
                    </td>
                  </tr>
                </table>
              </div>


              <div>
                <div className="text-[#1C47F2] font-bold pb-3">
                  Chart 12. Expression Signatures of ASD Risk Gene in Brodmann Area (BA)17
                </div>
                <table className='bg-[#FAE5D3] p-10 text-center border-2 border-gray-600 rounded-md mb-10'>
                  <tr className='p-5'>
                    <th className='p-5 border-2 border-gray-600'>ASD Risk Gene</th>
                    <th className='p-5 border-2 border-gray-600'>SFARI Gene Score</th>
                    <th className='p-5 border-2 border-gray-600'>Log<sub>2</sub>FC</th>
                    <th className='p-5 border-2 border-gray-600'>FDR</th>
                    <th className='p-5 border-2 border-gray-600'>Expression Pattern</th>
                    <th className='p-5 border-2 border-gray-600'>Comparison Group</th>
                    <th className='p-5 border-2 border-gray-600'>Comparing Organ Type</th>
                    <th className='p-5 border-2 border-gray-600'>Organ</th>
                    <div class="flex flex-col">
                      <div class="flex-1 flex">
                        <div class="p-5 border-b-2 border-gray-600 flex items-center justify-center" colspan="2">
                          <b>Number of Samples</b>
                        </div>
                      </div>
                      <div class="flex-1 flex">
                        <div class="w-1/2 border-r border-gray-600 p-5 flex items-center justify-center">
                          <b>ASD</b>
                        </div>
                        <div class="w-1/2 border-l border-gray-600 p-5 flex items-center justify-center">
                          <b>Control</b>
                        </div>
                      </div>
                    </div>
                    <th className='p-5 border-2 border-gray-600'>Experiment Details</th>
                  </tr>
                  <tr className='p-5 font-semibold bg-[#E6E0EC]'>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>{item?.Gene_Symbol}</td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.SFARI_Gene_score}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA17_Log2FC}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {item?.ASD_BA17_FDR}
                    </td>
                    <td className='p-5 border-2 border-gray-600 text-[#FA0304] font-semibold'>
                      {
                        item?.ASD_BA17_Log2FC > 0 && <>Upregulation</>
                      }
                      {
                        item?.ASD_BA17_Log2FC < 0 && <>Downregulation</>
                      }
                    </td>
                    <td className='p-5 border-2 border-gray-600 font-semibold'>Idiopathic ASD vs Control</td>
                    <td className='p-5 border-2 border-gray-600 font-semibold'>
                      BA38
                    </td>
                    <td className='p-5 border-2 border-gray-600 font-semibold'>Postmortem Brain Tissue</td>
                    <td className="p-5 border-2 border-gray-600 relative">
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 border-r border-gray-600 flex items-center justify-center">
                          28
                        </div>
                        <div className="w-1/2 border-l border-gray-600 flex items-center justify-center">
                          28
                        </div>
                      </div>
                    </td>
                    <td className='p-5 border-2 border-gray-600 font-semibold'>
                      <Link href='/chart12' target='_blank'>
                        Click here
                      </Link>
                    </td>
                  </tr>
                </table>
              </div>



            </div>
          ))
        )}
      </div>
    </div>
  );
}
