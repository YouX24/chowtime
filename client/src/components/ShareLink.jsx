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
        <div className="min-h-screen bg-[#89C7AE] flex justify-center items-center flex-col p-2">
            <p className="text-center pb-2">Share this link with participants</p>
            <div className="flex justify-center gap-2 w-full">
                <input className="outline-none rounded-md w-[35rem] p-1 text-center" id="sharable-link" type="text" value={surveyLink} readOnly/>
                <button onClick={copyLink} className="bg-[#3B584D] text-white rounded-md p-2 ease-in-out duration-100 w-24 hover:scale-105">Copy link</button>
            </div>
            <div className="flex gap-4 mt-4">
                <a href={`/survey/${surveyID}`} target="_blank"><button className="bg-[#FFDCC8] rounded-full w-28 h-10 shadow-md shadow-gray-400 ease-in-out duration-200 hover:scale-105 hover:shadow-lg hover:shadow-gray-500">Go to Link</button></a>
                <a href={`/result/${surveyID}`} target="_blank"><button className="bg-[#FFDCC8] rounded-full w-28 h-10 shadow-md shadow-gray-400 ease-in-out duration-200 hover:scale-105 hover:shadow-lg hover:shadow-gray-500">View Results</button></a>
            </div>
        </div>
    )
}

export default ShareLink;