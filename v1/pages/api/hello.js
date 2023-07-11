// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import easySoapRequest from 'easy-soap-request'
import { parseString } from 'xml2js'

const url = "https://www.dataaccess.com/webservicesserver/NumberConversion.wso";
const sampleHeaders = {
  "Content-Type": "text/xml;charset=UTF-8",
};
const num = 500
const xml = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
      <ubiNum>${num}</ubiNum>
    </NumberToWords>
  </soap:Body>
</soap:Envelope>`;
export default async function handler(req, res) {
  try {

    const { response } = await easySoapRequest({ url: url, headers: sampleHeaders, xml: xml });
    let body = {}
    parseString(response.body, (err, result) => body = result)
    console.log(body['soap:Envelope']['soap:Body'][0]['m:NumberToWordsResponse'][0]['m:NumberToWordsResult'][0]);
    res.status(200).json({ response: body['soap:Envelope']['soap:Body'][0]['m:NumberToWordsResponse'][0]['m:NumberToWordsResult'][0] })

  } catch (error) {
    console.log(error);
  }
}
