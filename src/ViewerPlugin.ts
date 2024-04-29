import {App} from 'vue';
import { SignaturePdf } from './components/';
import pinia from './pinia';
// const encoded = encodeURIComponent();
export default {
    install : (app:App, options:{pdfUrl: string} = {pdfUrl : "https://localhost:7278/api/document/pdf/second/41deb352-9fc7-405f-8203-3396df763dd4"}) =>{
        app.use(pinia)
        app.component("SignaturePdf",SignaturePdf);
        app.provide("PdfUploadUrl",options.pdfUrl)
    }
};


export {SignaturePdf};