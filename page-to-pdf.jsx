var activeDocument = app.activeDocument;

var folder = Folder.selectDialog ("Choose a Folder");
var oldPageRange = app.pdfExportPreferences.pageRange;

for (var p = 0; p < activeDocument.pages.length; p++) {
    var page = app.activeDocument.pages[p];
    var pageNumber = p+1;
    var file = new File(folder + "/" + activeDocument.name.substring(0, activeDocument.name.lastIndexOf('.')) + "-" + pageNumber + ".pdf");
    app.pdfExportPreferences.pageRange = pageNumber.toString();
    app.activeDocument.exportFile(ExportFormat.PDF_TYPE, file);
}

app.pdfExportPreferences.pageRange = oldPageRange;
