import { MatchReader } from './MatchReader';
import { Summary } from "./Summary";

// Create an object that statisfies the 'Data Reader' interface
// const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in sth statisfying
// the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

Summary.winsAnalysisWithHtmlReport('Man United');

/* const summary = new Summary(
  new WinsAnalysis("Man united"),
  new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches); */

