"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// Create an object that statisfies the 'Data Reader' interface
// const csvFileReader = new CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in sth statisfying
// the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
/* const summary = new Summary(
  new WinsAnalysis("Man united"),
  new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches); */
