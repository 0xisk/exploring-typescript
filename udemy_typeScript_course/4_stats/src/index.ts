import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from "./reportTargets/consoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";

// Create an object that statisfies the 'Data Reader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in sth statisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man united"),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);