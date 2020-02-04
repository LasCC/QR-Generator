import jsPDF from "jspdf";
import html2canvas from "html2canvas";

window.html2canvas = html2canvas;

// const makePDF = () => {
//   console.log("PDF request");
//   const pdf = new jspdf("p", "pt", "a4");
//   pdf.setProperties({
//     title: "Resume",
//     subject: "Curriculum vitæ",
//     author: "Creative Resume"
//   });
//   pdf.addHTML(document.getElementById("makePdf"), () => {
//     let ps_filename = "QR_CODE";
//     pdf.save(ps_filename + ".pdf");
//   });
// };

const makePDF = () => {
  html2canvas(document.body).then(canvas => {
    let pdf = new jsPDF("p", "mm", "a4");
    pdf.addHTML(document.getElementById("makePdf"), () => {
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 1, 0, 211, 298);
    });
    let ps_filename = "QR_CODE";
    pdf.save(ps_filename + ".pdf");
  });
};
export default makePDF;
