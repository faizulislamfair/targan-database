import React from 'react';

const chart1 = () => {
    return (
        <div className='p-5'>

            <div className='text-[#1C47F2] font-bold text-[20px]'>
                Chart 1. Experiment Summary
            </div>

            <div className="bg-[#F2DCDB] p-3 border-2 border-black mt-3">
                <u><b>Experiment Details</b></u> <br />
                <b>Clinical Manifestation:</b> <br />
                IdiopathicASD and Neurotypical Control <br />
                <b>Comparison Group:</b> <br />
                Idiopathic ASD Individuals vs Neurotypical Controls <br />
                <b>Organ: </b> <br />
                Postmortem Cerebral Cortex <br />
                <b>Comparing Organ Type: </b> <br />
                Whole Cortex <br />
                <b>Number of Subjects/Samples: </b> <br />
                i. &nbsp; &nbsp; &nbsp; &nbsp; Idiopathic ASD Individuals (Cortex): 49 <br />
                ii. &nbsp; &nbsp; &nbsp; &nbsp; Neurotypical Controls (Cortex): 54 <br />

                <b>Sample Characteristics: </b> <br />
                i. &nbsp; &nbsp; &nbsp; &nbsp; ASD Cortex: Frontal, Temporal, Parietal and Occipital Lobes <br />
                ii. &nbsp; &nbsp; &nbsp; &nbsp; Control Cortex: Frontal, Temporal, Parietal and Occipital Lobes <br />

                <b>Data Type: </b> <br />
                RNA-seq <br />

                <b>Gene Expression: </b> <br />
                mRNA/Non-coding RNA <br />

                <b>Species: </b> <br />
                Human <br />
                <b>Experiment Name:</b> <br />
                Broad Transcriptomic Dysregulation Occurs Across the Cerebral Cortex in ASD <br />

                <u><b>References</b></u> <br />
                Gandal MJ, Haney JR, Wamsley B, et al. Broad transcriptomic dysregulation occurs across the cerebral cortex in ASD. Nature. 2022;611(7936):532-539. <br />

            </div>

        </div>
    );
};

export default chart1;