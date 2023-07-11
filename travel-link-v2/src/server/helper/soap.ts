import easySoapRequest from 'easy-soap-request'
import { parseString } from 'xml2js'

const sampleHeaders = {
    "Content-Type": "text/xml;charset=UTF-8",
  };

export const numberToWordsXml = (number: number) => {
    return `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
          <ubiNum>${number}</ubiNum>
        </NumberToWords>
      </soap:Body>
    </soap:Envelope>`
}

export const getSoapResponse = async (url: string, xml: string) => {
    let body = {}
    const { response } = await easySoapRequest({ url: url, headers: sampleHeaders, xml: xml });
    parseString(response.body,(err: Error | null, result: any) => body = result)
    return body
}

export const getNumberToWordsBody = (body: any) => {
    let result = body['soap:Envelope']['soap:Body'][0]['m:NumberToWordsResponse'][0]['m:NumberToWordsResult'][0]
    return result

}