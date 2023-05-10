import { google } from "googleapis"


const docID = "1qi7iNMQx5bN3AAVfHVA5un3M82xLMv_VNFtUcvlIQ9E";

// Default API call via website 
export default async function fetchAppsScript(url) {
    const response = await fetch(
      url
    );
  
    const data = await response.json();
  
    return data;
  }
  
  //Direct grab of Doc from google docs, OAuth2 authentication provided to get the doc.
  async function getDocument() {
    const auth = await google.auth.getClient({
      scopes: ["https://www.googleapis.com/auth/documents.readonly"],
    });
  
    const docs = google.docs({ version: "v1", auth });
  
    // Query
  
    const response = await docs.documents.get({
      documentId: "1qi7iNMQx5bN3AAVfHVA5un3M82xLMv_VNFtUcvlIQ9E",
    });
  
    // Result
  
    const data = response.data;
  
    // console.log(data.body.content[1].paragraph);
  
    // .paragraph.elements[0].textRun.content
  
    return data.inlineObjects['kix.brdtu2lox1wh'].inlineObjectProperties.embeddedObject.imageProperties.contentUri
    //const urlKix = data.body.content[3].paragraph.elements[0].inlineObjectElement.inlineObjectId
  
    //const url = response.inlineObjects[`${urlKix}`].inlineObjectProperties.embeddedObject.imageProperties.sourceUri
  }