import { useParams } from "react-router-dom";

const ShareLink = () => {
    const { surveyID } = useParams()
    const hostName = window.location.hostname
    const portNum = window.location.port
    const surveyLink = hostName + ":" + portNum + "/survey/" +  surveyID
    const copyLink = () => {
        const linkInput = document.getElementById("sharable-link")
        linkInput.select()
        linkInput.setSelectionRange(0, 99999)
        navigator.clipboard.writeText(surveyLink)
    }

    return (
        <div className="min-h-screen bg-gray-500 flex justify-center items-center flex-col">
            <p className="text-center pb-2">Share this link with all participants</p>
            <div className="flex gap-2">
                <input className="outline-none rounded-md p-1" id="sharable-link" type="text" value={surveyLink} readOnly/>
                <button onClick={copyLink} className="bg-black text-white rounded-md p-1">Copy link</button>
            </div>
            <div className="flex gap-4 mt-4">
                <a href={`/survey/${surveyID}`} target="_blank"><button className="bg-[#c2fbd7] rounded-full w-28 h-10 shadow-md shadow-emerald-300 ease-in duration-200 hover:shadow-emerald-400 hover:scale-105 hover:shadow-lg">Go to Link</button></a>
                <a href={`/survey/${surveyID}`} target="_blank"><button className="bg-[#c2fbd7] rounded-full w-28 h-10 shadow-md shadow-emerald-300 ease-in duration-200 hover:shadow-emerald-400 hover:scale-105 hover:shadow-lg">View Results</button></a>
            </div>
        </div>
    )
}

export default ShareLink;