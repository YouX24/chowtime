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
            <p>You can copy and share this link to people participating in your survey</p>
            <div>
                <input className="outline-none w-50 p-1 rounded-tl-lg rounded-bl-lg" id="sharable-link" type="text" value={surveyLink}/>
                <button onClick={copyLink} className="bg-green-600 p-1 rounded-tr-lg rounded-br-lg">Copy</button>
            </div>
        </div>
    )
}

export default ShareLink;