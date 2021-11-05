import { useState } from 'react';
import {TextInput} from '../inputs';

export default function TypingField(){
    const [words, setWords] = useState("about|above|add|after|again|air|all|almost|along|also|always|America|an|and|animal|another|answer|any|are|around|as|ask|at|away|back|be|because|been|before|began|begin|being|below|between|big|book|both|boy|but|by|call|came|can|car|carry|change|children|city|close|come|could|country|cut|day|did|different|do|does|don't|down|each|earth|eat|end|enough|even|every|example|eye|face|family|far|father|feet|few|find|first|follow|food|for|form|found|four|from|get|girl|give|go|good|got|great|group|grow|had|hand|hard|has|have|he|head|hear|help|her|here|high|him|his|home|house|how|idea|if|important|in|Indian|into|is|it|its|it's|just|keep|kind|know|land|large|last|later|learn|leave|left|let|letter|life|light|like|line|list|little|live|long|look|made|make|man|many|may|me|mean|men|might|mile|miss|more|most|mother|mountain|move|much|must|my|name|near|need|never|new|next|night|no|not|now|number|of|off|often|oil|old|on|once|one|only|open|or|other|our|out|over|own|page|paper|part|people|picture|place|plant|play|point|put|question|quick|quickly|quite|read|really|right|river|run|said|same|saw|say|school|sea|second|see|seem|sentence|set|she|should|show|side|small|so|some|something|sometimes|song|soon|sound|spell|start|state|still|stop|story|study|such|take|talk|tell|than|that|the|their|them|then|there|these|they|thing|think|this|those|thought|three|through|time|to|together|too|took|tree|try|turn|two|under|until|up|us|use|very|walk|want|was|watch|water|way|we|well|went|were|what|when|where|which|while|white|who|why|will|with|without|word|work|world|would|write|year|you|young|your");
    const [looseWords, setLooseWords] = useState(words.split("|").sort(() => Math.random() - 0.5));
    const [activeWord, setActiveWord] = useState(0);
    const [activeLetter, setActiveLetter] = useState(0);

    return(
        <div className='flex flex-col w-full space-y-3 mt-10'>
            <div className='w-11/12 sm:w-1/2 lg:w-1/3 mx-auto'>
                <div className='flex w-full justify-between'>
                    <p className='font-bold'>100 words</p>
                    <p>1:00</p>
                </div>
                <div className='flex justify-between p-3 my-5 flex-wrap h-96 overflow-y-scroll'>
                    {looseWords && looseWords.map((word, i)=>{
                        return (
                            <div key={i} className={`mr-1 ${i==activeWord && 'scale-105 text-blue-400'}`}>
                                <div>{word}</div>
                            </div>
                        )
                    })}
                </div>
                <TextInput placeholder='start by typing here'></TextInput>
            </div>
        </div>
    )
}