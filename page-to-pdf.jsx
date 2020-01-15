//GLOBALS
var app, Folder, File, ExportFormat;

var activeDocument = app.activeDocument;
var pageIndex;

var folder = Folder.selectDialog("Choose a Folder");
var oldPageRange = app.pdfExportPreferences.pageRange;

var page, pageNumber, file;
for (pageIndex = 0; pageIndex < activeDocument.pages.length; pageIndex += 1) {
    page = app.activeDocument.pages[pageIndex];
    pageNumber = pageIndex + 1;
    file = new File(folder + "/" + activeDocument.name.substring(0, activeDocument.name.lastIndexOf('.')) + "-" + pageNumber + ".pdf");
    app.pdfExportPreferences.pageRange = pageNumber.toString();
    app.activeDocument.exportFile(ExportFormat.PDF_TYPE, file);
}

app.pdfExportPreferences.pageRange = oldPageRange;
