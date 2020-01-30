import jspdf from "jspdf";
import html2canvas from "html2canvas";

window.html2canvas = html2canvas;

const makePDF = () => {
  console.log("PDF request");
  const pdf = new jspdf("p", "pt", "a4");
  pdf.setProperties({
    title: "Resume",
    subject: "Curriculum vitæ",
    author: "Creative Resume"
  });
  pdf.addHTML(document.getElementById("makePdf"), () => {
    let ps_filename = "QR_CODE";
    pdf.save(ps_filename + ".pdf");
  });
};

export default makePDF;
