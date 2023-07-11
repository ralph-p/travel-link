import { airTransportOptions } from '@/constants/form'
import easySoapRequest from 'easy-soap-request'
const url = "https://my-soap-server";
const sampleHeaders = {
  "Content-Type": "text/xml;charset=UTF-8",
  SOAPAction: "https://my-soap-action/something"
};
const partyID = 'Sabre_API'
const Username = 'test'
const Password = 'test'
const Organization = 'Sabre_API'
const xml = `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
<SOAP-ENV:Header>
    <MessageHeader xmlns="http://www.ebxml.org/namespaces/messageHeader">
        <From>
            <PartyId>Agency</PartyId>
        </From>
        <To>
            <PartyId>${partyID}</PartyId>
        </To>
        <ConversationId>STX_2019_Postman</ConversationId>
        <Action>SessionCreateRQ</Action>
    </MessageHeader>
    <Security xmlns="http://schemas.xmlsoap.org/ws/2002/12/secext">
        <UsernameToken>
            <Username>${Username}</Username>
            <Password>${Password}</Password>
            <Organization>${Organization}</Organization>
            <Domain>DEFAULT</Domain>
        </UsernameToken>
    </Security>
</SOAP-ENV:Header>
<SOAP-ENV:Body>
    <SessionCreateRQ xmlns="http://www.opentravel.org/OTA/2002/11">
        <POS>
            <Source PseudoCityCode="IX50" />
        </POS>
    </SessionCreateRQ>
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>`;
export default function handler(req, res) {
  const { request } = easySoapRequest({
    url,
    sampleHeaders,
    xml,
    timeout: 1000,

  })
  res.status(200).json({ options: airTransportOptions })
}
